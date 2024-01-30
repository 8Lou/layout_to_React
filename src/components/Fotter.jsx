import React from 'react';
import './index.css';
import googleplay from '../assets/img/googleplay.svg';
import appstore from '../assets/img/appstore.svg';


const Footer = () => {
    return (
        <footer className="footer">

            <nav className="footer__menu">
                <ul className="footer__menu-list">
                    <li className="footer__menu-item"><p className="footer__menu-title">Products</p></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">User</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">New</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Sell your car</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <li className="footer__menu-item"><p className="footer__menu-title">Resources</p></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Blog</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">FAQ</a></li>
                    <li className="footer__menu-item"><a href="contacts.html" className="footer__menu-link">Contact us</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <li className="footer__menu-item"><p className="footer__menu-title">Work With TrueCar</p></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Dealers</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Partners</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <li className="footer__menu-item"><p className="footer__menu-title">About</p></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">About us</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Team</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Careers</a></li>
                </ul>
            </nav>
            <ul className="app">
                <li className="app__item">
                    <a href="#" className="app__item__link">
                        <img className="app_item-img" src={appstore} alt="App Store" />
                    </a>
                </li>
                <li className="app__item">
                    <a href="#" className="app__item__link">
                        <img className="app_item-img" src={googleplay} alt="Google Play" />
                    </a>
                </li>
            </ul>
            <div className="footer__copy">
                <p className="footer__copy-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                    Labore vero eius dignissimos nemo architecto rerum natus aut amet distinctio in? Deleniti eaque dolorum ad provident alias distinctio dolore quibusdam velit.
                </p>
                <p className="footer__copy-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore vero eius dignissimos nemo architecto rerum natus aut amet<br />
                    distinctio in? Deleniti eaque dolorum ad provident alias distinctio dolore quibusdam velit.<br /><br />
                    © Louise 2024
                </p>
            </div>
            <nav className="copy__nav">
                <ul className="copy__nav-list">
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Terms of Service</a></li>
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Privacy Policy</a></li>
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Do not Sell My Personal Information</a></li>
                </ul>
            </nav>

        </footer>
    );
};

export default Footer;