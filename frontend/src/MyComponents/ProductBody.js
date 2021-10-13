import React from 'react'
import ProductPageLeft from './ProductPageLeft'
import ProductPageRight from './ProductPageRight'

export default function ProductBody() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <ProductPageLeft/>
                    </div>
                    <div className="col-4">
                        <ProductPageRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}
