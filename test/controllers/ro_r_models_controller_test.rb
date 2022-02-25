require 'test_helper'

class RoRModelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ro_r_model = ro_r_models(:one)
  end

  test "should get index" do
    get ro_r_models_url
    assert_response :success
  end

  test "should get new" do
    get new_ro_r_model_url
    assert_response :success
  end

  test "should create ro_r_model" do
    assert_difference('RoRModel.count') do
      post ro_r_models_url, params: { ro_r_model: { add: @ro_r_model.add, dob: @ro_r_model.dob, game: @ro_r_model.game, name: @ro_r_model.name, score: @ro_r_model.score } }
    end

    assert_redirected_to ro_r_model_url(RoRModel.last)
  end

  test "should show ro_r_model" do
    get ro_r_model_url(@ro_r_model)
    assert_response :success
  end

  test "should get edit" do
    get edit_ro_r_model_url(@ro_r_model)
    assert_response :success
  end

  test "should update ro_r_model" do
    patch ro_r_model_url(@ro_r_model), params: { ro_r_model: { add: @ro_r_model.add, dob: @ro_r_model.dob, game: @ro_r_model.game, name: @ro_r_model.name, score: @ro_r_model.score } }
    assert_redirected_to ro_r_model_url(@ro_r_model)
  end

  test "should destroy ro_r_model" do
    assert_difference('RoRModel.count', -1) do
      delete ro_r_model_url(@ro_r_model)
    end

    assert_redirected_to ro_r_models_url
  end
end
