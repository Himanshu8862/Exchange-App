import Product from "../model/products.js";

const uploadItem = async (req, res) => {
    console.log(req.body);
    try {
        const item = new Product({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            Owner: req.body.owner,
            category: req.body.category,
            date: Date.now(),
        })
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