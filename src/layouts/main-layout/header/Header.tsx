import React from 'react';
import {Link} from "react-router-dom";
import BurgerMenu from '../../../components/menu/burger-menu/Burger-menu'
import logo from '../../../static/reasonstoswallowlogo.png';
import './Header.scss';

const Header = () => (
    <header className="header">
        <div className="header-item col-3">
            <BurgerMenu/>
        </div>

        <div className="header-item col-3 logo">
            <Link to="/" >
            <img  src={logo} alt="reasons to"/>
            ReasonsToSwallow
            </Link>
        </div>
    </header>

);

export default Header;