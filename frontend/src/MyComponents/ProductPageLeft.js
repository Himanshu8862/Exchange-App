import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function ProductPageLeft(props) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3 className="col-6">{props.item.title}</h3>
                    <h3 className="col-6 text-end">Seller: {props.item.owner}</h3>
                </div>
                <div className="bg-dark text-center my-3">
                    <img src={props.image} height="400px" alt="..."/>
                </div>
                <div>
                    <h2>Price: ₹ {props.item.price}</h2>
                </div>
                <hr />
                <div>
                    <h2 className="my-3">Description:</h2>
                    <div className="container">
                        <p className="fs-4">{props.item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
