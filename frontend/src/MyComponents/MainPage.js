import React from 'react'
import ProductList from './ProductList'
import Categories from './Categories'
import Filters from './Filters'
import Sliders from './Sliders'

export default function MainPage() {
    return (
        <div>
            <div className="container-fluid py-5">
					<div className="row">
						<div className="col-3 sticky-sm-top">
							<Categories />
							<Filters />
						</div>
						<div className="col-9">
							<Sliders />
							<ProductList />
						</div>
					</div>
				</div>
        </div>
    )
}
