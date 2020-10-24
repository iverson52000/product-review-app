import React, { useContext } from 'react';
import { AppContext } from './provider/AppProvider';

import RestaurantCardList from "./components/RestaurantCardList";
import DetailPage from "./components/DetailPage";

import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  const { route, handleSignin } = useContext(AppContext);

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Restaurant App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="http://127.0.0.1:8000/admin/" target="_blank">Admin</Nav.Link>
            <Nav.Link href="#link">Signout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      { route === "signin" ? (
          <div >
              <h1 className="mt-5" style={{"text-align": "center"}}>Restaurant Review Webapp!</h1>    
                <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                      <div className="card-body">
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin" onSubmit={(event) => handleSignin(event)}>
                          <div className="form-label-group">
                          <label for="inputEmail">Username</label>
                          <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                          </div>
                          <div className="form-label-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            {/* <label className="custom-control-label" for="customCheck1">Remember password</label> */}
                          </div>
                          <button className="btn btn-lg btn-info btn-block text-uppercase" type="submit">Sign in</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
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
