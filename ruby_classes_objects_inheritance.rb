# Ruby Classes, Objects, and Class Inheritance 
#  hashes hold unique key: value pairs
  # this helps us organize and create data

# Object Oriented Programming (OOP)
  # allows us to describe real world objects as data
  
#   guitar = {
#             strings: 6,
#             frets: 24,
#             amp_input: true,
#             model: "ephipnoe sg",
#             color: "white",
#             trim: "black"
#           }

# p guitar

# Classes 
# how we make objects in Ruby
# $ irb
          # six primitive datatypes
            #Boolean
            #Strings
            #undefined
            #symbol
            #number
            #nil
          # two compositie datatypes in Ruby
            # array
            #Hashes / Objects
# 001 > "Hello World".class
#  => String 
# 002 > 42.class
#  => Integer 
# 006 > :hello.class
#  => Symbol 
# 011 > Class.class
#  => Class 
# Everything in ruby is a class

# Classes are declared in ruby with the keyword
  # the scope of our class is set with an end
  # classes have two kinds of methods ("verb: its what you do")\
          # setter methods
          # getter methods
  # the instance variable is globally scoped 
    #  @
# class Guitar
#   def set_model parameter_model_name
#     @model = parameter_model_name
#   end
#   def get_model
#    @model
#   end
# end

# elyses_guitar = Guitar.new
# p elyses_guitar

# elyses_guitar.set_model "Yamaha FG-110-1"
# p elyses_guitar
# p elyses_guitar.get_model


# class String
#   def print_fast
#     self.each_char do |c|
#       sleep 0.1
#       print c
#     end
#   end
# end

# p "Hello World Hello World Hello World Hello World Hello World".print_fast

# ruby has a method for declaring new instances of Classes with unique data called
  #  initialize
    # initialize takes as many parameters as we desire and can use any of them as we desire
class Guitar
  def initialize parameter_model_name, parameter_weight
    @model = parameter_model_name
    @weight = parameter_weight
  end
  # def set_model_and_weight parameter_model_name, parameter_weight
  #   @model = parameter_model_name
  #   @weight = parameter_weight
  # end
  def get_model
    @model
  end
  def get_weight
    @weight
  end
end

# set model and weight
# vanessas_guitar = Guitar.new

# vanessas_guitar.set_model_and_weight "Ibanez RG", 10
# p vanessas_guitar
# p vanessas_guitar.get_model
# p vanessas_guitar.get_weight

#<Guitar:0x00007f97458485f8 @model="Ibanez RG", @weight=10>
# "Ibanez RG"
# 10

# vanessas_guitar = Guitar.new "Ibanez RG", 10
# p vanessas_guitar
# p vanessas_guitar.get_model
# p vanessas_guitar.get_weight

#<Guitar:0x00007f97458485f8 @model="Ibanez RG", @weight=10>
# "Ibanez RG"
# 10


# Class Inheritance
class Instrument
  def initialize in_tune_param, weight_param, material_param, operable_param
    @in_tune = in_tune_param
    @weight = weight_param
    @material = material_param
    @operable = operable_param
  end
end

cello = Instrument.new true, 7, "wood", true

p cello

class Percussion < Instrument
  def initialize in_tune, weight, material, operable, sticks_param=true
    super(in_tune, weight, material, operable)
    @sticks = sticks_param
  end
  def play_percussion
    if @sticks== true
      "bratatataaaa"
    else
     p "boom boom boom"
    end
  end
end

nicoles_cajone = Percussion.new true, 2.5, "pine", true, false

nicoles_cajone.play_percussion


#  attr_accessor is a built in method that takes symbols as arguments
  # These symbols have access to instance variables in the class and the privlages to read and write the instance variables
class StringInstrument < Instrument
  attr_accessor :model, :string_type
  def initialize in_tune_param, weight_param, material_param, operable_param, parameter_model_name
    super(in_tune_param, weight_param, material_param, operable_param)
    @model = parameter_model_name
  end
  def get_model
    @model
  end
  def get_weight
    @weight
  end
  def play_strings
    if string_type
      if string_type == "Ukelele"
        p "🌈"
      elsif string_type == "Bass"
        p '🐠'
      else 
        p '🎸'
      end
    else
      p 'you need strings'
    end
  end
end

neco_stringed_instrument = StringInstrument.new true, 5, "bamboo", true, "Lani"

neco_stringed_instrument.string_type = "Ukelele"

neco_stringed_instrument.play_strings