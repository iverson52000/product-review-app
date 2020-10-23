import React, { useContext } from 'react';

import RestaurantCard from './RestaurantCard';
import { AppContext } from '../provider/AppProvider';


function RestaurantCardList() {
    
    const { restaurants } = useContext(AppContext);

    if (restaurants.length !== 0) {
        // console.log(restaurants);
        for (let restaurant of restaurants) {
            // console.log(restaurant);
            const reviews = restaurant.reviews;
            restaurant.avgRating = reviews.reduce((acc, obj) => acc+(obj.rating||0), 0)/(reviews.length||1);
        }
        // avgRatings = restaurants.map((restaurant) => {
        //     const reviews = restaurant.reviews;
        //     return (reviews.reduce((acc, obj) => acc+(obj.rating||0), 0)/(reviews.length||1));
        // })
        // console.log(avgRatings);
    }

    restaurants.sort(function(a, b) {
        return b.avgRating-a.avgRating;
      })

    // console.log(avgRatings);
    console.log(restaurants);
    

    return (
      <div>
        {restaurants.map((restaurant, i) => {
            return <RestaurantCard restaurant={restaurant} key={i}/>
        })}
      </div>   
    );
  }
  
export default RestaurantCardList;