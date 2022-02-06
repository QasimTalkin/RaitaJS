# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


airline = Airline.create([
    { 
      name: "United Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
    }, 
    { 
      name: "Southwest",
      image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
    },
    { 
      name: "Delta",
      image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
    }, 
    { 
      name: "Alaska Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
    }, 
    { 
      name: "JetBlue",
      image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
    }, 
    { 
      name: "American Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
    }
  ])

  reviews = Review.create([
      {
        title: 'good tietle 3',
        description:'good description 3',
          score: 3,
          airline: airline.first
      },
      {
        title: 'good tietle 2',
        description:'good description 2',
        score:4,
        airline: airline.last,
    },      {
        title: 'good tietle 4',
        description:'good description 4',
        score:4,
        airline: airline.first
    },      {
        title: 'good tietle 1',
        description:'good description 1',
        score:2,
        airline: airline.last
    },      {
        title: 'good tietle 1',
        description:'good description 1',
        score:5,
        airline: airline.first
    },      {
        title: 'som revire',
        description: 'this is some revirwe on last airline',
        score:5,
        airline: airline.last
    },
  ])