import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function RequestItem(props) {

    useEffect( ()=>{
            getProductDetails();
        }, [],
    );
    let [items, setItems] = useState([]);
    function getProductDetails(){
        let url = 'http://localhost:5000/products/getRequestProduct?oid='+props.item._id;
        Axios.get(url, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res);
            setItems(res.data.result);
        }) 
    }

    return (
        <div className="bg-white rounded mb-4">
            <div className="card">
                <div className="card-header">
                    Request from {props.item.buyer}
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Item Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        { items.map((product)=>{
                            return <tr>
                               
                                <td>{product.title}</td>
                                <td>{product.desc}</td>
                                <td>{product.price}</td>
                            </tr>

                        }) }
                            
                        </tbody>
                    </table>
                    <div className="d-flex py-2 justify-content-between">
                        <div>
                            <Link to="#"><button className="btn btn-sm btn-success">Accept</button></Link>
                        </div>
                        <div>
                            <Link to="#"><button className="btn btn-sm btn-danger">Reject</button></Link>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    )
}
