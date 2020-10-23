import React, { useContext } from 'react';

import RestaurantCard from './RestaurantCard';
import { AppContext } from '../provider/AppProvider';


function RestaurantCardList() {
    
    const { restaurants } = useContext(AppContext); 

    return (
      <div>
        {restaurants.map((restaurant, i) => {
            return <RestaurantCard restaurant={restaurant} key={i}/>
        })}
      </div>   
    );
  }
  
export default RestaurantCardList;