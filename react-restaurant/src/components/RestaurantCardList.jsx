import React, { useContext } from 'react';

import RestaurantCard from './RestaurantCard';
import { AppContext } from '../provider/AppProvider';


function RestaurantCardList() {
    
    const { restaurants } = useContext(AppContext);
    let avgRatings = [];

    if (restaurants.length !== 0) {
        console.log(restaurants);
        avgRatings = restaurants.map((restaurant) => {
            const reviews = restaurant.reviews
            return (reviews.reduce((acc, obj) => acc+(obj.rating||0), 0)/(reviews.length||1)).toFixed(1);
        })
        // console.log(avgRatings);
    }

    return (
      <div>
        {restaurants.map((item, i) => {
            return <RestaurantCard name={item.name} id={item.id} avgRatings={avgRatings} key={i}/>
        })}
      </div>   
    );
  }
  
export default RestaurantCardList;