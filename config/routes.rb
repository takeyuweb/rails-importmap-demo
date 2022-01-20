Rails.application.routes.draw do
  get 'hello/react'
  root "articles#index"
  resources :articles
end
