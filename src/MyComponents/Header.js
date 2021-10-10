import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {

	var myStyles = {
		width: "400px",
	}

	return (
		<div>
			<header className="p-3 bg-dark text-white">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					{/* <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
					 <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:to="#bootstrap"></use></svg> 
					</Link> */}

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content mb-md-0">
					<li><Link to="/" className="nav-link px-5 text-white">EXCHANGE APP</Link></li>
					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" >
					<input type="search" className="form-control form-control-dark" style={myStyles} placeholder="Search..." aria-label="Search"/>
					</form>
					<li><Link to="/discuss" className="nav-link px-5 text-white">Discussion Panel</Link></li>
					<li><Link to="/cart" className="nav-link px-5 text-white">Cart</Link></li>
					<li><Link to="/sell" className="nav-link px-5 text-white">Sell</Link></li>
					<li><Link to="/faqs" className="nav-link px-5 text-white">FAQs</Link></li>
					</ul>
					<Link to="/login">
					<button type="button" className="btn btn-outline-light ms-5 me-3">Login</button>
					</Link>
					<Link to="/register">
					<button type="button" className="btn btn-outline-light me-3">Register</button>
					</Link>
				</div>
  			</header>
		</div>
	)
}