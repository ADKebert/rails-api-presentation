class CookiesController < ApplicationController
  before_action :set_cooky, only: [:show, :update, :destroy]

  # GET /cookies
  def index
    @cookies = Cookie.all.map{ |cookie| { key: cookie.id, value: cookie.name } }

    render json: @cookies
  end

  # GET /cookies/1
  def show
    render json: @cooky
  end

  # POST /cookies
  def create
    @cooky = Cookie.new(cooky_params)

    if @cooky.save
      render json: @cooky, status: :created, location: @cooky
    else
      render json: @cooky.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cookies/1
  def update
    if @cooky.update(cooky_params)
      render json: @cooky
    else
      render json: @cooky.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cookies/1
  def destroy
    @cooky.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cooky
      @cooky = Cookie.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cooky_params
      params.require(:cooky).permit(:name)
    end
end
