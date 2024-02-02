import React from 'react';
import './index.css';
import googleplay from '../assets/img/googleplay.svg';
import appstore from '../assets/img/appstore.svg';


const Footer = () => {
    return (
        <footer className="footer">

            <nav className="footer__menu">
                <ul className="footer__list">
                    <li><p className="footer__title">Products</p></li>
                    <li><a href="#" className="footer__link">User</a></li>
                    <li><a href="#" className="footer__link">New</a></li>
                    <li><a href="#" className="footer__link">Sell your car</a></li>
                </ul>
                <ul className="footer__list">
                    <li><p className="footer__title">Resources</p></li>
                    <li><a href="#" className="footer__link">Blog</a></li>
                    <li><a href="#" className="footer__link">FAQ</a></li>
                    <li><a href="contacts.html" className="footer__link">Contact us</a></li>
                </ul>
                <ul className="footer__list">
                    <li><p className="footer__title">Work With TrueCar</p></li>
                    <li><a href="#" className="footer__link">Dealers</a></li>
                    <li><a href="#" className="footer__link">Partners</a></li>
                </ul>
                <ul className="footer__list">
                    <li><p className="footer__title">About</p></li>
                    <li><a href="#" className="footer__link">About us</a></li>
                    <li><a href="#" className="footer__link">Team</a></li>
                    <li><a href="#" className="footer__link">Careers</a></li>
                </ul>
            </nav>
            <ul className="app">
                <li>
                    <a href="#">
                        <img className="app_item-img" src={appstore} alt="App Store" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className="app_item-img" src={googleplay} alt="Google Play" />
                    </a>
                </li>
            </ul>
            <div className="footer__copy">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                    Labore vero eius dignissimos nemo architecto rerum natus aut amet distinctio in? Deleniti eaque dolorum ad provident alias distinctio dolore quibusdam velit.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore vero eius dignissimos nemo architecto rerum natus aut amet<br />
                    distinctio in? Deleniti eaque dolorum ad provident alias distinctio dolore quibusdam velit.<br /><br />
                    © Louise 2024
                </p>
            </div>
            <nav>
                <ul className="copy__nav-list">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Do not Sell My Personal Information</a></li>
                </ul>
            </nav>

        </footer>
    );
};

export default Footer;