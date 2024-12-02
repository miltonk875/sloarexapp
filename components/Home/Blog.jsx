import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blog-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Our Blog</span>
                <h2 className="site-title">
                  News &amp; <span>Blog</span>
                </h2>
                <div className="heading-divider" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                  <img src="/img/blog/01.jpg" alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> By Alicia Davis
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> May 10, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <a href="#">
                      There are many variations of passages orem available
                    </a>
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <a className="blog-btn" href="#">
                    Read More
                    <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                  <img src="/img/blog/02.jpg" alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> By Alicia Davis
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> May 10, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <a href="#">
                      There are many variations of passages orem available
                    </a>
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <a className="blog-btn" href="#">
                    Read More
                    <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                  <img src="/img/blog/03.jpg" alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> By Alicia Davis
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> May 10, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <a href="#">
                      There are many variations of passages orem available
                    </a>
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <a className="blog-btn" href="#">
                    Read More
                    <i className="fas fa-arrow-circle-right" />
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

export default Blog;
