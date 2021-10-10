import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductPageRight() {
    return (
        <div>
            <div className="container">
                <div className="mb-5">
                    <h3>All Photos</h3>
                    <div className="row my-3 bg-dark">
                        <img src="/assets/images/iphone8_2.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/iphone8-front.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/iphone-8-back.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/iphone8_1.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/phone1.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/phone2.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/phone3.jpg" alt="..." className="col-4 my-1 grid-image" />
                        <img src="/assets/images/phone4.jpg" alt="..." className="col-4 my-1 grid-image" />
                    </div>
                </div>
                <hr />
                <div className="container text-center">
                    <div>
                        <Link to="/chatbox">
                        <button className="btn btn-primary mx-5 my-3 px-5 py-2">Chat With Seller</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                        <button className="btn btn-success mx-5 my-3 px-5 py-2">Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
