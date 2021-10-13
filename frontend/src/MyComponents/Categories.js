import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    // var myStyles = {
    //     width: "20%",
    // }
    return (
        <div className="container">
            {/* <h1>THis is Categories</h1> */}
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <svg className="bi me-2" width="40" height="32"><use xlink:to="#bootstrap"></use></svg> */}
                <span className="fs-4">Categories</span>
                </Link>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="#" className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#home"></use></svg> */}
                    Electronics
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#speedometer2"></use></svg> */}
                    Books
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#table"></use></svg> */}
                    Fashion
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#grid"></use></svg> */}
                    Furniture
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#people-circle"></use></svg> */}
                    Automobiles
                    </Link>
                </li>
                </ul>
                <hr/>
            </div>
        </div>
    )
}
