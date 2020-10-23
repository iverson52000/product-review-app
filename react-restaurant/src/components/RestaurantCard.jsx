import React, { useContext }from 'react';
import { AppContext } from '../provider/AppProvider';

function RestaurantCard({ name, id, avgRatings }) {
    const { setRoute, setRestaurantId } = useContext(AppContext);

    return (
      <div className="restaurantCard">
        <h4>{name}</h4>
    <h5>Average rating: {avgRatings[id-1]}</h5>
        <button className="btn btn-info" 
            onClick={() => {
                setRoute("detail");
                setRestaurantId(id);
            }}
        >
            View Details
        </button>
      </div>   
    );
  }
  
export default RestaurantCard;