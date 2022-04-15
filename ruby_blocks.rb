# Ruby Blocks 4/15/22

# While Loop
# preforms itteration until a certain condtion is met. 
# while 

# end

# while takes a condtion 
#   and preforms logic iteratively until that condtion is met
# end

# num = 1
# while num < 10
#   # please do soemthing for me
# end

# num = 1
# while num < 10
#   p "Bravo is the coolest, don't tell Alpha"
#   num += 1
# end

# nums_arr = []
# num = 1
# while num < 25
#   nums_arr << num 
#   num += 1
# end

# p nums_arr


# Blocks

# A block is an anonymous function that modiefies the behavior of the method. 
  # Blocks can be used in two styles: do/end, and curly brace blocks

# Each
# Works on a list of items. 
# Each needs an array to opperate on. 
# It uses the length of the array to determine how many times it should execute some code. 

groceries_array = ['Ketchup', 'eggs', 'jalepeno chips', 'spicy doritios', 'apple', 'peptobismol']

#         Method V   V Block
# groceries_array.each do
#   p 'whats good'
# end

#  parameter is Ruby Blocks use the "Pipes" symbol found above the return key and below your delete key.
# vocabulary
  # pipes
  # parameters

# groceries_array.each do |value|
#   p "I want #{value}"
# end

# Map
# mutl_arr = [2,23,45,68,120,300] Nothing happened?

# numbers = [2,23,45,68,120,300]

# mutl_arr = numbers.map do |value|
#   value * 3
# end

# p mutl_arr

# def show_odds nums_arr
#   nums_arr.map do |value|
#     if value.even?
#       'even'
#     else
#       value
#     end
#   end
# end

# p show_odds numbers

#  Ranges
# def show_odds nums
#   nums.map do |value|
#     if value.even?
#       'even'
#     else
#       value
#     end
#   end
# end

# p show_odds 1..99


# Select 
#  Very similar to filter
#  has a built in if/else statement that looks for boolean values

nums_arr =  [1,2,3,4,5,6,7,8,9]
nums_arr2 =  19..29

# def is_even array
#   array.select do |value|
#     value.even?
#   end
# end

# replace the do with a left curly bracket
# replace the end with a right curly bracket

def is_even array
  array.select { |value| value.even? }
end

p is_even nums_arr
p is_even nums_arr2
