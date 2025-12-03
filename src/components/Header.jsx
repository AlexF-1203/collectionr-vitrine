import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img src="public/assets/collectionr.jpg" alt="CollectionR Logo" />
                    <span>CollectionR</span>
                </div>
                <nav className="nav">
                    <a href="#about">À propos</a>
                    <a href="#recruitment" className="btn-nav">Nous rejoindre</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
