import React, { useState, useEffect } from "react"
import Rating from '@mui/material/Rating';


const Blogs = (props) => {
  let currentReviews;
  let [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("/api/v1/reviews")
        .then(response => response.json())
        .then(data => setReviews(data));
}, []);

  const [airlines, setAirlines] = useState("Qasim")
  const handleClick = () => {
    setReviews("New Blog")
  }
  const getReview = (value) => {
    fetch("/api/v1/reviews").then(resp => resp.json()).then(data => {
      currentReviews = data
      console.log(currentReviews);
      value?setReviews(data.slice(0, (data.length/2))):setReviews(data)
    });

  }
  
  
  



  const getAirlines = async () => {
    let res = await fetch("/api/v1/airlines")
    res = await res.json();
    setAirlines(res.data[15].attributes.name)
  }


  return (
<>
  <div className="container">
    <div className="row gap-2 justify-center">
      <h1>My React Page </h1>
    </div>
    <div className="row gap-2 justify-center">
      <div className="col-12-lg">
        <div className="card" >
          <p className="card-body">{airlines}</p>
        </div>
      </div>
    </div>
    <div className="row gap-2 justify-center">
        {reviews.map( (review, key )=> (
          <div key={key} className="col-6-sm">
            <div className="card" style={{minHeight:'100px'}}>
              <h2 className="card-title">{review.title}</h2>
              <Rating
                name="simple-controlled"
                defaultValue={review.score}
                onChange={(event, newValue) => {
                  console.log(newValue)
                }}
              />
              <p className="card-body">{review.description}</p>
            </div>
          </div>
        )
        )}
    </div>
    <div className="row gap-2" style={{textAlign:'center'}}>
    <div className="col-4-sm justify-center">
      <button className="btn btn-outline-primary " onClick={() => getReview(true)} value="Submit">Half Reviews</button>
      <button className="btn btn-outline-primary " onClick={() => getReview(false)} value="Submit">Full Reviews</button>
    </div>
    <div className="col-4-sm justify-center">
    <button className="btn btn-outline-primary " onClick={() => getAirlines()} value="Submit">Airlines</button>
      <button className="btn btn-outline-primary " onClick={() => getReview(false)} value="Submit">Full Reviews</button>
    </div>
    <div className="col-4-sm justify-center">
      <button className="btn btn-outline-primary " onClick={() => handleClick()} value="Submit">Submit</button>
    </div>
    </div>
  </div>

</>
  )
}

export default Blogs  
