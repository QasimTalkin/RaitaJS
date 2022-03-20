import React from 'react';
import Rating from '@mui/material/Rating';
import { Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const UserReviews = ({reviews, airlines, deleteReview}) => {
  return ( <>
      <div className="col-12-lg">
        <div className="card" >
          <h1>{"Place Holder for AirLines"}</h1>
        </div>
      </div>
    <div className="row gap-2 justify-center">
    {reviews.map( (review)=> (
    
          <div key={review.id} className="col-6-sm">
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
              <Button variant="outlined"  color="error" onClick = {()=>{deleteReview(review.id)}} startIcon={<DeleteIcon/>}>
                Delete
              </Button>
            </div>
            

          </div>
        )
        )} 
    </div>

  
  
  </> );
}
 
export default UserReviews;