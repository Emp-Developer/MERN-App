import { Edit } from '@material-ui/icons';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../pages/dashboard.page';
import forgotPassword from '../pages/forgot-password.page';
import Navigation from '../pages/sections/navigation';
import Login from '../pages/user-login.page';
import Register from '../pages/user-register.page';  

function Routes() {
    return (
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
    )
}

export default Routes
