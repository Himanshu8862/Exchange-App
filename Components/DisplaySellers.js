import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from "react-router-dom"
import ProductItem from "./ProductItem";


function DisplaySeller(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="bg-light rounded">
            <div className="fs-3">{props.seller}</div>
            <div className="d-flex justify-content-between py-2">
                <div className="">SubTotal</div>
                <div className="">{props.total}</div>
            </div>
            <div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }} >
                    Products
                </Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
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
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="d-flex py-2 justify-content-between">
                <div>
                    <button type="button" className={props.status==="pending" ?" btn btn-warning":" btn btn-success"}>
                        {props.status}
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={props.status === "pending"}
                        disables >
                        Make Offer
                    </button>
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
                    <Link to={props.status === "accepted" ? "/checkout" : "#"}>
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

export default DisplaySeller;