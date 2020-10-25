import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
    route: "",
    setRoute: () => { },
    restaurants: [],
    setRestaurants: () => { },
    reviews: [],
    setReviews: () => { },
    restaurantId: 0,
    setRestaurantId: () => { },
    comment: {},
    setComment: () => { },
    commentObj: {},
    setCommentObj: () => { },
    handleSignin: () => { },
    handleSignout: () => { },
    handleRegister: () => { },
});

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState("signin");
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantId, setRestaurantId] = useState(0);
    const [commentObj, setCommentObj] = useState({});
    // const [reviews, setReviews] = useState([]);

    const fetchRestaurants = async () => {
        const resp = await fetch('http://127.0.0.1:8000/viewset/restaurant/');
        const data = await resp.json();
        // console.log(data);

        for (let item of data) {
            const reviews = item.reviews;
            reviews.sort((a, b) => {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                return dateB - dateA;
            });
            item.avgRating = reviews.reduce((acc, obj) => acc + (obj.rating || 0), 0) / (reviews.length || 1);
        }
        data.sort(function (a, b) {
            return b.avgRating - a.avgRating;
        })
        setRestaurants(data);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleSignin = async (event) => {
        event.preventDefault();
        setRoute("list");
    };

    const handleSignout = async (event) => {
        event.preventDefault();
        setRoute("signin");
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setRoute("signin");
    };

    const handleCommentChange = (event, commentObj, restaurantId) => {
        if (!commentObj.hasOwnProperty('restaurant')) setCommentObj({ restaurant: restaurantId })

        const name = event.target.name;
        let value = event.target.value;
        const optionObj = {
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
            option5: 5,
        };

        if (value in optionObj) {
            value = optionObj[value]
            setCommentObj((prevState) => (
                { ...prevState, [name]: value }
            ));
        } else {
            setCommentObj((prevState) => (
                { ...prevState, [name]: value }
            ));
        }
    }

    useEffect(() => console.log(commentObj), [commentObj])

    const handleCommentSubmit = async (event, commentObj) => {
        event.preventDefault();
        event.target.reset();

        const resp = await fetch('http://127.0.0.1:8000/viewset/review/', {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentObj),
        })

        const data = await resp.json();

        if (data) {
            setCommentObj({});
            fetchRestaurants();
            alert("Comment submitted!");
        }
    };

    return (
        <AppContext.Provider
            value={{
                route,
                setRoute,
                restaurants,
                restaurantId,
                setRestaurantId,
                commentObj,
                handleCommentChange,
                handleCommentSubmit,
                handleSignin,
                handleSignout,
                handleRegister,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;