require "./router"
require "json"
require "aws-dynamodb"
require "base64"
require "hashids"

class App
  DYNAMO_TABLE_NAME = "Payloads"

  DEFAULT_HEADERS = {
    "Access-Control-Allow-Origin"  => ENV["CORS_DOMAINS"],
    "Access-Control-Allow-Methods" => "POST",
    "Access-Control-Allow-Headers" => "Content-Type, Authorization",
  }

  def initialize
    @router = Router.new
    @dynamo = Aws::DynamoDB::Client.new(
      endpoint: ENV["DYNAMO_URL"]?
    )

    @router.when :post, "/payloads" do |_params, body|
      payload = JSON.parse(body)["payload"].as_s? if body
      handle_put_item(payload || "")
    end

    @router.when :get, "/payloads/:id" do |params|
      handle_get_item(params["id"])
    end

    @router.when :options, "/payloads" do
      {
        status_code: 200,
        body:        nil,
      }
    end

    @router.when :options, "/payloads/:id" do
      {
        status_code: 200,
        body:        nil,
      }
    end
  end

  def handle(route, body)
    @router.search(route, body) || handle_404
  rescue e
    puts e
    handle_500
  end

  private def handle_put_item(payload)
    binary = Base64.strict_encode(payload)
    payload_id = Hashids.new.encode([binary.hash % Int64::MAX])

    @dynamo.put_item(
      TableName: DYNAMO_TABLE_NAME,
      Item: {
        PayloadId: {S: payload_id},
        Value:     {B: binary},
      }
    )

    {
      body:        {payload_id: payload_id}.to_json,
      status_code: 201,
    }
  end

  private def handle_get_item(payload_id)
    item = @dynamo.get_item(
      TableName: DYNAMO_TABLE_NAME,
      Key: {
        PayloadId: {S: payload_id},
      },
      ConsistentRead: true,
      ReturnConsumedCapacity: "TOTAL"
    )["Item"]

    return handle_404 if item.nil?

    value = item["Value"].b.not_nil!
    {
      body:        {payload: Base64.decode_string(value)}.to_json,
      status_code: 200,
    }
  end

  private def handle_404
    {
      body:        {"message": "Not Found"}.to_json,
      status_code: 404,
    }
  end

  private def handle_500
    {
      body:        {"message": "Internal Server Error"}.to_json,
      status_code: 500,
    }
  end

  def prepare_table
    return if @dynamo.list_tables["TableNames"].includes?(DYNAMO_TABLE_NAME)
    @dynamo.create_table(
      TableName: DYNAMO_TABLE_NAME,
      AttributeDefinitions: [
        {
          AttributeName: "PayloadId",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        {
          AttributeName: "PayloadId",
          KeyType:       "HASH",
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits:  5,
        WriteCapacityUnits: 5,
      },
    )
  end
end
