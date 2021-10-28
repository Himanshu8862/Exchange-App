import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList(props) {



    // enable when ratings are added for users
                    // .filter((val) => {
                    //     if(props.filterRatings === 0)
                    //         return val;
                    //     else {
                    //         console.log(sellerRating);
                    //         Axios.get('http://localhost:5000/getUser', {username: val.owner})
                    //         .then((res) => {
                    //             setsellerRating(res.data.result.rating);
                    //         })
                    //         console.log(sellerRating);
                    //         if(sellerRating >= props.filterRatings)
                    //             return val;
                    //     }
                    // })
                    // Enable when location is added for users
                    // .filter((val) => {
                    //     if(props.filterLocation.size === 0)
                    //         return val;
                    //     else {
                    //         // Axios.get('http://localhost:5000/getUser', {username: val.owner})
                    //         // .then((res) => {
                    //         //     setsellerLocation(res.data.result.location);
                    //         // })
                    //         console.log(sellerLocation);
                    //         // if(props.filterLocation.has(sellerLocation))
                    //             return val;
                    //     }
                    // })
    console.log(props.searchText);
    console.log(props.filterPrice);
    console.log(props.filterRatings);
    console.log(props.filterLocation);

    useEffect(() => {
        getProductsfromDB();
    }, [],
    );
    let [items, setItems] = useState([]);
    let [sellerRating, setsellerRating] = useState(0);
    let [sellerLocation, setsellerLocation] = useState("");


    function getProductsfromDB() {
        //window.location.reload();
        Axios.get('http://localhost:5000/products/getProducts', {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
            .then((res) => {
                let returned_items = res.data.result;
                setItems(returned_items);
                console.log(returned_items);
            })

    }

    
    console.log(props.category);

    return (
        <div>
            <div className="album bg-light">
                <div className="container text-decoration-none ">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {items
                    .filter((val) => {
                        if(props.searchText==="")
                            return val;
                        else if(val.title.toLowerCase().includes(props.searchText.toLowerCase()))
                            return val;
                    })
                    .filter((item) =>{
                        if(props.category==="")
                            return item;
                        else if(item.category === props.category)
                            return item;
                    })
                    .filter((val) => {
                        if(props.filterPrice === 0)
                            return val;
                        else if(val.price <= props.filterPrice)
                            return val;
                    })
                    .filter((val) => {
                        if(props.filterRatings === 0)
                            return val;
                        else {
                            console.log(val.owner);
                            Axios.post('http://localhost:5000/getUser', {username: val.owner})
                            .then((res) => {
                                setsellerRating(res.data.result.rating);
                            })
                            console.log(sellerRating);
                            if(sellerRating >= props.filterRatings)
                                return val;
                        }
                    })
                    .filter((val) => {
                        if(props.filterLocation.size === 0)
                            return val;
                        else {
                            Axios.post('http://localhost:5000/getUser', {username: val.owner})
                            .then((res) => {
                                setsellerLocation(res.data.result.location);
                            })
                            console.log(sellerLocation);
                            if(props.filterLocation.has(sellerLocation))
                                return val;
                        }
                    })
                    .map((item) => {
                        let imageUrl = "/assets/images/"+item.images[0];
                        return (
                            //{{path : `/product?id=${item._id}`, state: item}}
                            <Link to={{pathname : `/product`, state: item}} className="text-decoration-none text-dark">
                            <div className="col">
                                <div className="card shadow-sm" >
                                    <img src={imageUrl} alt="..." className="card-image" />
                                    <div className="card-body">
                                    <p className="card-text card-title overflow-hidden fs-5">{item.title}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>₹ {item.price}</h3>
                                        <div><h5>Owner : {item.owner}</h5></div>
                                        
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
