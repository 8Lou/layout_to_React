import React from 'react';
import './index.css';
import googleplay from '../assets/img/googleplay.svg';
import appstore from '../assets/img/appstore.svg';


const Footer = () => {
    const menuItems = [
        { title: "Products", links: ["User", "New", "Sell your car"] },
        { title: "Resources", links: ["Blog", "FAQ", "Contact us"] },
        { title: "Work With TrueCar", links: ["Dealers", "Partners"] },
        { title: "About", links: ["About us", "Team", "Careers"] },
    ];
    return (
        <footer className="footer">
            <nav className="footer__menu">
                {menuItems.map((item, index) => (
                    <ul className="footer__list" key={index}>
                        <li className="footer__link">
                            <p className="footer__title">{item.title}</p>
                        </li>
                        {item.links.map((link, idx) => (
                            <li className="footer__link" key={idx}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                ))}
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