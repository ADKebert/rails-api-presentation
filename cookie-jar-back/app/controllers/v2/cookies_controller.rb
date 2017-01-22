module V2
  class CookiesController < ApplicationController
    # GET /cookies
    def index
      @cookies = Cookie.all.map{ |cookie| { key: cookie.id, name: cookie.name } }

      render json: @cookies
    end
  end
end
