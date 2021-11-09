Rails.application.routes.draw do
  root 'main#index'
  get 'main/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   post 'adobe/post_webhook', to: 'adobe#post_webhook'
   get  'adobe/status', to: 'adobe#status'
   post 'adobe/status', to: 'adobe#status'
end
