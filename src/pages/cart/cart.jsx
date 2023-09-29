import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";
import { Checkout } from "../Checkout";
import { Link } from "react-router-dom";
import "./cart.css"

export function Cart () {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    function Checkout () {
        console.log("number1")
    }

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return<CartItem data={product} />;
                    }
                } )}
            </div>
            {totalAmount > 0 ? (
            <div className="checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/")}> Continue Shopping</button>
                <Link to="/checkout">
                <button onClick={() => Checkout()}> Checkout</button>
            </Link>
                 </div>
            ) : (
                <h1>Your Cart is Empty</h1>
            )}
        </div>
    )
};
