# Rails Intro 4/21/2022

Ruby on Rails is a framework written in the Ruby programming language

MVC architecture pattern

Model - database layer, business logic, data  
View - HTML, CSS, JavaScript, React  
Controller - switch board, traffic light

API - model and controller

$ rails -v

Major-minor-patch

Creating a new Rails app:  
$ `rails new my_first_rails_app -d postgresql -T`

`-d` - drops the existing SQLite db  
specify a replacement  
`-T` - drops the MiniTest framework  


Rails - server-side web application framework

Motto: "convention over configuration"  
"Rails magic" - Rails is opinionated


Rails files to make note of:
- Gemfile
- app/controllers
- app/models
- app/views
- config/routes.rb
- db


Start the Rails app:  
$ `rails server` or `rails s`

Create the db:  
$ `rails db:create`

Drop the db:  
$ `rails db:drop`
