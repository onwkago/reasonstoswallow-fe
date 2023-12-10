import React from 'react';
import './Burger-menu.scss';
import {Link} from "react-router-dom";
const BurgerMenu = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/convince-me">Why should I?</Link>
                </li>
            </ul>
        </nav>
    );
}
export default BurgerMenu;