import React, { useEffect } from 'react'
import ProductList from './ProductList'
import Categories from './Categories'
import Filters from './Filters'
import Sliders from './Sliders'

export default function MainPage(props) {
	// useEffect( ()=>{
	// 		window.location.reload();
	// 	}, [],
	// );

    return (
        <div>
            <div className="container-fluid py-5">
					<div className="row">
						<div className="col-3 sticky-sm-top">
							<Categories />
							<Filters setfilterPrice = {props.setfilterPrice} setfilterRatings = {props.setfilterRatings}
							setfilterLocation = {props.setfilterLocation}/>
						</div>
						<div className="col-9">
							<Sliders />
							<ProductList searchText = {props.searchText} filterPrice = {props.filterPrice}
							 filterRatings = {props.filterRatings} filterLocation = {props.filterLocation} />
						</div>
					</div>
				</div>
        </div>
    )
}
