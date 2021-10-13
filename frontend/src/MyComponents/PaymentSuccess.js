import React from "react";
import {Link} from 'react-router-dom'

function PaymentSuccess() {
    let mystyle = {
        "max-width": "50rem"
    }
    let payinfo = {
        transid: 129283891934,
        type: "Internet Banking",
        amount: 4000
    }
    return (
        <div className="min-height">
            <div class="card border-dark mx-auto my-5" style={mystyle}>
                <div class="card-header fs-2 text-success text-center">Payment Successful <i class="bi bi-check-circle"></i></div>
                <div class="col p-3 mt-5">
                    <div className="d-flex justify-content-between">
                        <p className="text">Payment Type</p>
                        <p className="text">{payinfo.type}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="text fw-bold">Amount</p>
                        <p className="text fw-bold">{payinfo.amount}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p className="text">Transaction ID</p>
                        <p className="text">{payinfo.transid}</p>
                    </div>


                </div>
                <div class="col p-3 mt-5">
                    <div className="d-flex justify-content-between">
                        <Link className="fs-6 bg-primary text-dark px-5 py-2 rounded-pill text-decoration-none" to="/cart">Generate Invoice</Link>
                        <Link className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none" to="/home">Continue Shopping</Link>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PaymentSuccess