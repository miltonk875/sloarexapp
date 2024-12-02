"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
   
    console.log('hitting')
      // Scroll to the top smoothly
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      // Add the scroll event listener
      useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY,window.innerHeight)
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
       
    }, []);
    console.log(isVisible)

  const scrollTopStyle = {
    display: isVisible? "block":"none",
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: 99,
    fontSize: "22px",
    border: "none",
    outline: "none",
    borderRadius: "50px",
    background: "#32C36C",
    color: "#fff",
    cursor: "pointer",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    boxShadow: "0 3px 24px rgba(0, 0, 0, 0.1)",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <div>
        <a
          href="#"
          id="scroll-top"
          style={scrollTopStyle}
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <i className="far fa-long-arrow-up" />
        </a>
    </div>
  );
};

export default ScrollToTop;
