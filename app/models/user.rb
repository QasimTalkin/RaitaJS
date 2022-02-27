class User < ApplicationRecord
  has_and_belongs_to_many :departments
  has_many :page_links
  has_many :pages, through: :page_links
  validate :edits_are_allowed_today
  #{}validates_format_of :emial, :format => {:with=> /\b[A-Z0-9._%a-z-]+@(?:[A-Z0-9a-z-]+.)+[A-Za-z]{2,4}\z/}
  
  attr_accessor :first_name
  
  def full_name
    [first_name, last_name].join(' ')
  end 
  def abbreviated_name
    [first_name.chars.first+'.', last_name].join(' ')
  end 
  
  before_validation :check_update_values

  private
  
  def edits_are_allowed_today
      logger.info('yo i added this error')
  end
  
  def check_update_values
  logger.info("Loggin before save")
    if first_name.nil?
      logger.info("NIL")
      self.first_name='Qasimmm Blank'
    else
      logger.info("NOT NIL")
      self.first_name='Qasimmm Not Blank'
    end
  end
end
