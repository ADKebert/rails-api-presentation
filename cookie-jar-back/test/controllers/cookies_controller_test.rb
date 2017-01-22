require 'test_helper'

class CookiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cooky = cookies(:one)
  end

  test "should get index" do
    get cookies_url, as: :json
    assert_response :success
  end

  test "should create cooky" do
    assert_difference('Cookie.count') do
      post cookies_url, params: { cooky: { name: @cooky.name } }, as: :json
    end

    assert_response 201
  end

  test "should show cooky" do
    get cooky_url(@cooky), as: :json
    assert_response :success
  end

  test "should update cooky" do
    patch cooky_url(@cooky), params: { cooky: { name: @cooky.name } }, as: :json
    assert_response 200
  end

  test "should destroy cooky" do
    assert_difference('Cookie.count', -1) do
      delete cooky_url(@cooky), as: :json
    end

    assert_response 204
  end
end
