import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     // If logged in and user navigates to Login page, should redirect them to dashboard
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.history.push("/dashboard");
    //     }
    // }, [])

    const handleSubmit = props => {          
        const userData = {
            email: email,
            password: password
        }
        // axios.post("http://localhost:8000/login", data)
        //     .then((res) => {
        //         console.log(data.email);
        //         alert("Email", data.email);
        //         window.location.href = "/"
        //     })
        //     .catch((e) => {

        //     })
        props.loginUser(userData);
    }

    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Sign In</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);

// export default Login;