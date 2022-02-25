class RoRModelsController < ApplicationController
  before_action :set_ro_r_model, only: %i[ show edit update destroy ]

  # GET /ro_r_models or /ro_r_models.json
  def index
    @ro_r_models = RoRModel.all
  end

  # GET /ro_r_models/1 or /ro_r_models/1.json
  def show
  end

  # GET /ro_r_models/new
  def new
    @ro_r_model = RoRModel.new
  end

  # GET /ro_r_models/1/edit
  def edit
  end

  # POST /ro_r_models or /ro_r_models.json
  def create
    @ro_r_model = RoRModel.new(ro_r_model_params)

    respond_to do |format|
      if @ro_r_model.save
        format.html { redirect_to @ro_r_model, notice: "Ro r model was successfully created." }
        format.json { render :show, status: :created, location: @ro_r_model }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ro_r_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ro_r_models/1 or /ro_r_models/1.json
  def update
    respond_to do |format|
      if @ro_r_model.update(ro_r_model_params)
        format.html { redirect_to @ro_r_model, notice: "Ro r model was successfully updated." }
        format.json { render :show, status: :ok, location: @ro_r_model }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ro_r_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ro_r_models/1 or /ro_r_models/1.json
  def destroy
    @ro_r_model.destroy
    respond_to do |format|
      format.html { redirect_to ro_r_models_url, notice: "Ro r model was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ro_r_model
      @ro_r_model = RoRModel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ro_r_model_params
      params.require(:ro_r_model).permit(:game, :name, :score, :add, :dob)
    end
end
