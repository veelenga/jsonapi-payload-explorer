require "./router"
require "json"
require "aws-dynamodb"
require "base64"
require "uuid"

class App
  DYNAMO_TABLE_NAME = "Payloads"

  def initialize
    @router = Router.new
    @dynamo = Aws::DynamoDB::Client.new

    @router.when :post, "/payloads" do |_params, body|
      handle_put_item(body)
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
  end

  def handle_put_item(body)
    payload_id = UUID.random.hexstring

    @dynamo.put_item(
      TableName: DYNAMO_TABLE_NAME,
      Item: {
        PayloadId: {S: payload_id},
        Value:     {B: Base64.strict_encode(body)},
      }
    )

    {
      body:        {payload_id: payload_id}.to_json,
      status_code: 201,
    }
  end

  def handle_get_item(payload_id)
    item = @dynamo.get_item(
      TableName: "Payloads",
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

  def handle_404
    {
      body:        {"message": "Not Found"}.to_json,
      status_code: 404,
    }
  end
end
