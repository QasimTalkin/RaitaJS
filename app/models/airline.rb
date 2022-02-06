class Airline < ApplicationRecord

    has_many :reviews # has many reviews we will careate and average of that

    before_create :slugify

    def slugify
        self.slug = name.parameterize # "Aaaa Cdsasda" ->   "aaaa-adsasda"
    end 

    def avg_score 
        reviews.average(:score).round(2).to_f 
    end 
end
