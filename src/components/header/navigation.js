import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <Link to="/">Upload</Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/editor">Editor</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
