import Product from "../model/products.js";
import Chat from "../model/chat.js";
import User from "../model/users.js";

export let createChat = async (req,res) => {
    try {
        let pid = req.body.id;
        Product.findById(pid, (err,item) => {
            if(err){
                console.log(err);
            }else{
                let seller = item.owner;
                let id = req.user;
                User.findById(id, (err,user) => {
                    if(err){
                        console.log(err);
                    }else{
                        let buyer = user.username;
                        Chat.findOne({ $or: [{author1:seller, author2:buyer},{author1:buyer, author2:seller}]}, (err,chat) =>{
                            if(err){
                                console.log(err);
                            }else if(chat){
                                return res.status(201).json({auth:true, result: chat});

                            }else{
                                let new_chat = new Chat({
                                    author1: buyer,
                                    author2: seller,
                                });
                                new_chat.save();
                                return res.status(201).json({auth:true, result: new_chat});
                            }
                        })
                    }
                });
                
            }
        }) 

    } catch (error) {
        console.log(error);
        
    }
}

export let getChatList = async (req,res) => {
    try {
        
        let id = req.user;
        User.findById(id, (err,user)=>{
            if(err){
                console.log(err);
            }else{
                Chat.find({$or:[{author1:user.username},{author2: user.username}]}, (err,results) => {
                    if(err){
                        console.log(err);
                    }else{
                        return res.status(201).json({auth:true, result: results, current_user: user.username});
                    }
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

export let addChats = async (req,res) => {
    try {
        let id = req.body.id;
        let chats = req.body.chats;        
        Chat.findById(id,(err,item) => {
            if(err){
                console.log(err);
            }else{
                item.chats.push(chats);
                item.save();
                return res.status(201).json({auth:true, result: item});
            }
        })
        //Chat.findByIdAndUpdate(id, {})
    } catch (error) {
        console.log(error);        
    }
}

export let getMessagesFromDB = async (req,res) => {
    try {
        
        let id = req.query.id;
        Chat.findById(id, (err,item)=>{
            if(err){
                console.log(err);
            }else{
                return res.status(201).json({auth:true, result: item.chats});
            }
        })

    } catch (error) {
        console.log(error);        
    }
}