# Ruby conditionals

# javascript
# let color = "purple"
# if(color === "purple"){
#   return "Oh, purple is such a beautiful color!"
# }

#ruby
# color = 'purple'
# # keyword "if" takes an evaluation without ()
# if color == 'purple'
#   # place executable code without {}
#   p 'Oh, purple is such a beautiful color!'
# # we finish every block of with the keyword "end"
# end

# color = 'orange'
# if color == 'purple'
#   p 'Oh, purple is such a beautiful color!'
#   # keyword "else" does not take an evaluation
# else
#   p 'You should change clothes'
# end

# color = 'pink'
# if color == 'purple'
#   p 'Oh, purple is such a beautiful color!'
# elsif color == 'cerulean blue'
#   p 'Such a calming color. Now go get your purple'
# else
#   p 'You should change clothes'
# end

# string interpolation "#{variable_name}"
# my_name = 'Elyse'

# if my_name == 'Bravo'
#   p 'Aloha, Hola, Bravo, where is your purple?'
# else
#   p "#{my_name} is my bestie because she likes purple."
# end

# keyword "gets" - method athat will stop the ruby program and allow data to be input through the terminal
# my_name = gets
# terminal input: Samir
# p my_name
# Output: "Samir\n"

# keyword "chomp" removes any non string characters
# p 'Please enter your name'
# my_name = gets.chomp
# p "#{my_name} is super duper awesome"

p 'Please enter your birth year'
# Since this gets.chomp returns the input as a string, we have to pass a method that will switch it to an integer ".to_i"
my_year = gets.chomp.to_i
p my_year.class
if my_year.even?
  p 'Your year is even'
  if my_year > 1990
    p 'Please make sure one of your friends was born before 1975'
  else 
    p 'Please make sure one of your friends was born after 2000'
  end
else
  p 'Your year is odd'
  if my_year > 1990
    p 'Please make sure one of your friends was born before 1975'
  else 
    p 'Please make sure one of your friends was born after 2000'
  end
end