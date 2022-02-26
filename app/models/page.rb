class Page < ApplicationRecord
  
  scope :visible, -> { where(visible: true) }
  
  scope :sorted,  -> {order(position)}
  
  
end
