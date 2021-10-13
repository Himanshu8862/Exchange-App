import React from 'react'

export default function PrevOrders() {
    return (
        <div className="container rounded mt-5 bg-dark py-3">
            <div>
                <h2 className="container row text-white mb-3">Order Archives</h2>
                <div class="container text-white">
                    <div class="row my-2">
                        <div class="col order-first">
                            Order no. 1001
                        </div>
                        <div class="col">
                            Date - 00/00/0000
                        </div>
                        <div class="col order-last">
                            <a href="#" className="text-white"> Download receipt </a>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col order-first">
                            Order no. 2321
                        </div>
                        <div class="col">
                            Date - 00/00/0000
                        </div>
                        <div class="col order-last">
                            <a href="#" className="text-white"> Download receipt </a>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col order-first">
                            Order no. 3111
                        </div>
                        <div class="col">
                            Date - 00/00/0000
                        </div>
                        <div class="col order-last">
                            <a href="#" className="text-white"> Download receipt </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}