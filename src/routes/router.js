import { Edit } from '@material-ui/icons';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../utils/setAuthToken.util';
// import { setCurrentUser, logoutUser } from '../actions/authActions';
import { Provider } from 'react-redux';
import store from '../store';

import Dashboard from '../pages/dashboard.page';
import forgotPassword from '../pages/forgot-password.page';
import Navigation from '../pages/sections/navigation';
import Login from '../pages/user-login.page';
import Register from '../pages/user-register.page';  
// import PrivateRoute from '../routes/privateRouter';

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//     // Set auth token header auth
//     const token = localStorage.jwtToken;
//     setAuthToken(token);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(token);
//     // Set user and isAuthenticated
//     store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//     const currentTime = Date.now() / 1000; // to get in milliseconds
//     if (decoded.exp < currentTime) {
//       // Logout user
//       store.dispatch(logoutUser());
//       // Redirect to login
//       window.location.href = "./login";
//     }
// }

function Routes() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    {/* <nav>
                        <ul>                    
                            <li>
                                <Link to={"/"}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/edit">Edit</Link>
                            </li>
                            <li>
                                <Link to="/forgot">Forgot Password?</Link>
                            </li>
                        </ul>
                    </nav> */}
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/edit" component={Edit} />
                        <Route exact path="/forgot" component={forgotPassword} />                    
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default Routes
