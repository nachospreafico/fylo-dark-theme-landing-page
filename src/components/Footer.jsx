import "./styles/Footer.css";
import Logo from "./../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Location from "./../assets/images/icon-location.svg";
import Email from "./../assets/images/icon-email.svg";
import Phone from "./../assets/images/icon-phone.svg";

import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} className="footer-logo" alt="footer logo"></img>
      <div className="company-data-container">
        <div className="location-container">
          <img src={Location} className="data-icon" alt="location icon"></img>
          <p className="data-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="phone-container">
          <img src={Phone} className="data-icon" alt="phone icon"></img>
          <p className="data-text">+1-543-123-4567</p>
        </div>
        <div className="email-container">
          <img src={Email} className="data-icon" alt="email icon"></img>
          <p className="data-text">example@fylo.com</p>
        </div>
      </div>
      <nav className="footer-navbar">
        <ul className="footer-navbar-1">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Press</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
        <ul className="footer-navbar-2">
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </ul>
      </nav>
      <div className="social-icons-container">
        <div>
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </div>
        <div>
          <FontAwesomeIcon icon={faXTwitter} color="white" />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
