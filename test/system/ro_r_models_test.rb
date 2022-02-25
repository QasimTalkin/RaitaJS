require "application_system_test_case"

class RoRModelsTest < ApplicationSystemTestCase
  setup do
    @ro_r_model = ro_r_models(:one)
  end

  test "visiting the index" do
    visit ro_r_models_url
    assert_selector "h1", text: "Ro R Models"
  end

  test "creating a Ro r model" do
    visit ro_r_models_url
    click_on "New Ro R Model"

    fill_in "Add", with: @ro_r_model.add
    fill_in "Dob", with: @ro_r_model.dob
    fill_in "Game", with: @ro_r_model.game
    fill_in "Name", with: @ro_r_model.name
    fill_in "Score", with: @ro_r_model.score
    click_on "Create Ro r model"

    assert_text "Ro r model was successfully created"
    click_on "Back"
  end

  test "updating a Ro r model" do
    visit ro_r_models_url
    click_on "Edit", match: :first

    fill_in "Add", with: @ro_r_model.add
    fill_in "Dob", with: @ro_r_model.dob
    fill_in "Game", with: @ro_r_model.game
    fill_in "Name", with: @ro_r_model.name
    fill_in "Score", with: @ro_r_model.score
    click_on "Update Ro r model"

    assert_text "Ro r model was successfully updated"
    click_on "Back"
  end

  test "destroying a Ro r model" do
    visit ro_r_models_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ro r model was successfully destroyed"
  end
end
