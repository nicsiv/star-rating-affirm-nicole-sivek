import React, { useState } from 'react'
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import HalfStar from './assets/half-star.svg';

const RatingSystem = (props) => {
    const [rating, setRating] = useState(3)
    const [hover, setHover] = useState(null)
    const [savedRatingsArry, setSavedRatingsArry] = useState([])
    const [averageRating, setAverageRating] = useState(null)
    const [addNewRatingToAverage, setNewRatingToAverage] = useState(null)



   const handleClick = (clickedStar, e) => {
       console.log(clickedStar, e)
        rating ? setRating(null) : setRating(clickedStar)

        let newSavedRatingsArry = [...savedRatingsArry]

        newSavedRatingsArry.push(clickedStar)

        setSavedRatingsArry(newSavedRatingsArry)

        // console.log(savedRatingsArry)

        let totalStarRating = 0
        

        newSavedRatingsArry.forEach((ratingObj) => {

          totalStarRating += ratingObj 

        })

        const averageRating = totalStarRating/ newSavedRatingsArry.length
        console.log(averageRating)

        setAverageRating(averageRating.toFixed(1))
        
        const totalNumClicks = savedRatingsArry.reduce((a, b) => a + b, 0)
        
        // console.log(totalNumClicks)


        const addNewRatingToAverage = ((averageRating * totalNumClicks) + rating) / totalNumClicks
        console.log(addNewRatingToAverage)

        setNewRatingToAverage(addNewRatingToAverage.toFixed(1))
        
        
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
          
          <div>

          <h1>Average Rating</h1>
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

          </div>

        <h3> The Number Of Stars You've Clicked Is {rating}</h3>
        <h3> The Number Of Stars You've Hovered Over Is {hover}</h3>
        <h3> This Is Your Average Rating {averageRating}</h3>
        <h3> This Is Your New Average Rating {addNewRatingToAverage}</h3>
        
      </div>
    );
  }

  export default RatingSystem