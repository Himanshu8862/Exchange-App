import React from 'react'
import { Link } from 'react-router-dom'

export default function Item() {
    return (
        <div>
            <div className="album rounded bg-light">
                <div className="container p-3">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        <div className="col">
                            <Link to="/product" className="text-decoration-none text-dark">
                            <div className="card shadow-sm ">
                                <img src="/assets/images/book1.jpg" alt="item" className="card-image"/>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/product" className="text-decoration-none text-dark">
                            <div className="card shadow-sm ">
                            <img src="/assets/images/oneplus7t.jpg" alt="item" className="card-image"/>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/product" className="text-decoration-none text-dark">
                            <div className="card shadow-sm ">
                            <img src="/assets/images/shirt2.jpg" alt="item" className="card-image"/>

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
