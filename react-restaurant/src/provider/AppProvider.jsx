import React, {createContext, useState, useEffect} from 'react';

export const AppContext = createContext({
    route: "",
    setRoute: () => {},
    restaurants: [],
    setRestaurants: () => {},
    reviews: [],
    setReviews: () => {},
    restaurantId: 1,
    setRestaurantId: () => {},
});

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState("list");
    const [restaurants, setRestaurants] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [restaurantId, setRestaurantId] = useState(1);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const resp = await fetch('http://127.0.0.1:8000/viewset/restaurant/');
            const respJson = await resp.json();
            // console.log(respJson);
            setRestaurants(respJson);
        };

        const fetchReviews = async () => {
            const resp = await fetch('http://127.0.0.1:8000/viewset/review/');
            const respJson = await resp.json();
            // console.log(respJson);
            setReviews(respJson);
        };
        
        fetchRestaurants();
        fetchReviews();

    }, []);

    return (
        <AppContext.Provider 
            value={{
                route,
                setRoute,
                restaurants,
                reviews,
                restaurantId,
                setRestaurantId,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;