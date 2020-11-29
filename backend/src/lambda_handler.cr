require "./app"
require "json"
require "crambda"

def handler(event : JSON::Any, context : Crambda::Context)
  http = event["requestContext"]["http"]

  method, path, body = http["method"], http["path"], event["body"]?

  result = App.new.handle("/#{method}#{path}", body)

  {
    statusCode: result[:status_code],
    body:       result[:body],
    headers:    App::DEFAULT_HEADERS,
  }
end

Crambda.run_handler(->handler(JSON::Any, Crambda::Context))
