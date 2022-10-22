import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">iEarl V</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_links">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_links">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer_links">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://github.com/iEarlG" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-github'></i>
                </a>

                <a href="https://www.facebook.com/EarlGFPS" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-facebook' ></i>
                </a>

                <a href="https://www.tiktok.com/@earlgfps" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-tiktok' ></i>
                </a>

                <a href="https://www.youtube.com/channel/UC9V8k5akkeKmB8QPggQUbeQ" className="footer_social-links" 
                   target="_blank" rel="noreferrer">
                    <i class='bx bxl-youtube' ></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; iEarl V. All rigths reserved.
            </span>
        </div>
    </footer>
  );
};

export default Footer;