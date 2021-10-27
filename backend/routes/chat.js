import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import Axios from "axios";



const app = express();

app.use(cors());

let rooms = new Map();
let room_messages = new Map();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => {
   // socket.join("123");
    socket.on("join_room", async (data,user) => {
        socket.join(data);
        rooms.set(socket.id,data);
        if(!room_messages.has(data))
        room_messages.set(data,[]);
        const sockets = await io.in(data).fetchSockets().then((clients) =>{
            console.log(clients.length);
            io.to(data).emit("check_users", clients.length);
        });
        
       // socket.to(data).emit("receive_message", "User joined");
        
        console.log(`User ${socket.id} connected at room ${data}`);
    })
    socket.on("send_message", (data, room) => {
        console.log(data);
        let temp = room_messages.get(room);
        temp.push(data);
        room_messages.set(room,temp);
        console.log(room_messages.get(room));
        socket.to(room).emit("receive_message", data);
    })
    
    socket.on("disconnect", async () => {
        console.log("User Disconnected", socket.id);
        let room_needed = rooms.get(socket.id);
        rooms.delete(socket.id);
        const sockets = await io.in(room_needed).fetchSockets().then(async (clients) =>{
            console.log(clients.length);
            io.to(room_needed).emit("check_users", clients.length);
            let chats = room_messages.get(room_needed);
            if(clients.length === 0 && typeof(chats)!=='undefined'){
                
                Axios.post("http://localhost:5000/chat/addChats", {
                    id: room_needed,
                    chats : chats,
                })
                .then((res)=>{
                    console.log(res);                
                }) 
            }
        });

        
    })
})

server.listen(3001, () =>{
    console.log("Socket Server running at port 3001");
})
