import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChatList(props) {
    


    function joinRoom(room){
        let socket = props.socket;
        socket.emit("join_room",room);
    }

    return (
        <div className="container-fluid my-5">
            <h2>Chats</h2>
            <div className="list-group contacts overflow-auto">
                <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
                    <div className="d-flex w-100 justify-content-between" onClick={() => {joinRoom("123")}}>
                    <h5 className="mb-2">Amal Majunu Vidya</h5>
                    <small>few seconds ago</small>
                    </div>
                    <p className="ms-2 mb-1">Reply 7</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action" onClick={() => {joinRoom("456")}}>
                    <div className="d-flex w-100 justify-content-between" >
                    <h5 className="mb-2">Name of a Seller</h5>
                    <small className="text-muted">Last message time</small>
                    </div>
                    <p className="ms-2 mb-1">Recentmost message of the chat</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action" onClick={() => {joinRoom("789")}}>
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">Praneeth G</h5>
                    <small className="text-muted">few hours ago</small>
                    </div>
                    <p className="ms-2 mb-1">Let me see if I can provide you a coupon</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">Himanshu Kumar</h5>
                    <small className="text-muted">a day ago</small>
                    </div>
                    <p className="ms-2 mb-1">Great, Let's meet tomorrow 10am then!</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">Aniket Srivastava</h5>
                    <small className="text-muted">a day ago</small>
                    </div>
                    <p className="ms-2 mb-1">I think, I have already given you a fair price...</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">Abhinav Gupta</h5>
                    <small className="text-muted">few days ago</small>
                    </div>
                    <p className="ms-2 mb-1">The bicycle is in great condition as you can tell from the pictures</p>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">Arnab Das</h5>
                    <small className="text-muted">few days ago</small>
                    </div>
                    <p className="ms-2 mb-1">Sorry, I only have a white Iphone at the moment</p>
                </Link>
            </div>
        </div>
    )
}
