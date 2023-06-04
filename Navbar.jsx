import React from 'react';

import './styles/navbar.css';
const Navbar = ({ icon, links }) => {
    return (
        <nav>
            <div>{icon}</div>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
