import React from 'react';
import './css/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-item nav-logo">
            <a href='/'>
                <img className="nav-logo-img" src="/assets/logo/main_logo.png" alt="logo" />
            </a>
        </div>
        <div className="nav-item nav-links">
            <div className="nav-link"><a href="/">Home</a></div>
            {/* <div className="nav-link"><a href="about.html">About</a></div> */}
            <div className="dropdown-dropper nav-link">
                <span>Teams</span>
                <ol className="dropdown">
                    <li><a href="team-a.html">Meet TKA: 15887</a></li>
                    <li><a href="team-b.html">Meet TKB: 15891</a></li>
                </ol>
            </div>
            <div className="nav-link"><a href="contact.html">Contact</a></div>
            <div className="nav-link"><a href="sponsors.html">Sponsors</a></div>
        </div>
        <div className='nav-item nav-socials'>
            <a target="_blank" href="https://www.facebook.com/frcteam6203/" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/KnightsTitanium" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/titaniumknightsftc/" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/titanium-knights" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/@ftctitaniumknightsa4186" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
            </a>
        </div>
    </div>
  );
}

export default Navbar;