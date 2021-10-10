import React from "react";
import { Link } from "react-router-dom";
import DiscussionCard from "./DiscussionCard";

function Discussion() {
    return (
        <div className="col p-5 rounded ">
            <div className="d-flex justify-content-between my-3">
                <div className="fs-3">Dicussion</div>
                <Link to="/newpost">
                <button type="button" class="btn btn-success">New Post</button>
                </Link>
            </div>
            <div className="row m-5 rounded border border-dark p-5">
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
            </div >
        </div>
    );
}

export default Discussion;