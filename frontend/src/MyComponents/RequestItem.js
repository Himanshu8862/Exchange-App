import React from 'react'
import { Link } from "react-router-dom";

export default function RequestItem() {
    return (
        <div className="bg-white rounded mb-4">
            <div className="card">
                <div className="card-header">
                    Buyer_name
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Prod1</td>
                                <td>Desc1</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Prod2</td>
                                <td>Desc2</td>
                                <td>1200</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Prod3</td>
                                <td>Desc3</td>
                                <td>500</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex py-2 justify-content-between">
                        <div>
                            <Link to="#"><button className="btn btn-sm btn-success">Accept</button></Link>
                        </div>
                        <div>
                            <Link to="#"><button className="btn btn-sm btn-danger">Reject</button></Link>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    )
}
