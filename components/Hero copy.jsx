"use client"
// components/Slider.js
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Slider = () => {
  const slides = [
    {
      image: '/img/slider/slider-1.jpg',
      subtitle: 'Solar And Renewable Energy',
      title: 'Best Solar <span>Energy Source</span> For You',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.',
    },
    {
      image: '/img/slider/slider-2.jpg',
      subtitle: 'Solar And Renewable Energy',
      title: 'Best Solar <span>Energy Source</span> For You',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.',
    },
    {
      image: '/img/slider/slider-3.jpg',
      subtitle: 'Solar And Renewable Energy',
      title: 'Best Solar <span>Energy Source</span> For You',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.',
    },
  ];

  return (
    <div className="hero-section">
      <Swiper
    navigation={true} modules={[Navigation]} className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-single" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-lg-7">
                  <div className="hero-content">
                    <h6 className="hero-sub-title wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                      {slide.subtitle}
                    </h6>
                    <h1 className="hero-title wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay=".50s" dangerouslySetInnerHTML={{ __html: slide.title }} />
                    <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay=".75s">
                      {slide.description}
                    </p>
                    <div className="hero-btn wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                      <a href="contact.html" className="theme-btn">
                        Contact Us
                        <i className="fas fa-arrow-circle-right" />
                      </a>
                      <a href="about.html" className="theme-btn theme-btn2">
                        About Us
                        <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
