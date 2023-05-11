import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav>
                <NavLink exact="true" to='/'>Products</NavLink>
                <NavLink exact="true" to='/cart'>Shopping Cart</NavLink>
            </nav>
        </div>


    );
}

export default NavBar;