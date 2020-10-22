import React, { useContext } from 'react';

import RestaurantCard from './RestaurantCard';

import { AppContext } from '../provider/AppProvider';


function RestaurantCardList() {
    
    const { restaurants } = useContext(AppContext);

    return (
      <div>
        {restaurants.map((item, i) => {
            return <RestaurantCard name={item.name} id={item.id} key={i}/>
        })}
      </div>   
    );
  }
  
export default RestaurantCardList;