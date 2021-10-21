import React from "react";
import {Dropdown} from 'react-bootstrap'
import ProductItem from "./ProductItem";

function Products(props) {
    
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Products
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item >
                    <ProductItem name="product1" desc="something" price="200" quantity="2"/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Products;
