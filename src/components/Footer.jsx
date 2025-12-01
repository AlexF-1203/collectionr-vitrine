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
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
