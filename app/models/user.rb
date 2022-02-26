class User < ApplicationRecord
  
  def full_name
    [first_name, last_name].join(' ')
  end 
  def abbreviated_name
    [first_name.chars.first+'.', last_name].join(' ')
  end 
end
