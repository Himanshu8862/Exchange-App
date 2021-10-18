import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios';
// import { useState } from 'react
// import './SellItem.css';

export default function SellItem() {
    var history = useHistory();
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState();

    const upload = (e) => {
        console.log({category: category, title: title, desc: desc, images: images, price: price});
        Axios.post("http://localhost:5000/sell", {
            category: category,
            title: title,
            desc: desc,
            imageUrl: images,
            price: price,
        })
        .then((res) => {
            console.log(res);
            alert("Item Uploaded Successfully!");
            history.push("/");
        })
        e.preventDefault();
    }

    return (
        <div className="text-center container w-25 rounded bg-dark">
            <div className="form-signin my-5 p-3">
                <form onSubmit={upload}>
                    <h1 className="h3 mb-4 pt-3 fw-normal text-white">Sell Item</h1>
                    <div className="dropdown">
                        <button className="btn w-100 btn-secondary dropdown-toggle" type="button" id="categorybutton" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Category
                        </button>
                        <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                            <li><div className="dropdown-item" onClick={() => {setCategory("Electronics")}} >Electronics</div></li>
                            <li><div className="dropdown-item" onClick={() => {setCategory("Books")}} >Books</div></li>
                            <li><div className="dropdown-item" onClick={() => {setCategory("Automobiles")}}>Automobiles</div></li>
                        </ul>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="itemTitle" className="form-control" onChange={(e) => {setTitle(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="Description" className="form-control" onChange={(e) => {setDesc(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input className="form-control" type="file" onChange={(e) => {setImages(e.target.files)}} id="formFileMultiple" multiple />
                        <label htmlFor="formFileMultiple" className="form-label">Upload pictures</label>
                    </div>
                    <div className="form-floating mb-3 mt-4">
                        <input type="price" className="form-control" onChange={(e) => {setPrice(e.target.value)}} placeholder="Price" />
                        <label htmlFor="floatingPrice">Price</label>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <button className="mt-2 btn-success mb-4 btn btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="col-6">
                        <Link to="/">
                        <button className="ms-3 mt-2 btn-danger mb-4 btn btn-primary" type="cancel">Cancel</button>
                        </Link>
                        </div>
                    </div>
                </form >
            </div>
        </div>
    )
}
