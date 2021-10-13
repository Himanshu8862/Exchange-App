import React from "react";
import DisplaySeller from "./DisplaySellers";

export default function Cart(props) {

    props = [{
        seller: "seller1",
        total: "1200",
        products: [
            {
                name: "Product1",
                discription: "dis1 ",
                price: "300",
                quantity: "4"
            },
            {
                name: "Product2",
                discription: "dis1 ",
                price: "240",
                quantity: "1"
            }
            ,
            {
                name: "Product-3",
                discription: "dis1 ",
                price: "260",
                quantity: "1"
            }
        ],
        status: "accepted",
        Offer: "available"
    },
    {
        seller: "seller2",
        total: "1200",
        products: [
            {
                name: "Product-1",
                discription: "dis1 ",
                price: "200",
                quantity: "4"
            },
            {
                name: "Product-2",
                discription: "dis1 ",
                price: "250",
                quantity: "5"
            }
            
        ],
        status: "pending",
        Offer: "available"
    },
    {
        seller: "seller3",
        total: "1200",
        products: [
            {
                name: "Product-1",
                discription: "dis1 ",
                price: "200",
                quantity: "1"
            }
        ],
        status: "pending",
        Offer: "available"
    }];


    return (
        <div className="col my-5 container">
            <h1 className="text-center fs-5"> <img src="/assets/images/cart.png" alt="Cart-logo"/></h1>
            <p className="fs-2">Cart</p>
            <div className="Cart bg-primary rounded">
                <div className="row m-2">
                    {props.map(function (d) {
                        return (
                            <div className="row p-3 rounded">

                                <DisplaySeller seller={d.seller} total={d.total} products={d.products} status={d.status} Offer={d.Offer} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );

}