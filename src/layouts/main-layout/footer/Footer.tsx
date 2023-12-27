import React from 'react';

import logo from '../../../static/reasonstoswallowlogo.png';
import './Footer.scss';
import {Link} from "react-router-dom";

const Footer = () => (
    <footer className="footer">
        <div className="header-item col-3 logo">
            <Link to="/" >
                <img  src={logo} alt="reasons to"/>
                ReasonsToSwallow
            </Link>
        </div>
    </footer>
);

export default Footer;


