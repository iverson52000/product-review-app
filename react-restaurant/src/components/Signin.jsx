import React, { useContext } from 'react';
import { AppContext } from '../provider/AppProvider';

function Signin() {
    const { handleSignin, setRoute } = useContext(AppContext);
  
    return (
        <>
            <h1 className="mt-5" style={{"textAlign": "center"}}>Restaurant Review Webapp!</h1>    
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin" onSubmit={(event) => handleSignin(event)}>
                            <div className="form-label-group">
                            <label htmlFor="inputEmail">Username</label>
                            <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                            </div>
                            <div className="form-label-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                {/* <label className="custom-control-label" htmlFor="customCheck1">Remember password</label> */}
                            </div>
                            <button className="btn btn-lg btn-info btn-block text-uppercase" type="submit">Sign in</button>
                        </form>
                        <div className="text-center">
                                <button className="btn btn-link mt-3" onClick={() => {setRoute("register")}}>Register</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>      
    );
  }
  
  export default Signin;