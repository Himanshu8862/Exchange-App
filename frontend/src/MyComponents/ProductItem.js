import React from "react"

function ProductItem(props) {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <img className="card-img-top" alt="Product " src="/assets/images/apple.jpeg" style={{ width: "10rem", height: "10rem"}} />
            </div>
            <div>
                <div >{props.name}</div>
                <div >{props.discription}</div>
            </div>
            <div >
                <p>{props.price}</p>
            </div>
            <div >{props.quantity}</div>
            <div >{props.price * props.quantity}</div>
        </div>
    )
}

export default ProductItem