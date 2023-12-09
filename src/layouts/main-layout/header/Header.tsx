import React from 'react';
import './Header.scss';
import logo from '../../../static/reasonstoswallowlogo.png';
import BurgerMenu from '../../../components/menu/burger-menu/Burger-menu'

const Header = () => (
    <header className="header container-fluid">
        <div className="header-item col-3">
            <BurgerMenu/>
        </div>

        <div className="header-item col-3">
            <img  src={logo} alt="reasons to"/>
        </div>
    </header>

);

export default Header;