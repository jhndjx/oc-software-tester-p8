import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/logo_footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-footer">
                    <img src={logo} alt="Kasa Logo"/>
                </div>
                <p>© 2020 Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
