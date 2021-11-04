import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import ProductPageLeft from './ProductPageLeft'
import ProductPageRight from './ProductPageRight'

export default function ProductBody() {
    const location = useLocation();
    let [item, setItems] = useState(()=>{
        console.log(location.state);
        return location.state;
    })
    let [image, setImage] = useState(()=>{
        let imageUrl = `data:image/jpeg;base64,${item.images[0].data}`;
        return imageUrl;
    });

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <ProductPageLeft item={item} image = {image} />
                    </div>
                    <div className="col-4">
                        <ProductPageRight  item={item} setImage = {setImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
