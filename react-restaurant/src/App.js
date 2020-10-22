import React, { useContext } from 'react';

import RestaurantCardList from "./components/RestaurantCardList";
import DetailPage from "./components/DetailPage";

import { AppContext } from './provider/AppProvider';
import './App.css';

function App() {
  // const [route, setRoute] = useState("detail");
  const { route } = useContext(AppContext);

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
            <DetailPage/>
          </>
          
        )
      }
    </div>   
  );
}

export default App;
