import Logo from "./../assets/images/logo.svg";

import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="#">
          <img src={Logo} className="logo" alt="Fylo logo"></img>
        </a>
      </div>
      <nav className="header-navbar">
        <ul>
          <li>
            <a href="#features" className="header-navbar-link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="header-navbar-link">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="header-navbar-link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
