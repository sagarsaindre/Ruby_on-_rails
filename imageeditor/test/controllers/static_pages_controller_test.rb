require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get imageedit" do
    get static_pages_imageedit_url
    assert_response :success
  end

end
