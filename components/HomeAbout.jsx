import React from "react";

const HomeAbout = () => {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left">
              <div className="about-img">
                <img src="/img/about/01.jpg" alt="" />
              </div>
              <div className="about-experience">
                <span>30</span>
                <h5>
                  Years Of <br /> Experience
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">About Us</span>
                <h2 className="site-title">
                  We Provide Solar <span>Energy Solutions</span> For You
                </h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of orem
                psum you need to be sure.All the Lorem Ipsum generators on the
                Internet tend to repeat predefined chunks.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="flaticon-solar-panel" />
                    </div>
                    <div className="text">
                      <h4>Highly Solar Solutions</h4>
                      <p>Take a look at our round up of the best shows.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-wind-turbine" />
                    </div>
                    <div className="text">
                      <h4>Best Renewable Energy</h4>
                      <p>It has survived not only five centuries.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn">
                Discover More <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
