import React from 'react';

// Assets | Icons | Logo :
import logo from '../assets/zeropark-logo-white-cm.svg'
import logo2 from '../assets/logo-connected-by-team-internet-white.svg'
import linkedin from '../assets/Social-logo/linkedin-white.svg'
import facebook from '../assets/Social-logo/facebook-white.svg'
import instagram from '../assets/Social-logo/instagram-white.svg'

// css :
import './style/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container max-width">
                <div className="footer__flex">
                    <div className="footer__logo">
                        <div> <img src={logo} alt="Zeropark Logo" /></div>
                        <div> <img src={logo2} alt="Team Internet Logo" /></div>

                    </div>
                    <div className="footer__columns">
                        <div className="footer__column">
                            <p>Solutions</p>
                            <ul>
                                <li><a href="#">Publishers</a></li>
                                <li><a href="#">Brands and Agencies</a></li>
                                <li><a href="#">Media Buyers</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <p>Resources</p>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Demo</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Media Planner</a></li>
                                <li><a href="#">The Signal Newsletter</a></li>
                                <li><a href="#">2024 Consumer Trends Ebook</a></li>
                                <li><a href="#">Black Friday Report</a></li>
                                <li><a href="#">2023 Consumer Trends Ebook</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Webinars</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <p>Legal</p>
                            <ul>
                                <li><a href="#">Advertiser T&C</a></li>
                                <li><a href="#">Publisher T&C</a></li>
                                <li><a href="#">End-User Privacy Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookies Policy</a></li>
                                <li><a href="#">DPA</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__social">
                    <div className='footer__social__icons'> <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                    <div><p>© 2024 Zeropark by Commerce Media Tech</p></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
