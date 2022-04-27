Rails Routes Views COntrollers Params 4/26/22

# Set up Commands
$ rails new routes_controllers_views_params -d postgresql -T
$ cd routes_views...
$ rails db:create
$ rails generate controller FoodTruck
      create  app/controllers/food_truck_controller.rb
      invoke  erb
      create    app/views/food_truck
      invoke  helper
      create    app/helpers/food_truck_helper.rb
 $ rails s

1. Controllers - The brain centers of our app that decided what to do with request and how to respond 
2. Routes - How our user makes requests to our application
3. Views - are what can be seen by our user in our application 
4. Params - How our user can give us information dynamically 

# Goals
- Let's make a website where our user can look at a menu for our food truck
- The user can dynamically request different items
- They can use links to navigate the site and not directly change the url

## The Controller
- is responsible for taking in external requests and deciding on internal actions. Controllers are super good with people friendly URL's
- When a controller handles an action correctly the response the controller will be a status code of 200 and some kind of action

```ruby
  def nachos
    render html: "Tameka's favorite food is Nachos"
  end
```

# Routes
The address that our user can use to connect to our application and access it's different sections.

route format

http verb  url route => 'controller#method'
get       '/nachos'  => 'food_truck#nachos'
root 'controller#method'

# Recap
1. Made an app
2. created a db
3. generated a controller named FoodTruck
4. set up a few routes
5. bounced back on screens making everyone sick
6. rooted on of our routes

# The Views (not the show)
The Rials application allows us to write html in the app so that we can have a fully self contained full stack application. 

app/views/food_truck/method_name.html.erb

## ERB 
is an extension for HTML that allows to write ruby code alongside the HTML or inject it into our HTML. In these files we can write HTML as normal but we can also use a new tag <% %> to inject ruby code into our file. 

<h1></h1> 
<table></table>
<p></p>
<ol></ol>

### Embeded ruby tag
<% write_ruby_code_here %>
### Embedded ruby tag for display
<%= write_ruby_code_here %>

<p><%= link_to 'Home', '/' %></p>


# Recap 2
1. Made an app
2. created a db
3. generated a controller named FoodTruck
4. set up a few routes 
5. bounced back on screens making everyone sick
6. rooted on of our routes
8. make a couple of views using html.erb
9. cleaned up our methods to allow rails to works it's magic and map the controller to the views themselves


# Instance Variable
The instance variable is declared in the method associated with the view and can be called in the view. Instance variables re very powerful as they are accessible to the entire class and therefore all of the views associated with that same controller. Naming conventions with Instance variables are very important. 

```ruby
 def truck_menu
    @prices = { "Entree": 10, "Drinks": 15}
    @extended_menu = ["Funnel Cake", "Fried Pickels", "Cheeseburger", "Deep Fried Onions"]\
  end

  <% @extended_menu.each do |value| %>
  <li> <%= value %> </li>
  <% end %>
```

# Params
  Params are "the" way to dynamically pass information into our application using the URL. 
  in order to set up our application for parasm we first set up the desired param in the routes our our routes.rb file

  config/routes.rb
  `get '/menu/:entree_price' => 'food_truck#truck_menu'`

  then inside the controller we call on the key word "params" and pass the symbol we created in the route inside of the key notation. 

  ```ruby
     @prices = { "Entree": params[:entree_price], "Drinks": 12}
  ```
This will give us a hash as a return when our user navigates to the url and passes us a value.
Key entree_price will have a value that is a string of whatever was passed in the URL.  

# Recap 3
1. Made an app
2. created a db
3. generated a controller named FoodTruck
4. set up a few routes 
5. bounced back on screens making everyone sick
6. rooted on of our routes
8. make a couple of views using html.erb
9. cleaned up our methods to allow rails to works it's magic and map the controller to the views themselves
10. We added instance variables to our methods that hold data and make the data available to our views
11. we did logic in our views to display that data
12. We created dynamic routes using params and called on those params inside our methods to use the data.
