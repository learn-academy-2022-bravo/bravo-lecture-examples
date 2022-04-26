# Active Record Validations 4/26/2022

Setup:
- rails new validations -d postgresql -T
- rails db:create

Add RSpec:
- bundle add rspec-rails
- rails generate rspec:install

Model:
- rails g model FoodTruck menu_item:string price:integer
- spec files!
- rails db:migrate
- rspec spec/models/food_truck_spec.rb

Tests:
- Practicing TDD
- Good failure: expected `[].empty?` to be falsey, got true
- File: spec/models/food_truck_spec.rb
```ruby
require 'rails_helper'

RSpec.describe FoodTruck, type: :model do
  it 'is valid with valid attributes' do
    tacos = FoodTruck.create(menu_item: 'Tonys Tacos', price: 3)
    expect(tacos).to be_valid
  end
  it 'to not be valid without menu_item' do
    tacos = FoodTruck.create(price: 3)
    expect(tacos.errors[:menu_item]).to_not be_empty
  end
  it 'to not be valid without price' do
    tacos = FoodTruck.create(menu_item: 'Tonys Tacos')
    expect(tacos.errors[:price]).to_not be_empty
  end
  it 'to not be valid outside 2-15 characters' do
    tacos = FoodTruck.create(menu_item: 'T', price: 3)
    expect(tacos.errors[:menu_item]).to_not be_empty
    long_tacos = FoodTruck.create(menu_item: 'Tonys Tacos that are really, really great!', price: 3)
    expect(long_tacos.errors[:menu_item]).to_not be_empty
  end
end
```

Validations:
- Statements that run every time a new instance is created
- app/models/food_truck.rb
```ruby
class FoodTruck < ApplicationRecord
  validates :menu_item, :price, presence: true
  validates :menu_item, length: { in: 2..15 }
end
```
