import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-shape">
        <img
          className="footer-shape-1"
          src="/img/shape/01.png"
          alt="shape"
        />
        <img
          className="footer-shape-2"
          src="/img/shape/02.png"
          alt="shape"
        />
      </div>
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-100 pb-70">
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box about-us">
                <a href="#" className="footer-logo">
                  <img src="/img/logo/logo-light.png" alt="" />
                </a>
                <p className="mb-20">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  which don't look even slightly believable.
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box">
                <h4 className="footer-widget-title">Contact Us</h4>
                <ul className="footer-contact">
                  <li>
                    <i className="far fa-map-marker-alt" />
                    25/B Milford Road, New York
                  </li>
                  <li>
                    <a href="tel:+21236547898">
                      <i className="far fa-phone" />
                      +2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <a href="/cdn-cgi/l/email-protection#1d74737b725d78657c706d7178337e7270">
                      <i className="far fa-envelope" />
                      <span
                        className="__cf_email__"
                        data-cfemail="7f161119103f1a071e120f131a511c1012"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="far fa-clock" />
                    Sun - Fri (08AM - 10PM)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Terms Of Service
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Our Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <button className="theme-btn" type="submit">
                        <span className="far fa-envelope" /> Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p className="copyright-text">
                © Copyright <span id="date" /> <a href="#"> Solarex </a> All
                Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <ul className="footer-menu">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Terms Of Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
