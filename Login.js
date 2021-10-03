import React from 'react'
// import './Login_Register.css';

export default function Login() {

    return (
        <div className="text-center container w-25 rounded bg-black">
            <div className="form-signin mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-white">Login</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-50 mt-2 mb-2 btn btn-primary" type="submit">Sign in</button>
                    <br/>
                    <a href="#" className="text-white">Forgot Password</a>
                    <br/>
                    <div className="row container">
                    <div className="col-10 text-white mt-2 mb-3">Dont have an account? </div>
                    <div className="col-2 mt-2"><a href="#" className="text-white">Register</a></div>
                    <br/>
                    </div>
                </form >
            </div>
        </div>

    );
}
