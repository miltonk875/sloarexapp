import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="tel:+21236547898">
                      <i className="far fa-phone" />
                      +2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-envelope" />
                      <span>info@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-lang">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="lang"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="far fa-globe-americas" />
                    English
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="lang">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/img/lang/english.png" alt="" /> English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/img/lang/germany.png" alt="" /> Germany
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/img/lang/portugues.png" alt="" /> Português
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-social">
                <span>Follow Us:</span>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
