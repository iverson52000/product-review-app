import React, { useContext } from 'react';
import { AppContext } from '../provider/AppProvider';

function RestaurantCard({ restaurant }) {
    const { setRoute, setRestaurantId } = useContext(AppContext);
    // console.log(restaurant)
    return (
        <div className="restaurantCard">
            <h4>{restaurant.name}</h4>
            <h5>Average rating: {restaurant.avgRating.toFixed(1)}</h5>
            <button className="btn btn-info"
                onClick={() => {
                    setRoute("detail");
                    setRestaurantId(restaurant.id);
                }}
            >
                View Reviews
        </button>
        </div>
    );
}

export default RestaurantCard;