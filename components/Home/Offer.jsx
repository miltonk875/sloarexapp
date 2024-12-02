import React from "react";

const Offer = () => {
  return (
    <>
      <div className="service-area bg py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Services</span>
                <h2 className="site-title">
                  What We <span>Offer</span>
                </h2>
                <div className="heading-divider" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-solar-panel" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Renewable Energy</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages available but the
                    majority have suffered alteration injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="service-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-solar-panel-1" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Easy Installation</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages available but the
                    majority have suffered alteration injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="service-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-solar-panel-2" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Solar Panels</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages available but the
                    majority have suffered alteration injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="service-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-wind-turbine" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Wind Generators</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages available but the
                    majority have suffered alteration injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="service-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
