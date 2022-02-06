require 'httparty'

module Dataphile

    class DataphileClient
        include HTTParty
        base_uri 'https://wfmpprodrestapi.dataphile.broadridge.com/'
        pem  "#{File.expand_path(__dir__)}/app/services/datphile/keys/key.pem"
        ssl_ca_file "#{File.expand_path(__dir__)}/app/services/datphile/keys/cert.pem"

        def self.get_cert
            #get('https://wfmpprodrestapi.dataphile.broadridge.com/api/authenticate', verify: false)
        end

        def self.fetch
            get("api/authenticate", pem: "#{File.expand_path(__dir__)}/app/services/datphile/keys/key.pem", pem_password: ssl_ca_file)
          end
    end 

    def self.token_url(**payload)
        post(
          '/test/create',
          body: payload.to_json,
          headers: DEFAULT_HEADERS,
          verify: false
        )
      end

end
