import Product from "../model/products.js";
import User from "../model/users.js";

export let uploadItem = async (req, res) => {
    console.log(req.body);
    console.log(req.files);
    try {
        let id = req.user;
        User.findById(id, (err,user) => {
            if(err){
                console.log(err);
            }else if(user){
                let rating = 0;
                if(user.count > 0){
                    rating = user.rating / user.count;
                }
                console.log(rating);
                const item = new Product({
                    title: req.body.title,
                    desc: req.body.desc,
                    price: req.body.price,
                    owner: user.username,
                    rating : rating,
                    category: req.body.category,
                    date: Date.now(),
                    images : req.files.images
                })
                
                item.save();
                console.log(item);
                return res.status(200).json({msg: item});
            }else{
                console.log("No user exist");
            }
        });
        
    }
    catch (error) {
        console.log(error);
        res.status(404).send("Error");
    }
}

