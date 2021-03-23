import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("btn clicked")
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }
        axios.post("http://localhost:8000/register",data )
        .then((res)=>{
            window.location.href = "/";
            window.alert(data.email);
        })
        .catch((e)=>{
            window.alert("Error")
        })
    }
    return (
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange={e => setFirstname(e.target.value)} defaultValue={first_name} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange={e => setLastname(e.target.value)} defaultValue={last_name} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} defaultValue={email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} defaultValue={password} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
    )
}

export default Register
