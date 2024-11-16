import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className='error-code'>
                <h1>404</h1>
            </div>
            <div className='error-message'>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='link-container'>
                <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default NotFound;
