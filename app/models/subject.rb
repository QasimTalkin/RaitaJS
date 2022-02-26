class Subject < ApplicationRecord

  scope :visible, -> { where(visible: 'true') }

  scope :invisible, -> { where(visible: 'lol') }
  
  scope :search, -> (args) { where("LOWER(name) like ?", "%#{arg.downcase}%")}
end
