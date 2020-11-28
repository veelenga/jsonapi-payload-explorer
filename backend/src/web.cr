require "http/server"
require "./app"

app = App.new

server = HTTP::Server.new do |context|
  req, res = context.request, context.response

  method, path, body = req.method, req.path, req.body.try(&.gets_to_end)
  result = app.handle("/#{method}#{path}", body)

  res.content_type = "application/json"
  res.status_code = result[:status_code]
  res.print result[:body]
end

address = server.bind_tcp 8000
puts "Listening on http://#{address}"
server.listen