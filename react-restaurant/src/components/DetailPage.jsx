import React, { useContext } from 'react';

import ReviewCard from './ReviewCard'
import { AppContext } from '../provider/AppProvider';

function DetailPage() {
    
    const { setRoute, reviews, restaurants, restaurantId } = useContext(AppContext);
    // console.log(restaurants);
    const curReviews = reviews.filter((obj) => {
        return obj.restaurant === restaurantId;
    })

    curReviews.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB-dateA;
    })
    
    console.log(curReviews);
    
    let avgRating = 0;
    let ratingObj = {
        max: [0, -1],  //[rating, index]
        min: [6, -1],
    };


    for (let i = 0; i < curReviews.length; i++) {
        let curRating = curReviews[i].rating; 
        avgRating += curRating;

        if (curRating > ratingObj.max[0]) {
            ratingObj.max[0] = curRating;
            ratingObj.max[1] = i;
        }

        if (curRating < ratingObj.min[0]) {
            ratingObj.min[0] = curRating;
            ratingObj.min[1] = i;
        }
    }

    avgRating = avgRating / curReviews.length;
    avgRating = avgRating.toFixed(1);
    // console.log(ratingObj);

    if (restaurants.length === 0 || curReviews.length === 0) {
        return (
            <>
                <button className="btn btn-link mt-5" onClick={() => {setRoute("list")}}>Back to list</button>
                <h1>No reivews</h1> 
            </>
        )
    } else {
        return (
            <>
                <button className="btn btn-link mt-5" onClick={() => {setRoute("list")}}>Back to list</button>
                <h1>{restaurants[restaurantId-1].name}</h1>
                <h4 className="mb-3">overall average rating: {avgRating}</h4>
                <h4>Highest rated review</h4>
                <ReviewCard curReview={curReviews[ratingObj.max[1]]}/>
                <h4>Lowest rated review</h4>
                <ReviewCard curReview={curReviews[ratingObj.min[1]]}/>
                <h4>Latest review</h4>
                <ReviewCard curReview={curReviews[0]}/>
            </>
        );
    }

  }
  
export default DetailPage;