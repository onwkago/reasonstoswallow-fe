import React from 'react';
import './Burger-menu.scss';
import {Link} from "react-router-dom";
const BurgerMenu = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">ReasonsToSwallow</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/convince-me">Convince Me</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}
export default BurgerMenu;