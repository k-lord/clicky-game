import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg clicky-nav">
            <a className="navbar-brand" href="/">
                <img alt=" " src="/assets/rose_favicon-32x32.png"/>  THE BACHELOR CLICKY GAME
            </a>
            <ul className="nav ml-auto">
                <li className="nav-item">Current Score: #</li>
                <li className="nav-item">Highest Score: #</li>
            </ul>
        </nav>
    );
}

export default Nav;

