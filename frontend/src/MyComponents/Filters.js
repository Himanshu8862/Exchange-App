import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Filters(props) {
    var minPrice = 0, maxPrice = 100000;
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [location, setLocation] = useState([]);

    // var a = ["delhi", "mumbai", "bengaluru"];
    if(a.find((cities) => {
        return cities==="chennai";
    }))
        console.log("found");
    else
        console.log("not found!");

    function setFilters(e) {
        e.preventDefault();
    }

    return (
        <div className="container my-5">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <span className="fs-4 mb-3">Filters</span>
            <form onSubmit={setFilters}>
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
                        <div className="col-6">{minPrice}</div>
                        <div className="col-6 text-end">{maxPrice}</div>
                    </label>
                    <input type="range" min={minPrice} max={maxPrice} onChange = {(e) => {setPrice(e.target.value)}} class="w-100" id="customRange1"/>
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    All
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    4.5 stars and above
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    4 stars and above
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    3 stars and above
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    2 stars and above
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-dark">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Location
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value=""
                            onChange={ location.find((cities) => { if(cities==="delhi") return }) === undefined ?
                                setLocation(location.push("delhi")) : location.splice()} id="brand1"/>
                            <label class="form-check-label" for="brand1">
                                Delhi
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand2" />
                            <label class="form-check-label" for="brand2">
                                Mumbai
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand3" />
                            <label class="form-check-label" for="brand3">
                                Kolkata
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand4" />
                            <label class="form-check-label" for="brand4">
                                Bengaluru
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="brand5" />
                            <label class="form-check-label" for="brand5">
                                Chennai
                            </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">
                        <button className="btn btn-success btn-small" type="submit" >Apply</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
