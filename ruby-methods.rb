# Ruby Methods

# Define method with keyword 'def'
# Every 'def' needs a corresponding 'end'

def greeter
  "Hello world"
end

p greeter

# Implicit return: last line of method is returned


#________________________________

# Methods with Arguements

# def greeter(name)
#   "Hello #{name}!"
# end

# p greeter("Austin")
# p greeter("Andrew")



def greeter name
  "Hello #{name}!"
end

p greeter "Austin"
p greeter "Andrew"


#________________________________

# Methods with Multiple Arguements

def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7)


#_______________________________

# Methods with Conditional Logic

# Every 'def' needs an 'end'
# Every 'if' needs an 'end'

# Indentation is crucial to know which end is going to which scope

def great_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end

p great_num(27, 22)
p great_num(20, 22)
p great_num(22, 22)


#_______________________________

# Getting User Input

puts 'Please enter your name'
user_name = gets.chomp
p user_name

puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age.class


def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}!  #{age} is old enough to vote"
  else
    "Hi #{name}!  #{age} is not old enough to vote"
  end
end

p can_you_vote(user_name, user_age)
