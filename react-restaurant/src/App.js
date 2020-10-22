import React, { useState } from 'react';

import RestaurantCardList from "./components/RestaurantCardList";
import DetailPage from "./components/DetailPage"

import './App.css';

function App() {
  const [route, setRoute] = useState("detail");
  
  return (
    <div className="container">
      { route === "home" ? (
          <div >
              <h1 className="mt-5">Restaurant Review Webapp!</h1>
          </div>
        ) : route === "list" ? (
          <> 
            <h1 className="mt-5">Restaurant List</h1>
            <RestaurantCardList />
          </>
        ) : (
          <> 
            <h1 className="mt-5">Restaurant Detail</h1>
            <DetailPage/>
          </>
          
        )
      }
    </div>   
  );
}

export default App;
