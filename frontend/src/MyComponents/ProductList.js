import React, { useEffect } from 'react'
import { Link, useHistory} from 'react-router-dom'

import qs from 'query-string';

export default function ProductList() {

    

    let items = [
        {
            id:1,   
            imageUrl: "/assets/images/iphone-8-back.jpg",
            desc: "IPhone 8(White) in excellent condition",
            price: 35000,
        },
        {
            id:2,
            imageUrl: "/assets/images/phone2.jpg",
            desc: "Samsung Galaxy S8(Black), metal body, great condition",
            price: 25000,
        },
        {
            id:3,
            imageUrl: "/assets/images/iphone-8-back.jpg",
            desc: "Crack the coding interview by Gayle Laakmann McDowell 6th Edition, Perfect Condition",
            price: 350,
        },
    ];


    useEffect( ()=>{
            getProductsfromDB();
        }, [],
    );

    function getProductsfromDB(){

    }

    // function productPage(id){
    //     const params = new URLSearchParams();
    //     params.append("id",id);
    //     history.push({pathname: "/product",search: params.toString()});
    // }

    
//onClick={productPage(item.id)}

    return (
        <div>
            <div className="album bg-light">
                <div className="container text-decoration-none ">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {items.map((item) => {
                        return (
                            <Link to={`/product?id=${item.id}`} className="text-decoration-none text-dark">
                            <div className="col">
                                <div className="card shadow-sm" >
                                    <img src={item.imageUrl} alt="..." className="card-image" />
                                    <div className="card-body">
                                    <p className="card-text card-title overflow-hidden fs-5">{item.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>₹ {item.price}</h3>
                                        <Link to="/cart" className="text-decoration-none text-dark">
                                        <button type="button" className="btn btn-outline-success">Add to Cart</button>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        );
                    })}     
                    </div>
                </div>
            </div>
        </div>
    )
}
