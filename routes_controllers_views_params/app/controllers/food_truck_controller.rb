class FoodTruckController < ApplicationController
  
  def nachos
  end

  def tacos
  end
  
  def truck_menu
    @prices = { "Entree": params[:entree_price], "Drinks": params[:drink_price]}

    @extended_menu = ["Funnel Cake", "Fried Pickels", "Cheeseburger", "Deep Fried Onions"]
  end

end
