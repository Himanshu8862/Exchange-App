import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function ProductPageLeft() {

    let query = new URLSearchParams(useLocation().search);

    useEffect(()=>{
        getDataDB();
    },[]);

    let [item, setItems] = useState([]);
    let [imageUrl,setImageUrl] = useState("");

    function getDataDB(){
        let url = 'http://localhost:5000/products/getProductData?' + "id=" +  query.get("id");
        Axios.get(url, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res.data.result);
            setItems(res.data.result);
            let url = "/assets/images/"+res.data.result.images[0];
            setImageUrl(url);
        }) 
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3 className="col-6">{item.title}</h3>
                    <h3 className="col-6 text-end">{query.get("id")}</h3>
                </div>
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide my-3" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={imageUrl} className="d-block w-100" alt="..." height="400px"/>
                            </div>
                            <div className="carousel-item">
                            <img src="/assets/images/iphone8_2.jpg" className="d-block w-100" alt="..." height="400px"/>
                            </div>
                            <div className="carousel-item">
                            <img src="/assets/images/iphone-8-back.jpg" className="d-block w-100" alt="..." height="400px"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div>
                    <h2>Price: ₹ 20000</h2>
                </div>
                <hr />
                <div>
                    <h2 className="my-3">Description:</h2>
                    <div className="container">
                        <p>Model: iPhone 8</p>

                        <p>Storage: 64 Gb</p>

                        <p>Color: Black/White/Gold/Red</p>

                        <p>Warranty: 1 month</p>

                        <p>Condition: Excellent</p>

                        <p>With bill and charger.</p>

                        <p>Also contact us for all Apple products and accessories.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
