import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router';
import Axios from 'axios';

export default function ProductPageRight() {

    let [cartFlag, setCartFlag] = useState(false);
    let query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    function addToCart() {
        let id = query.get("id");
        Axios.post("http://localhost:5000/products/addToCart", {
            id: id,
            
        },{headers: {
            "x-access-token": localStorage.getItem("token"),
        }})
        .then((res)=>{
            console.log(res);
        }) 
        setCartFlag(!cartFlag);
    }

    function createChat(){
        let id = query.get("id");
        Axios.post("http://localhost:5000/chat/createChat", {
            id: id,
        },{headers: {
            "x-access-token": localStorage.getItem("token"),
        }})
        .then((res)=>{
            console.log(res);
            history.push("/chatbox");                 
        }) 
    }

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
                        <button className="btn btn-primary mx-5 my-3 px-5 py-2" onClick={createChat}>Chat With Seller</button>
                        </Link>
                    </div>
                    <div>
                    { !cartFlag ? 
                        <button className="btn btn-success mx-5 my-3 px-5 py-2" onClick={addToCart}>Add to Cart</button>
                        :  
                        <button className="btn btn-success mx-5 my-3 px-5 py-2" disabled>Added to Cart</button>
                         }
                        
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
