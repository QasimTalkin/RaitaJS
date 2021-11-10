class AdobeController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
    end

        
    def status
        if (request.headers['X-AdobeSign-ClientId'].present?)

            if (request.method != 'GET')
                Adobe.create(name: request.headers['X-AdobeSign-ClientId']) do |u|
                    u.httpmethod = request.method
                    u.req = request.original_url
                    u.resp = JSON.parse(request.body.read)['agreement']['id']
                end
            end
            set_headers (request.headers['X-AdobeSign-ClientId'])
        else
            render :json => {:status =>400, :error => "GET Request - Webhook-failed"} and return  
        end
    end



    def set_headers(clientId)
        response.headers['X-AdobeSign-ClientId'] = clientId
        response.headers['status'] = 200
    end
end

