import React from "react";
import "./css/footer.css";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-column">
                <img className="footer-img" src="assets/error/rocket.svg" alt="Titanium Knights Logo" />
                <span>&copy; Titanium Knights 2023</span>
            </div>
            <div className="footer-column">
                <h4>Links</h4>
                <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noreferrer">FIRST Tech Challenge</a>
                <a href="/sponsors.html">Our Sponsors</a>
                <a href="/contact.html">Contact Us</a>
            </div>
            <div className="footer-column">
                <h4>Find us at:</h4>
                <div className="footer-socials">
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
        </div>
    )
}

export default Footer;