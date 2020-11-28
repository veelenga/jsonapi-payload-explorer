require "radix"

class Router
  alias Response = NamedTuple(body: String?, status_code: Int32)
  alias Handler = Hash(String, String), String -> Response

  def initialize
    @tree = Radix::Tree(Handler).new
  end

  def when(method : Symbol, path : String, &handler : Handler)
    @tree.add("/#{method.to_s.upcase}#{path}", handler)
  end

  def search(route, body)
    route = @tree.find(route)
    if route.found?
      route.payload.call(route.params, body.to_s)
    end
  end
end
