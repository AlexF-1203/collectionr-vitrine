import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <span>CollectionR</span>
                    <p>&copy; {new Date().getFullYear()} CollectionR. Tous droits réservés.</p>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/EpitechMscProPromo2027/T-ESP-700-project-93703-NCE_17" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
