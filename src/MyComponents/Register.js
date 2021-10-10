import React from 'react'
// import './Login_Register.css';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="text-center container w-25 rounded bg-dark">
            <div className="form-signin my-5 p-3">
                <form>
                    <h1 className="h3 mb-5 pt-3 fw-normal text-white">Register</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <Link to="/login">
                    <button className="w-50 mt-4 mb-2 btn btn-primary" type="submit">Sign up</button>
                    </Link>
                    <div className="row container">
                        <div className="col-10 text-white mt-2 mb-3">Already a user? </div>
                        <div className="col-2 mt-2"><Link to="/login" className="text-white">Login</Link></div>
                        <br />
                    </div>
                </form >
            </div>
        </div>
    );
}
