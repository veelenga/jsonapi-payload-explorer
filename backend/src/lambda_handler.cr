require "./app"
require "json"
require "crambda"

def handler(event : JSON::Any, context : Crambda::Context)
  http = event["requestContext"]["http"]

  method, path, body = http["method"], http["path"], event["body"]?

  App.new.handle("/#{method}#{path}", body)[:body]
end

Crambda.run_handler(->handler(JSON::Any, Crambda::Context))
