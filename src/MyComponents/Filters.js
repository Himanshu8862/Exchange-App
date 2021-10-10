import React from 'react'
import { Link } from 'react-router-dom'

export default function Filters() {
    return (
        <div className="container my-5">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <span className="fs-4 mb-3">Filters</span>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-dark">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Price
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <label for="customRange1" class="form-label row">
                        <div className="col-6">min</div>
                        <div className="col-6 text-end">max</div>
                    </label>
                    <input type="range" class="w-100" id="customRange1"/>
                    </div>
                    </div>
                </div>
                <div class="accordion-item bg-dark">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Seller Rating
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rat1"/>
                            <label class="form-check-label" for="rat1">
                                4.5 stars and above
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rat2" />
                            <label class="form-check-label" for="rat2">
                                4 stars and above
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rat3" />
                            <label class="form-check-label" for="rat3">
                                3 stars and above
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rat4" />
                            <label class="form-check-label" for="rat4">
                                2 stars and above
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rat5" />
                            <label class="form-check-label" for="rat5">
                                others
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-dark">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Brand
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand1"/>
                            <label class="form-check-label" for="brand1">
                                brand1
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand2" />
                            <label class="form-check-label" for="brand2">
                                brand2
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand3" />
                            <label class="form-check-label" for="brand3">
                                brand3
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand4" />
                            <label class="form-check-label" for="brand4">
                                brand4
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand5" />
                            <label class="form-check-label" for="brand5">
                                brand5
                            </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">
                        <Link to="#">
                        <button className="btn btn-success btn-small">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
