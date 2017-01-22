module V1
  class CookiesController < ApplicationController
    # GET /cookies
    def index
      @cookies = Cookie.all.map{ |cookie| { key: cookie.id, value: cookie.name } }

      render json: @cookies
    end
  end
end
