import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";


const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => {
   // socket.join("123");
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(socket.rooms);
        socket.to(data).emit("receive_message", "User has joined");
        //socket.broadcast.to(data).emit("receive_message", "New user has joined the room!");
        console.log(`User ${socket.id} connected at room ${data}`);
    })
    socket.on("send_message", (data, room) => {
        console.log(data);
        if(room in socket.rooms){
            console.log("Room exists");
        }else{
            console.log("Room not there");
        }
        //socket.broadcast.emit("receive_message", data);
        console.log(socket.rooms);
        socket.to(room).emit("receive_message", data);
    })
    
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})

server.listen(3001, () =>{
    console.log("Socket Server running at port 3001");
})
