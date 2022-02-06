module Api
    module V1
       class ReviewsController < ApplicationController
        skip_before_action :verify_authenticity_token
            def index
                render json: Review.all.as_json 
            end   
            def create
                review = Review.new(review_params)
                if review.save 
                    render json: review.serializable_hash
                else 
                    render json: {error: review.errors.messages}, status: 422
                end
            end
            def destroy
                review = Review.find_by(slug: params[:id])
                if review.destroy 
                    head :no_content
                else 
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            private 
            def review_params
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end
            
       end 
    end
end