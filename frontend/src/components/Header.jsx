import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../assets/css/Header.css';
import logo from '../assets/images/logo_header.png';
import headerImage0 from '../assets/images/header_0.png';
import headerImage1 from '../assets/images/header_1.png';

const getBannerData = (pathName) => {
    switch (pathName) {
        case '/':
            return {image: headerImage0, message: 'Chez vous, partout et ailleurs'};
        case '/a-propos':
            return {image: headerImage1, message: null};
        default:
            return {image: null, message: null};
    }
};

const Header = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const {image: chosenBanner, message: bannerMessage} = getBannerData(pathName);
    const [firstPart, secondPart] = bannerMessage ? bannerMessage.split(',') : [null, null];
    const isActiveLink = (linkPath) => pathName === linkPath;

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Kasa Logo"/>
                </div>
                <nav className="navigation">
                    <Link
                        to="/"
                        className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className={`nav-link ${isActiveLink('/a-propos') ? 'active' : ''}`}
                    >
                        A Propos
                    </Link>
                </nav>
            </header>
            {chosenBanner && (
                <div className="banner-container">
                    <div className="banner" style={{backgroundImage: `url(${chosenBanner})`}}>
                        {bannerMessage && <div className="overlay"></div>}
                        {bannerMessage && (
                            <h1>
                                {firstPart},
                                {secondPart && <span className="responsive-break">{secondPart}</span>}
                            </h1>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
