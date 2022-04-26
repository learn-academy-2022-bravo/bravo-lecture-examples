Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/nachos' => 'food_truck#nachos'
  get '/jonathan' => 'food_truck#tacos'
  root 'food_truck#truck_menu'
end
