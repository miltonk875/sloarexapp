import React from "react";

const CounterArea = () => {
  return (
    <>
      <div className="counter-area bg2 pt-70 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-available" />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to={1500}
                    data-speed={3000}
                  >
                    1500
                  </span>
                  <h6 className="title">+ Project Done</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-plug" />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to={250}
                    data-speed={3000}
                  >
                    250
                  </span>
                  <h6 className="title">+ Happy Clients</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-helmet" />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to={120}
                    data-speed={3000}
                  >
                    120
                  </span>
                  <h6 className="title">+ Active Experts</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-repair" />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to={50}
                    data-speed={3000}
                  >
                    50
                  </span>
                  <h6 className="title">+ Win Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterArea;
