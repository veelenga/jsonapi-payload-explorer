require "http/server"
require "./app"

app = App.new

server = HTTP::Server.new do |context|
  req, res = context.request, context.response

  method, path, body = req.method, req.path, req.body.try(&.gets_to_end)
  result = app.handle("/#{method}#{path}", body)

  res.headers.add("Access-Control-Allow-Origin", ENV["FE_URL"])
  res.headers.add("Access-Control-Allow-Methods", "POST")
  res.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")

  res.content_type = "application/json"
  res.status_code = result[:status_code]
  res.print result[:body]
end

app.prepare_table

address = server.bind_tcp "0.0.0.0", 8001
puts "Listening on http://#{address}"
server.listen
