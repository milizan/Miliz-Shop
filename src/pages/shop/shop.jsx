import { AppWindow } from "phosphor-react";
import React from "react";
import App from "../../App";
import './shop.css'
import { PRODUCTS } from "../../products";
import { Product }  from "./product";

export default function Shop() {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>MILIZ </h1>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product, index) => (
                    <Product data={product} key={product.id}/>
                ))}    
            </div>
        </div>
    )
}
