import { React } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32}></ShoppingCart>
                </Link>

            </div>
        </nav>
    )
}