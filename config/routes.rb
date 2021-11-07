Rails.application.routes.draw do
  root 'main#index'
  get 'main/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'payment/post_webhook', to: 'payment#post_webhook'
  get 'payment/status', to: 'payment#status'
end
