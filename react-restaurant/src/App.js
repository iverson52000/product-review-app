import React, { useContext } from 'react';

import RestaurantCardList from "./components/RestaurantCardList";
import DetailPage from "./components/DetailPage";

import { AppContext } from './provider/AppProvider';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  // const [route, setRoute] = useState("detail");
  const { route } = useContext(AppContext);

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Restaurant App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Signout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
