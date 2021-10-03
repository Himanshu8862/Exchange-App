import React from 'react'
// import './Login_Register.css';

export default function Register() {
    return (
        <div className="text-center container w-25 rounded bg-black">
            <div className="form-signin mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-white">Register</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-50 mt-2 mb-2 btn btn-primary" type="submit">Sign up</button>
                    <div className="row container">
                        <div className="col-10 text-white mt-2 mb-3">Already a user? </div>
                        <div className="col-2 mt-2"><a href="#" className="text-white">Login</a></div>
                        <br />
                    </div>
                </form >
            </div>
        </div>
    );
}
