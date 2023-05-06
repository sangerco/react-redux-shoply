import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav>
                <NavLink exact to='/'>Products</NavLink>
                <NavLink exact to='/cart'>Shopping Cart</NavLink>
            </nav>
        </div>


    );
}

export default NavBar;