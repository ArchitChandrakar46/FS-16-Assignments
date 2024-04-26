/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <header>
            {/* Your header content here */}
            <h1>{props.heading}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
