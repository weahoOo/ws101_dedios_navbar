import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a custom CSS for Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Weaho</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
