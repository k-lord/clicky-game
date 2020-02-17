import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar clicky-nav">
            <a className="navbar-brand mr-auto" href="/">
                <img alt=" " src="/assets/rose_favicon-32x32.png"/>  THE BACHELOR CLICKY GAME
            </a>
            <ul className="nav instructions">
            <li className="nav-item instruction-span">Click an Image to Begin!</li>
            </ul>
            <ul className="nav ml-auto scoreboard">
                <li className="nav-item Current-Score">Current Score: #</li>
                <li className="nav-item Highest-Score">Highest Score: #</li>
            </ul>
        </nav>
    );
}

export default Nav;

