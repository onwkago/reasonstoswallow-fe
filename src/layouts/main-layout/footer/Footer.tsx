import React from 'react';

import logo from '../../../static/reasonstoswallowlogo.png';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
       <div className="footer-item col-3">
            this is footer
        </div>
        <div className="footer-item col-3">
            <img  src={logo} alt="reasons to"/>
        </div>
    </footer>
);

export default Footer;


