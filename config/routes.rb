Rails.application.routes.draw do
  resources :ro_r_models
  get 'angular/index'
  get 'react/index'
  root 'main#index'
  get 'main/index'
  get 'main/cssTheme'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'adobe/post_webhook', to: 'adobe#post_webhook'
  get  'adobe/status', to: 'adobe#status'
  post 'adobe/status', to: 'adobe#status'

  ## react paroject 1 routes
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews
      resources :blogs
    end
  end
  # all non declred routed are directed here
  get '*path', to: 'react#index', via: :all
end
