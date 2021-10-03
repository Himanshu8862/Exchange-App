import React from 'react'
// import './SellItem.css';

export default function SellItem() {

    return (
        <div className="text-center container w-25 rounded bg-black">
            <div className="form-signin mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-white">Sell Item</h1>
                    <div class="dropdown">
                        <button class="btn w-100 btn-secondary dropdown-toggle" type="button" id="categorybutton" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Category
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Mobile</a></li>
                            <li><a class="dropdown-item" href="#">Books</a></li>
                            <li><a class="dropdown-item" href="#">Stationary</a></li>
                        </ul>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="itemTitle" className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="Description" className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                        <label htmlFor="formFileMultiple" className="form-label">Upload pictures</label>
                        
                        
                    </div>
                    <div className="form-floating mt-2">
                        <input type="price" className="form-control" placeholder="Price" />
                        <label htmlFor="floatingPrice">Price</label>
                    </div>
                    <button className="w-25 mt-2 btn-success mb-2 btn btn-primary" type="submit">Submit</button>
                    <button className="w-25 ms-3 mt-2 btn-danger mb-2 btn btn-primary" type="submit">Cancel</button>
                </form >
            </div>
        </div>
    )
}
