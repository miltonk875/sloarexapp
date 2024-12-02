import React from "react";

import Slide from "./Slide";


const Hero = () => {
  const slides = [
    {
      image: "/img/slider/slider-1.jpg",
      title: "Best Solar <span>Energy Source</span> For You",
      subtitle: "Solar And Renewable Energy",
      description: "There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.",
      contactcus: "Contact Us",
      aboutus: "About Us",
    },
    {
      image: "/img/slider/slider-2.jpg",
      title: "Best Solar <span>Energy Source</span> For You",
      subtitle: "Solar And Renewable Energy",
      description: "There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.",
      contactcus: "Contact Us",
      aboutus: "About Us",
    },
  ];

  return (
    <div className="hero-section">
      <div className="hero-slider2 owl-carousel owl-theme">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            image={slide.image}
            title={slide.title}
            subtitle={slide.subtitle}
            description={slide.description}
            contactcus={slide.contactcus}
            aboutus={slide.aboutus}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
