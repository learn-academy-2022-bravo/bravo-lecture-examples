# Rails Associations 4/25/2022

Core Concepts
- Relationships between tables
- has_many belongs_to
- Every table has a primate key - id:numbers
- Foreign key - reference to another table's primary key

Setup
- rails new associations -d postgresql -T
- rails db:create

Databases
- rails g model Cohort name:string year:string
- rails g model Student name:string cohort_id:integer


Model Classes
- app/models/cohort.rb
```ruby
class Cohort < ApplicationRecord
  has_many :students
end
```
- app/models/student.rb
```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```

Added Cohorts
- rails c
- Cohort.create(name: 'Alpha', year: '2022')
- Cohort.create(name: 'Bravo', year: '2022')

Add Students
- Identify a cohort: bravo = Cohort.find(2)
- bravo.students.create(name: 'Samir')
- alpha = Cohort.where(name: 'Alpha').first
