import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router';
import Axios from 'axios';
import baseUrl from '../services/Baseurl';

export default function ProductPageRight(props) {

    let [cartFlag, setCartFlag] = useState(false);
    let [user, setUser] = useState("");
    let history = useHistory();

    useEffect(()=>{
       checkCart();
    })
    function checkCart(){
        let url = baseUrl + 'products/checkCart?id='+props.item._id+'&seller='+props.item.owner;
        Axios.get(url, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
            .then((res) => {
                setCartFlag(res.data.result);  
                setUser(res.data.current_user);              
            })
    }

    function addToCart() {
        
        let id = props.item._id;
        let url = baseUrl + 'products/addToCart'
        Axios.post(url, {
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
        
        let id = props.item._id;
        let url = baseUrl + 'chat/createChat'
        Axios.post(url, {
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
                    <div className="row my-3 ">
                        {
                            props.item.images.map((image) => {
                                let imageUrl = `data:image/jpeg;base64,${image.data}`;
                                return (<img src={imageUrl} alt="..." className="col-6 my-1" height="100px" onClick={(e) => {let imageUrl = `data:image/jpeg;base64,${image.data}`; props.setImage(imageUrl)}} />)
                            })
                        }
                        
                    </div>
                </div>
                <hr />
                <div className="container text-center">
                    <div>
                        <Link to="/chatbox">
                        { user !== props.item.owner ?  
                        <button className="btn btn-primary mx-5 my-3 px-5 py-2" onClick={createChat}>Chat With Seller</button> :
                        <button className="btn btn-primary mx-5 my-3 px-5 py-2" disabled>Chat With Seller</button> }
                       
                        </Link>
                    </div>
                    <div>
                    { user !== props.item.owner ? (!cartFlag ? 
                        <button className="btn btn-success mx-5 my-3 px-5 py-2" onClick={addToCart}>Add to Cart</button>
                        :  
                        <button className="btn btn-success mx-5 my-3 px-5 py-2" disabled>Added to Cart</button>) : 
                        (<button className="btn btn-success mx-5 my-3 px-5 py-2" disabled>Add to Cart</button>) }                        
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
