import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {

    // var myStyles = {
    //     width: "70%",
    // }

    return (
        <div>
            <div className="album bg-light">
                <div className="container text-decoration-none ">

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/iphone-8-back.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">IPhone 8(White) in excellent condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 35000</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                    <img src="/assets/images/phone2.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Samsung Galaxy S8(Black), metal body, great condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 25000</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                    <img src="/assets/images/book1.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Crack the coding interview by Gayle Laakmann McDowell 6th Edition, Perfect Condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 300</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>

                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                    <img src="/assets/images/bicycle1.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Hercules Bicycle in good condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 1500</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/dress1.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Beautiful blue dress, good as new</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 500</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/shirt1.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Plain White T-Shirt, XXL size</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 200</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>

                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/oneplus7t.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">OnePlus 7T Pro(Silver), great condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 30000</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/bicycle2.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">FireFox bicycle(Yellow) in excellent condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 15000</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-dark">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/assets/images/shirt2.jpg" alt="..." className="card-image" />
                        <div className="card-body">
                        <p className="card-text card-title overflow-hidden fs-5">Blue Casual Check Shirt, good condition</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>₹ 350</h3>
                            <Link to="/cart" className="text-decoration-none text-dark">
                            <button type="button" className="btn btn-outline-success">Add to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
