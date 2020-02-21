import React from "react";
import "./style.css"

const Nav = props => {
    return (
        <nav className="navbar sticky-top clicky-nav">
            <a className="navbar-brand mr-auto" href="/">
                <img alt=" " src="/assets/rose_favicon-32x32.png"/>  THE BACHELOR CLICKY GAME
            </a>
            <ul className="nav instructions">
            <li className="nav-item instruction-span">{props.message}</li>
            </ul>
            <ul className="nav ml-auto scoreboard">
                <li className="nav-item Current-Score">Current Score: {props.current_score}</li>
                <li className="nav-item Highest-Score">Highest Score: {props.highest_score}</li>
            </ul>
        </nav>
    );
}

export default Nav;

