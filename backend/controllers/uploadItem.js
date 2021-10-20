import Product from "../model/products.js";

const uploadItem = async (req, res) => {
    console.log(req.body);
    try {
        const item = new Product({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            owner: req.body.owner,
            category: req.body.category,
            date: Date.now(),
        })
        for(let i=0; i<req.body.imageNames.length; i++) {
            item.images.push("public/images/" + req.body.imageNames[i]);
        }
        item.save();
        console.log(item);
        return res.status(200).json({msg: item});
    }
    catch (error) {
        console.log(error);
        res.status(404).send("Error");
    }
}

export default uploadItem;