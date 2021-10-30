import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import ProductPageLeft from './ProductPageLeft'
import ProductPageRight from './ProductPageRight'

export default function ProductBody() {
    let query = new URLSearchParams(useLocation().search);
    let base_dir = "/assets/images/";

    useEffect(()=>{
        getDataDB();
    },[]);

    let [item, setItems] = useState([]);
    let [imageNames, setImageNames] = useState([]);
    let [image, setimage] = useState("");

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
            // let url = "/assets/images/"+res.data.result.images[0];
            setImageNames(res.data.result.images);
            setimage(res.data.result.images[0]);
        }) 
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <ProductPageLeft title = {item.title} image = {image} description = {item.desc} owner = {item.owner} price = {item.price}/>
                    </div>
                    <div className="col-4">
                        <ProductPageRight images = {imageNames} setImage = {setimage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
