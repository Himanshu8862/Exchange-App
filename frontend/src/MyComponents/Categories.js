import React, { useState } from 'react'
import { button } from 'react-router-dom'

export default function Categories(props) {
    // var myStyles = {
    //     width: "20%",
    // }
    // const [category, setcategory] = useState("");

    return (
        <div className="container">
            {/* <h1>THis is Categories</h1> */}
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <div to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <svg className="bi me-2" width="40" height="32"><use xlink:to="#bootstrap"></use></svg> */}
                <span className="fs-4">Categories</span>
                </div>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <button className="nav-link text-white" onClick={props.setcategory("electronics")} >
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#home"></use></svg> */}
                    Electronics
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#speedometer2"></use></svg> */}
                    Books
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#table"></use></svg> */}
                    Fashion
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#grid"></use></svg> */}
                    Furniture
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:to="#people-circle"></use></svg> */}
                    Automobiles
                    </button>
                </li>
                </ul>
                <hr/>
            </div>
        </div>
    )
}
