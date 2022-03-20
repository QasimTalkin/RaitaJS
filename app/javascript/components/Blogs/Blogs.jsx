import React, { useState, useEffect } from "react"
import Rating from '@mui/material/Rating';
import UserReviews from "../../UI/UserReviews/UserReviews";
import { loremIpsum } from "lorem-ipsum";

const currentAirlineIds = [2, 3, 4, 5, 6, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30]
const get = (url) => buildRequest(url, 'GET');
const del = (url) => buildRequest(url, 'DELETE');
const post = (url, data) => buildRequest(url, 'POST', data);
const buildRequest = async (url, method, data={}) => {
  const request = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method !== 'GET') {
  //  TODO: impliment CSRF feature
    //request.headers['X-CSRF-Token'] = getCsrfToken();

    request.body = JSON.stringify(data)
  }
  const response = await fetch(url, request)
  return response
}

const Blogs = (props) => {
  let currentReviews;
  let [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("/api/v1/reviews")
        .then(response => response.json())
        .then(data => setReviews(data));
}, [reviews]);


  const [airlines, setAirlines] = useState("Some Airlines");
  
  const handleClick = () => {
    setReviews("New Blog")
  }
  const getReview = (value) => {
    fetch("/api/v1/reviews").then(resp => resp.json()).then(data => {
      currentReviews = data
      console.log(currentReviews);
      let lessthanFive = currentReviews.filter(value => value.score < 5);
      value?setReviews(lessthanFive):setReviews(data)
    });

  }
  
  
// Reviews
  const renderAllReviews = async () => {
    let response = await get("/api/v1/reviews");
    response = await response.json();
    setReviews(response);
    return response
  }
  
  const deleteReview =  async (id) => {
    let response = await del(`/api/v1/reviews/${id}.json`)
    if(response.status === 204){
      const updatedReviews = reviews.filter((review) => review.id != id)
      setReviews(updatedReviews)
    }
    return response
  }
  
  const addRendomReview = async () => {
  const payload = {
    airline_id: currentAirlineIds[Math.floor(Math.random() * currentAirlineIds.length)],
    title: loremIpsum({count:1}),
    description: loremIpsum({count:6}),
    score: Math.ceil(Math.random() * 5)
  }
  let response = await post(`/api/v1/reviews.json`, payload)
  response = await response.json();
  reviews.push(response)
  console.log(response);
  return response
  }

  const getAirlines = async () => {
    let res = await fetch("/api/v1/airlines")
    res = await res.json();
    res=res.data;
    console.log(res)
    setAirlines(res)
  }


  return (
<>
  <div className="container">
    <div className="row gap-2 justify-center">
      <h1>My React Page </h1>
    </div>
      <UserReviews reviews={reviews} airlines={airlines} deleteReview={deleteReview}/>
    <div className="row gap-2" style={{textAlign:'center'}}>
    <div className="col-4-sm justify-center">
      <button className="btn btn-outline-primary " onClick={() => getReview(true)} value="Submit">score Less thab 5</button>
      <button className="btn btn-outline-primary " onClick={() => renderAllReviews()} value="Submit">All reviews</button>
    </div>
    <div className="col-4-sm justify-center">
    <button className="btn btn-outline-primary " onClick={() => getAirlines()} value="Submit">Airlines</button>
      <button className="btn btn-outline-primary " onClick={() => getReview(false)} value="Submit">Full Reviews</button>
    </div>
    <div className="col-4-sm justify-center">
      <button className="btn btn-outline-primary " onClick={() => addRendomReview()} value="Submit">Submit</button>
    </div>
    </div>
  </div>

</>
  )
}

export default Blogs  
