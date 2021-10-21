import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiscussionCard from "./DiscussionCard";
import axios from "axios";

function Discussion() {
    // use of state hook 
    const [discussions,setDiscussions]=useState([]);

    // use of effect hook 
    useEffect(()=>{
        getDiscussions();
    },[])

    // get Discussions 
    const getDiscussions=()=>{
        axios.get("http://localhost:5000/discussion/view", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then( (res)=>{
            console.log("view data: ",res)
            setDiscussions (res.data)
            
        }).catch((err)=>{console.error(err)})
    }

    
    return (
        <div className="col p-3">
            <div className="d-flex  justify-content-between">
                <div className="fs-3">Dicussion Panel</div>
                <Link to="/newpost">
                    <button type="button" class="btn btn-success">New Post</button>
                </Link>
            </div>
            <div className="row m-5">
                {
                    discussions.map(function (data) {
                        return (
                            <div className="row m-2">
                                <DiscussionCard post={data} id={data} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Discussion;