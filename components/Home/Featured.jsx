import React from "react";

const Featured = () => {
  return (
    <>
      <div className="case-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Projects</span>
                <h2 className="site-title">
                  Our Featured <span>Projects</span>
                </h2>
                <div className="heading-divider" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row popup-gallery">
            <div className="case-slider owl-carousel owl-theme">
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/01.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/01.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Hydropower</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/02.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/02.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Wind Turbines</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/03.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/03.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Solar Panels</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/04.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/04.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Solar Energy</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/05.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/05.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Wind Turbines</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="case-item">
                <div className="case-img">
                  <img className="img-fluid" src="/img/case/06.jpg" alt="" />
                  <a className="popup-img case-link" href="/img/case/06.jpg">
                    <i className="far fa-plus" />
                  </a>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <small>Solar Power</small>
                    <h4>
                      <a href="#">Wind Turbines</a>
                    </h4>
                  </div>
                  <a href="#" className="case-arrow">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
