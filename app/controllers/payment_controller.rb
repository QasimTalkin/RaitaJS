class PaymentController < ApplicationController
    def index
    end

        
    def status
        if (request.method == 'GET')
        render :json => {:status =>"qasim", :error => "Webhook failed"} and return  
        else
            render :json => {:status =>request.format, :error => "Webhook-failed"} and return  
        end
    end



  end
  
