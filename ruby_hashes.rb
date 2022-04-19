# Ruby hashes

# 1st method of creating a hash
learn_circus = {acrobat: 'Tameka', contortionist: 'Dustin', clown: 'Toni'}
# p learn_circus

# 2nd method of creating a hash
learn_band = Hash.new
p learn_band

# Create content
# learn_band[:vocalist] = 'Samir'
# p learn_band
learn_band[:cowbell_player] = 'Van'
learn_band[:dj] = 'Zane'
learn_band[:drummer] = 'Elyse'

# Read the content
# Display all pairs within hash
p learn_band

# Display one pair
# p learn_band[:dj]

# Update the content
# learn_band[:cowbell_player] = 'Jack'
# p learn_band

# Delete content
# learn_band.delete(:dj)
# learn_band.delete(:drummer)
# p learn_band

# Modules = grouping of items that have similar properties.
# Enumerables are a type of module that includes items that are iterable, such as hashes, arrays, and ranges

# Duck typing - a concept in Ruby that bases methods on the action rather than the datatype. 

# learn_band.map do |key, value|
#   p "Learn Band's #{key} is #{value}"
# end

# To store as an array
# 1st Technique: Storing hash data in a variable
band = learn_band.map do |key, value|
         "Learn Band's #{key} is #{value}"
       end
p band

# 2nd Technique creating a method
def my_band hash
  hash.map do |key, value|
    "What is #{value}'s role?"
  end
end
p my_band learn_band
p my_band learn_circus