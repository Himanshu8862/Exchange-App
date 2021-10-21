import React, { useEffect, useState } from 'react'
import RequestItem from './RequestItem'
import Axios from 'axios';

export default function RequestPage() {
    useEffect( ()=>{
            getRequests();
        }, [],
    );
    let [requests, setRequests] = useState([]);
    function getRequests(){
        Axios.get("http://localhost:5000/products/getRequests", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res);
            setRequests(res.data.result);
        }) 
    }
    return (
        <div>
        <h2 className="text-center mb-2 mt-2">Your Requests</h2>
        <div className="container py-4 bg-dark rounded">
        { requests.map((item) => {
            return (
                <RequestItem item={item}/>
            );
        }) }
           
        </div>
        </div>
    )
}
