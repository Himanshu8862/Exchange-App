import React, { useState } from 'react'
import ProductList from './ProductList'
import Categories from './Categories'
import Filters from './Filters'
import Sliders from './Sliders'

export default function MainPage(props) {
	let [minPrice, setminPrice] = useState(0);
	let [maxPrice, setmaxPrice] = useState(100000000);
    return (
        <div>
            <div className="container-fluid py-5">
					<div className="row">
						<div className="col-3 sticky-sm-top">
      
							<Categories setcategory = {props.setcategory} />
							<Filters setfilterPrice = {props.setfilterPrice} setfilterRatings = {props.setfilterRatings}
							setfilterLocation = {props.setfilterLocation} minPrice = {minPrice} maxPrice = {maxPrice} />
						</div>
						<div className="col-9">
							<Sliders />
							<ProductList category = {props.category} searchText = {props.searchText} filterPrice = {props.filterPrice}
							 filterRatings = {props.filterRatings} filterLocation = {props.filterLocation} setmaxPrice = {setmaxPrice}
							 setminPrice = {setminPrice} />
						</div>
					</div>
				</div>
        </div>
    )
}
