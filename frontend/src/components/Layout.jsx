import { useLocation } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;