# Rspec

# Red-Green-Refactor - Closely associated with TDD (Test Driven Development)

# Rspec is a Ruby gem

# Rspec is a Domain Specific Language

# Install Rspec: $ gem install rspec -v 3.5.0


# require the rspec tools
require 'rspec'
# require the file that contains the code I am testing
require_relative 'rspec_book.rb'


describe 'Book' do 
  it 'has to be real' do 
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do 
    my_book = Book.new
    my_book.title = 'Lord of the Rings: The Two Towers'
    # Checking data type
    expect(my_book.title).to be_a String
    # Checking specific data
    expect(my_book.title).to eq 'Lord of the Rings: The Two Towers'
  end

  it 'has an author' do 
    my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String
    lord_of_the_rings = Book.new 'J.R. Tolkien'
    expect(lord_of_the_rings.author).to eq 'J.R. Tolkien'
  end

  it 'can report the current page' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'can read pages' do
    my_book = Book.new
    expect{ my_book.read 10 }.to change{ my_book.page }.from(1).to(11)
  end
end

# In my expect statement, curlies are for checking behavior and parenthesis are for checking data