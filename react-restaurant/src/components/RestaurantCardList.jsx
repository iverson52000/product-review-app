import React from 'react';
import RestaurantCard from './RestaurantCard';

const testData = [
    {
        "id": 1,
        "name": "American"
    },
    {
        "id": 2,
        "name": "Japanese"
    },
    {
        "id": 3,
        "name": "Korean"
    }
]

function RestaurantCardList() {    
    return (
      <div>
        {testData.map((item, i) => {
            return <RestaurantCard name={item.name} />
        })}
      </div>   
    );
  }
  
export default RestaurantCardList;