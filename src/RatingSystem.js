import React, { useState } from 'react'
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import HalfStar from './assets/half-star.svg';

const RatingSystem = (props) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)



   const handleClick = (clickedStar, e) => {
       console.log(clickedStar, e)
        rating ? setRating(null) : setRating(clickedStar)
    }

   
 
  
    return (
      <div>
        <h1>5 star rating system</h1>
        <h2>Select a rating:</h2>
        {[...Array(props.stars)].map((star, i) =>{
            let ratingNum = i + 1

            return (
                <img className="star" 
                src={ratingNum <= (hover || rating) ? FilledStar : EmptyStar } 
                alt="empty star" 
                value={ratingNum}
                onClick={(e) => handleClick(ratingNum, e)}
                onMouseEnter={() => setHover(ratingNum)}
                onMouseLeave={() => setHover(null)}

                /> 
            )        
          })}

        <h3> The Number Of Stars You've Clicked Is {rating}</h3>
        <h3> The Number Of Stars You've Hovered Over Is {hover}</h3>
      </div>
    );
  }

  export default RatingSystem