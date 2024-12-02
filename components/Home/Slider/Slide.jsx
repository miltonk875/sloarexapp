import React from "react";

const Slide = ({ image, title, subtitle, description, contactcus, aboutus }) => {
  return (
    <div
      className="hero-single"
      style={{ backgroundImage: `url(${image})` }} // Use the image prop here
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-7">
            <div className="hero-content">
              <h6
                className="hero-sub-title wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                {subtitle}
              </h6>
              <h1
                className="hero-title wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".50s"
                dangerouslySetInnerHTML={{ __html: title }} // Use title prop with HTML
              />
              <p
                className="wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".75s"
              >
                {description}
              </p>
              <div
                className="hero-btn wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <a href="#" className="theme-btn">
                  {contactcus}
                  <i className="fas fa-arrow-circle-right" />
                </a>
                <a href="#" className="theme-btn theme-btn2">
                  {aboutus}
                  <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
