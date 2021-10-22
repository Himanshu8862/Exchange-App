import React, { useEffect, useState } from 'react'


export default function MessageBox(props) {
    

    let [mess, setMess] = useState("");

    function sendMessage(){
        let data = {
            author: "admin",
            mess : mess,
        }
        let room = "123";
        let socket = props.socket;
        socket.emit("send_message", data, room);
    }
    useEffect( () => {
        getMessage();
    }, [] );

    function getMessage(){
        let socket = props.socket;
        socket.on("receive_message", (data) => {
            console.log(data);
        })
    }

    return (
        <div className="my-5 me-3">
            <div className="container">
                <h2>Amal Majunu Vidya</h2>
            </div>
            <div className="container bg-light py-3 message-box overflow-auto">
                <h4 className="text-end my-3 ">Message1</h4>
                <h4 className="">Reply1</h4>
                <h4 className="text-end my-3 ">Message2</h4>
                <h4 className="">Reply2</h4>
                <h4 className="text-end my-3 ">Message3</h4>
                <h4 className="">Reply3</h4>
                <h4 className="text-end my-3 ">Message4</h4>
                <h4 className="">Reply4</h4>
                <h4 className="text-end my-3 ">Message5</h4>
                <h4 className="">Reply5</h4>
                <h4 className="text-end my-3 ">Message6</h4>
                <h4 className="">Reply6</h4>
                <h4 className="text-end my-3 ">Message7</h4>
                <h4 className="">Reply7</h4>
            </div>
            <div className="row my-2 text-center">
                <form className="col-10">
                    {/* <input  type="text" name="message" id="msg_1" placeholder="Type message here..." className="col-12"/> */}
                    <div class="input-group">
                    {/* <span class="input-group-text">With textarea</span> */}
                    <textarea class="form-control" onChange={(e)=>{ setMess(e.target.value) }} aria-label="With textarea"></textarea>
                    </div>
                </form>
                <div className="col-2">
                <button type="submit" onClick={sendMessage} className="btn btn-lg my-1 px-4 btn-success">Send</button>
                </div>
            </div>
        </div>
    )
}
