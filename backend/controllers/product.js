import User from "../model/users.js";
import Order from "../model/order.js";
import Product from "../model/products.js"
import async from "async";
import { ObjectId } from "bson";

export let addToCart = async (req,res) => {

    try {
        let pid = req.body.id;
        let user_id = req.user;
        console.log(user_id);
        User.findById(user_id, (err,user) => {
            if(err){
                console.log(err);
                res.status(404).json({auth:true, msg:"user doesn't exist"});
            }else{
                let seller_name = '';
                Product.findById(pid,(err,item) => {
                    if(err){
                        console.log(err);
                    }else{
                        seller_name = item.owner;
                        Order.findOne({seller: seller_name, buyer: user.username}, (err, order) => {
                            if(err){
                                console.log(err);
                            }else{
                                if(order){
                                    order.items.push(pid);
                                    order.save();
                                    console.log(order);
                                    return res.status(201).json({auth:true, result: order});
                                }else{
                                    let items = [];
                                    items.push(pid);
                                    let new_order = new Order({
                                        buyer : user.username,
                                        seller : seller_name,
                                        items : items,
                                    });
                                    new_order.save();
                                    return res.status(201).json({auth:true, result: new_order});
                                }
                            }                    
                        });
                    }
                });
                
            }
        });
        
    } catch (error) {
        console.log(error);        
    }

}

//to be tested!!!!

export let viewCart = async (req,res) => {
    try {
        let user_id = req.user;
        User.findById(user_id, (err,user) => {
            if(err){
                console.log(err);
                res.status(404).json({auth:true, msg:"user doesn't exist"});
            }else{
                if(user){
                    Order.find({buyer : user.username}, (err,results) => {
                        if(err){
                            res.status(404).json({auth:true, msg:"no orders"});
                        }else{
                            console.log(results);
                            return res.status(201).json({auth:true, result: results});
                        }                                                
                    })
                }else{
                    console.log("No user exists");
                }
            }
        });
        

    } catch (error) {
        console.log(error);        
    }
}

export let getProductDetails = async (req,res) => {
    try {
            Product.find({}, (err,results) => {
                if(err){
                    console.log(err);
                }else{
                   // console.log(results);
                    return res.status(201).json({auth:true, result: results});
                }
            })
        

    } catch (error) {
        console.log(error);        
    }
}

export let getProductData = async (req,res) => {
    try {
        let pid = req.query.id;
        Product.findById(pid, (err,item) => {
            if(err){
                console.log(err);
            }else{
                return res.status(201).json({auth:true, result: item});
            }
        })
    } catch (error) {
        console.log(error);
        
    }
}

export let getRequestDetails = async (req,res) => {
    try {
        
        let id = req.user;
        User.findById(id, (err,user) => {
            if(err){
                console.log(err);
            }else if(user){
                Order.find({seller: user.username, decision: 'pending'}, (err,results) => {
                    if(err){
                        console.log(err);
                    }else{
                        return res.status(201).json({auth:true, result: results});
                    }
                })
            }else{
                console.log("No user");
            }
        })

    } catch (error) {
        console.log(error);
        
    }
}

export let getRequestProduct = async (req,res) =>{
    try {
        
        let id = req.query.oid;
        //console.log(id);
        Order.findById(id, (err,order) => {
            if(err){
                console.log(err);
            }else if(order){
                let items = order.items;
                Product.find().where('_id').in(items).exec((err, records) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(records);
                        return res.status(201).json({auth:true, result: records});
                    }
                });
                
                
            }else{
                console.log(id);
            }
        })

    } catch (error) {
        console.log(error);
        
    }
}

export let makeRequest = async (req,res) => {
    try {
        let id = req.body.id;
        Order.findById(id, (err,order) => {
            if(err){
                console.log(err);
            }else if(order){
                order.decision = "pending";
                order.save();
                return res.status(201).json({auth:true, result: order});
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}

export let chooseDecision = async(req,res) => {
    try {
        
        let oid = req.body.id;
        let decision = req.body.decision;
        Order.findById(oid, (err,order) => {
            if(err){
                console.log(err);
            }else{
                order.decision = decision;
                order.save();
                return res.status(201).json({auth:true, result: order});
            }
        })

    } catch (error) {
        console.log(error);        
    }
}

export let getOwnItems = async (req,res) => {
    try {

        let id = req.user;
        User.findById(id, (err,user)=>{
            if(err){
                console.log(err);
            }else{
                Product.find({owner : user.username}, (err,results) => {
                    if(err){
                        console.log(err);
                    }else{
                        return res.status(201).json({auth:true, result: results});
                    }
                })
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export let checkCart = async (req,res) => {
    try {
        
        let pid = req.query.id;
        let seller = req.query.seller;
        User.findById(req.user, (err,user)=>{
            if(err){
                console.log(err);
            }else{
                let buyer = user.username;
                Order.findOne({seller : seller, buyer : buyer}, (err,order) => {
                    if(err){
                        console.log(err);
                    }else{
                        if(order){
                            let flag=false;
                            order.items.forEach(element => {
                                if(element === pid){
                                    flag=true;
                                }                                
                            });
                            if(!flag)
                            return res.status(201).json({auth:true, result: false, current_user : user.username});
                            else 
                            return res.status(201).json({auth:true, result: true, current_user : user.username});

                            
                        }else{
                            return res.status(201).json({auth:true, result: false, current_user : user.username});
                        }
                    }
                })
            }
        })

    } catch (error) {
        console.log(error);
        
    }
}

export let cancelOrder = async (req,res) => {
    try {

        let oid = req.body.id;
        Order.findByIdAndDelete(oid, (err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log('Item Deleted from database');
                return res.status(201).json({auth:true, result : data, msg : 'Item Deleted from database'});
            }
        }) 
        
    } catch (error) {
        console.log(error);
        
    }
}

export let orderSuccess = async (req,res) => {
    try {
        let oid = req.query.oid;
        let total = req.body.total;
        let disprice = req.body.disprice;
        let order = req.body.order;
        let paymentType = req.body.method;
        let transaction = {
            seller : order.seller,
            orderID : order._id,
            total : total,
            discountTotal : disprice,
            paymentType : paymentType,
        }
        User.findById(req.user, (err,user)=>{
            if(err){
                console.log(err);
            }else{
                user.previousOrder.push(transaction);
                user.save();
                async.eachSeries(order.items, function updateObject (obj, done) {
                Product.update({ "_id": ObjectId(obj._id)}, { $set : { onSale : false }}, done);
                }, function allDone (err) {
                    if(err){
                        console.log(err);
                    }
                    // this will be called when all the updates are done or an error occurred during the iteration
                });

            }
        })
        // Order.findById(oid,(err,order)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         async.eachSeries(order.items, function updateObject (obj, done) {
        //             Product.update({ "_id": ObjectId(obj._id)}, { $set : { onSale : false }}, done);
        //         }, function allDone (err) {
        //             if(err){
        //                 console.log(err);
        //             }
        //             // this will be called when all the updates are done or an error occurred during the iteration
        //         });

        //     }
        // })        
    } catch (error) {
        console.log(error);
        
    }
}