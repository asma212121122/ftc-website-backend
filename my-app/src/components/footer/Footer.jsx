import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube ,FaXTwitter  } from 'react-icons/fa6';
import './footer.css'
import Image from './images/footer-image.png';

const Footer = () =>{
    return (
    <footer id="Footer" className="footer">
        
        <div className="content">
            <p>FOLLOW US</p>
            <p>Join Our Community</p>
            <div className="icons">
                    <a href="https://www.facebook.com/future.tech.club" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook  />
                    </a>
                    <a href="https://www.instagram.com/future_tech_club/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/club-scientifique-de-l-ensticp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin  />
                    </a>
                    <a href="https://www.youtube.com/@FTCclubscientifiquedelENSTICP" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                    
            </div>
        </div>
        <div className="image"><img src={Image} alt="image" /></div>
        <div className="nav-links">
            <a href="#Home">Home</a>
            <a href="#AboutUs">About Us</a>
            <a href="#Trainings">Training & Workshops</a>
            <a href="#Events">Events</a>
            <a href="#ContactUs">Contact Us</a>
        </div> 
        <div className="line"></div>
    </footer>
    );
};
export default Footer;