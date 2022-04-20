class Book 
  attr_accessor :title, :author, :page
  def initialize author='anonymous'
    @author = author
    @title = title
    @page = 1
  end

  def read pages_read
    @page += pages_read
  end
end