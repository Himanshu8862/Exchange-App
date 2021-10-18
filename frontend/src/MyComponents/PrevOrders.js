import React from 'react'
import { Link } from 'react-router-dom'

export default function PrevOrders() {
    return (
        <div className="container rounded mt-5 bg-dark py-3">
            <div>
                <h2 className="container row text-white mb-3">Order Archives</h2>
                <div className="container text-white">
                    <div className="row my-2">
                        <div className="col order-first">
                            Order no. 1001
                        </div>
                        <div className="col">
                            Date - 00/00/0000
                        </div>
                        <div className="col order-last">
                            <Link to="#" className="text-white"> Download receipt </Link>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col order-first">
                            Order no. 2321
                        </div>
                        <div className="col">
                            Date - 00/00/0000
                        </div>
                        <div className="col order-last">
                            <Link to="#" className="text-white"> Download receipt </Link>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col order-first">
                            Order no. 3111
                        </div>
                        <div className="col">
                            Date - 00/00/0000
                        </div>
                        <div className="col order-last">
                            <Link to="#" className="text-white"> Download receipt </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}