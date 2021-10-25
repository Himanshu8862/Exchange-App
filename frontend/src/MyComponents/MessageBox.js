import Axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function MessageBox(props) {
    

    let [mess, setMess] = useState("");
    let [sender, setSender] = useState();
    let [messages, setMessages] = useState([]);
    let [messagesFromDB, setMessagesFromDB] = useState([]);
    let [addToDB, setAddtoDb] = useState(true);
    let [firstTime, setFirstTime] = useState(true)

    function sendMessage(){
        let data = {
            author: "admin",
            mess : mess,
        }
        let room = props.sender._id;
        let socket = props.socket;
        let message = {
            sender : false,
            text : mess,
        }
        let update_messages = [...messages,message];
        setMessages(update_messages);
        setMess("");
        socket.emit("send_message", data, room);
        if(addToDB){
            Axios.post("http://localhost:5000/chat/addChats", {
                id: props.sender._id,
                chats : message,
            },{headers: {
                "x-access-token": localStorage.getItem("token"),
            }})
            .then((res)=>{
                console.log(res);                
            }) 
        }
        
    }
    useEffect( () => {
        getMessage(messages);
        if(firstTime){
            setFirstTime(false);
            getMessagesFromDB(messagesFromDB);
        }
    }, [messages] );
    function getMessagesFromDB(messagesFromDB){
        let url = "http://localhost:5000/chat/getMessagesFromDB?id=" + props.sender._id;
        Axios.get(url, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res);  
            setMessagesFromDB(res.data.result);
                   
        }) 
    }

    function getMessage(messages){
        setSender(props.sender);
        let socket = props.socket;
        socket.on("check_users", (len) => {
            console.log(len);
            if(len === 2){
                setAddtoDb(false);
            }else{
                setAddtoDb(true);
            }
        })
        socket.on("receive_message", (data) => {
            console.log(data);
            let message = {
                sender : true,
                text : data.mess,
            }
            let update_messages = [...messages,message];
            setMessages(update_messages);
        })
    }

    return (
        <div className="my-5 me-3">
            <div className="container">
                { sender ? <h2>{sender.author1 !== props.user ? sender.author1 : sender.author2}</h2>:<h2>Author</h2> }
            </div>
            <div className="container bg-light py-3 message-box overflow-auto">
            {  messagesFromDB.map((message) => {
                if(message.sender){
                    return  <h4 className="">{message.text}</h4>
                }else{
                    return <h4 className="text-end my-3 ">{message.text}</h4>
                }
            })}
            {messages.map((message) => {
                if(message.sender){
                    return  <h4 className="">{message.text}</h4>
                }else{
                    return <h4 className="text-end my-3 ">{message.text}</h4>
                }
            })}
                {/* <h4 className="text-end my-3 ">Message1</h4>
                <h4 className="">Reply1</h4>
                <h4 className="text-end my-3 ">Message2</h4>
                <h4 className="">Reply2</h4> */}
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
