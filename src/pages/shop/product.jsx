import React from "react";
import { fetchAllProducts } from "../../API";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export function Product (props) {
    const { id,title,price,image } = props.data;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="product">
            <img src={image} />
            <div className="description">
                <p><b>{title}</b></p>
                <p>${price}</p>
                <button className="addToCartButton" onClick={() => addToCart(id)}>Add to Cart</button>
            </div>
        </div>
    )
};