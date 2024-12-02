import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="/img/logo/logo.png" alt="logo" />
        </a>
        <div className="mobile-menu-right">
          <a href="#" className="mobile-search-btn search-box-outer">
            <i className="far fa-search" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="far fa-stream" />
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
          <div className="header-nav-right">
            {/* <div className="header-cart">
              <a href="#">
                <i className="far fa-shopping-cart" />
                <span>2</span>
              </a>
            </div> */}
            <div className="header-btn">
              <a href="#" className="theme-btn">
                Get A Quote
                <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
