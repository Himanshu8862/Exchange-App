import React, {useEffect, useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Axios from 'axios';



export default function EditProfile() {
    var history = useHistory();
    let location = useLocation();
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    



    return (
        <div className="text-center container w-25 rounded bg-dark">
            <div className="form-signin my-5 p-3">
                <form >
                    <h1 className="h3 mb-4 pt-3 fw-normal text-white">Edit Profile</h1>
                    <div className="form-floating mt-4">
                        <input type="Description" className="form-control" placeholder="name@example.com" disabled/>
                        <label htmlFor="floatingInput">{location.state.username}</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="itemTitle" className="form-control" onChange={(e) => {setCity(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Provide City</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" onChange={(e) => {setPhone(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3 mt-4">
                        <input type='text' className="form-control" onChange={(e) => {setName(e.target.value)}} placeholder="Price" />
                        <label htmlFor="floatingPrice">Name</label>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <button className="mt-2 btn-success mb-4 btn btn-primary" type="submit">Save Changes</button>
                        </div>
                        <div className="col-6">
                        <Link to="/">
                        <button className="ms-3 mt-2 btn-danger mb-4 btn btn-primary" type="cancel">Cancel</button>
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
