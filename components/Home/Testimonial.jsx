import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-area bg py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Testimonials</span>
                <h2 className="site-title">
                  What Client <span>Say's</span>
                </h2>
                <div className="heading-divider" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-slider owl-carousel owl-theme">
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="fal fa-quote-right" />
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="/img/testimonial/01.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Sylvia H Green</h4>
                  <p>Customer</p>
                  <div className="testimonial-rate">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="fal fa-quote-right" />
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="/img/testimonial/02.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Gordon D Novak</h4>
                  <p>Customer</p>
                  <div className="testimonial-rate">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="fal fa-quote-right" />
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="/img/testimonial/03.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Reid E Butt</h4>
                  <p>Customer</p>
                  <div className="testimonial-rate">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-single">
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="fal fa-quote-right" />
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src="/img/testimonial/04.jpg" alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>Parker Jimenez</h4>
                  <p>Customer</p>
                  <div className="testimonial-rate">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
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

export default Testimonial;
