module Api
    module V1

       class AirlinesController < ApplicationController
            skip_before_action :verify_authenticity_token
            def index
                airline = Airline.all
                render_json(airline, options)
            end
            def show
                airline = Airline.find_by(slug: params[:slug])
                render_json(airline, options)
            end
            def create
                airline = Airline.new(airline_params)
                if airline.save 
                    render_json(airline)
                else 
                    render json: {error: airline.errors.messages}, status: 422
                end
            end
            def update
                airline = Airline.find_by(slug: params[:slug])
                if airline.update(airline_params) 
                    render_json(airline, options)
                else 
                    render json: {error: airline.errors.messages}, status: 422
                end
            end
            def destroy
                airline = Airline.find_by(slug: params[:slug])
                if airline.destroy 
                    head :no_content
                else 
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            private 
            def airline_params
                params.require(:airline).permit(:name, :image_url)
            end
            def options
                @options ||= {include: %i[reviews]}
            end
            def render_json(airline, options = {})
                render json: AirlineSerializer.new(airline, options).serializable_hash
            end 
       end 
    end
end