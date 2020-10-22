import React from 'react';

function RestaurantCard({ name }) {    
    return (
      <div className="restaurantCard">
        <h4>{name}</h4>
        <h5>Average rating: </h5>
        <button className="btn btn-info">View Details</button>
      </div>   
    );
  }
  
export default RestaurantCard;