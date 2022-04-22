# Active Record Intro 4/22/2022

General Notes:
- Active Record is a Ruby gem
- Active Record is an ORM - object relational mapping, a translator between Ruby <-> SQL

Database Notes:
- During development the database lives on your personal computer
- Rails app - collection of folders and files that can be accessed on GitHub

Model:
- MVC - model, view, controller, today we are working with the model layer
- Model class defines the structure of the db
- Model will allow us to store data in the form of a table

Creating Model:
- Rails generate commands - creates files and folders the Rails way
- Active Record data types
- Generating a model: $ `rails generate model Schedule day:string date:date event:string`
- Creates a model class file and migration file

Migrations:
- Migrations interact with the database
- Migration creates the database: $ `rails db:migrate`
- Schema - a representation of the database

Interacting with the Database:
- $ `rails c`
- Performing Active Record queries that translate to SQL
- Primary key - Rails assigns an id column with a number
- `exit` ends the console session and goes back to the regular terminal

### CRUD

Read:
- `Shedule.all` -> [], returns an array of all the db instances
- `Shedule.first` returns the first instance
- `Shedule.last` returns the last instance
- `Shedule.find(2)` by id to get back one item
- `Schedule.find(3)`
- `Schedule.where(event: 'Yoga')` returns an array of all the instances where this is true

Create:
- Method for create that gets passed key value pairs
- Creating an new instance in the database
- `Schedule.create(day: 'Tuesday', date: '2022-04-19', event: 'Yoga')`
- `Schedule.create(day: 'Friday', date: '2022-04-22', event: 'Assessments')`

Update:
- Need to create a variable that holds that instance that we are updating
- `yoga = Schedule.where(event: 'Yoga').first`
- `yoga.update(event: 'Super Great Yoga')`
- `yoga` will show the updated instance
- `assessments = Schedule.find(2)`
- `assessments.update(event: 'Really Great But Scary White Boarding Practice')`


Delete:
- Need to create a variable that holds that instance that we are deleting
- `assessments = Schedule.find(2)`
- `assessments.destroy`
