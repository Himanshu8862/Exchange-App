import React from 'react'

export default function UserDetails() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white rounded bg-dark">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                <span className="fs-4">User_name</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div className="nav-link text-white" aria-current="page">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                        Email
                    </div>
                </li>
                <li>
                    <div className="nav-link text-white">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Address
                    </div>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                        Edit Profile
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
                        Cart
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                        View Requests
                    </a>
                </li>
            </ul>
        </div>
    )
}