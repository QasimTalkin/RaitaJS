class Page < ApplicationRecord
  has_many :page_links
  has_many :users, through: :page_links
  belongs_to :subject, optional: true
  scope :visible, -> { where(visible: true) }
  
  scope :sorted,  -> {order(position)}
  
  
end
