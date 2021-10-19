import React, { useState } from "react";
import { Link } from "react-router-dom"
import ProductItem from "./ProductItem";


export default function DisplaySeller(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function makeRequest(){
                
    }

    return (
        <div className="bg-light rounded">
            <div className="fs-3">{props.seller}</div>
            <div className="d-flex justify-content-between py-2">
                <div className="">SubTotal</div>
                <div className="">{props.total}</div>
            </div>
            <div>
                <div color="primary" onClick={toggle} style={{ marginBottom: "1rem" }} >
                    Products
                </div>
                <div isOpen={isOpen}>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                   <p className="fw-bold">Product Image</p> 
                                </div>
                                <div>
                                    <p className="fw-bold" >Name & Discription</p>

                                </div>
                                <div >
                                    <p className="fw-bold">Price</p>
                                </div>
                                <div className="fw-bold">Quantity</div>
                                <div className="fw-bold">Total</div>
                            </div>
                            {
                                props.products.map(function (d) {
                                    return (
                                        <>
                                        <hr/>
                                        <ProductItem name={d.name} discription={d.discription} price={d.price} quantity={d.quantity} />
                                        
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex py-2 justify-content-between">
                <div>
                    <button type="button" onClick={makeRequest} className={props.status==="pending" ?" btn btn-warning":" btn btn-success"}>
                        {props.status}
                    </button>
                </div>
                <div>
                <Link to={props.status === "accepted" ? "/chatbox" : "#"}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={props.status === "pending"}
                        disables >
                        Make Offer
                    </button>
                    </Link>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        disabled={props.status === "pending"}
                    >
                        Cancel
                    </button>
                </div>
                <div>
                    <Link to={props.status === "accepted" ? "/payment" : "#"}>
                        <button
                            type="button"
                            className="btn btn-success"
                            disabled={props.status === "pending"}
                        >
                            Pay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
