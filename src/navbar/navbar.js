import React from "react";
import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>My <span className="partLogo">Site</span></h1>
            <ul>
                <li>Acceuil</li>
                <li>Services</li>
                <li>A Propos</li>
            </ul>
        </div>
     );
}

export default Navbar;