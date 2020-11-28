require "./router"
require "json"

class App
  def initialize
    @router = Router.new

    @router.when :post, "/payloads" do
      handle_put_item
    end

    @router.when :get, "/payloads/:id" do |params|
      handle_get_item(params["id"])
    end
  end

  def handle_put_item
    {
      body:   "create payload",
      status: 201,
    }
  end

  def handle_get_item(id)
    {
      body:   "find payload #{id}",
      status: 200,
    }
  end

  def handle(route, body)
    @router.search(route, body) || handle_404
  end

  def handle_404
    {
      body:   {"message": "Not Found"}.to_json,
      status: 404,
    }
  end
end
