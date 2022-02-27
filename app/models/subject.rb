class Subject < ApplicationRecord
  has_many :pages, dependent: :destroy
  scope :visible2, -> { where(visible: 'true') }

  scope :invisible, -> { where(visible: 'lol') }

  scope :search, ->(arg) { where('LOWER(name) like ?', "%#{arg.downcase}%") }


  validates :name, :presence => true,
                   :length => {maximum:10, minimum:2}
end