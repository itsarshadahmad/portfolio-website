import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {

    const showNav = () => {
        const navbarLinks = document.getElementsByClassName("nav-item")[0];
        navbarLinks.classList.toggle("active");
    }

    return (
        <nav className="nav">
            <Link to="/" className="home">Arshad Ahmad</Link>
            <div className="toggle-button" onClick={showNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="nav-item">
                <Link to="/skill" id="skill">Skills</Link>
                <Link to="/projects" id="project">Projects</Link>
                <Link to="/contact" id="contact">Contact</Link>
            </div>
        </nav>
    )
}
