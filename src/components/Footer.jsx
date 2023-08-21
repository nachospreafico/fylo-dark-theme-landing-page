import { useState } from "react";

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
  const [isMouseOver, setIsMouseOver] = useState({
    fB: false,
    xT: false,
    iG: false,
  });

  return (
    <footer>
      <a href="#">
        <img src={Logo} className="footer-logo" alt="footer logo"></img>
      </a>
      <div className="footer-content">
        <div className="company-data-container">
          <div className="location-container">
            <img src={Location} className="data-icon" alt="location icon"></img>
            <p className="data-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contact-container">
            <div className="phone-container">
              <img src={Phone} className="data-icon" alt="phone icon"></img>
              <p className="data-text">+1-543-123-4567</p>
            </div>
            <div className="email-container">
              <img src={Email} className="data-icon" alt="email icon"></img>
              <p className="data-text">example@fylo.com</p>
            </div>
          </div>
        </div>
        <nav className="footer-navbar">
          <ul className="footer-navbar-1">
            <li>
              <a className="footer-link">About Us</a>
            </li>
            <li>
              <a className="footer-link">Jobs</a>
            </li>
            <li>
              <a className="footer-link">Press</a>
            </li>
            <li>
              <a className="footer-link">Blog</a>
            </li>
            <li>
              <a className="footer-link">Contact Us</a>
            </li>
            <li>
              <a className="footer-link">Terms</a>
            </li>
            <li>
              <a className="footer-link">Privacy</a>
            </li>
          </ul>
        </nav>
        <div className="social-icons-container">
          <div
            className="facebook-container"
            onMouseOver={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                fB: true,
              }));
            }}
            onMouseLeave={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                fB: false,
              }));
            }}
          >
            <FontAwesomeIcon
              className="facebook"
              icon={faFacebook}
              color={isMouseOver.fB ? "#1877f2" : "white"}
            />
          </div>
          <div
            className="x-twitter-container"
            onMouseOver={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                xT: true,
              }));
            }}
            onMouseLeave={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                xT: false,
              }));
            }}
          >
            <FontAwesomeIcon
              className="x-twitter"
              icon={faXTwitter}
              color={isMouseOver.xT ? "#62E0D9" : "white"}
            />
          </div>
          <div
            className="instagram-container"
            onMouseOver={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                iG: true,
              }));
            }}
            onMouseLeave={() => {
              setIsMouseOver((prevState) => ({
                ...prevState,
                iG: false,
              }));
            }}
          >
            <FontAwesomeIcon
              className="instagram"
              icon={faInstagram}
              color={isMouseOver.iG ? "#dd2a7b" : "white"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
