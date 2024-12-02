// ScrollHandler.js
"use client"; // This line indicates that this is a client component

import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

const ScrollHandler = () => {
    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
            if ($(window).scrollTop() > 50) {
                $('.navbar').addClass("fixed-top");
            } else {
                $('.navbar').removeClass("fixed-top");
            }
        };

        // Attach the scroll event listener
        $(window).on('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run once on mount

    return null; // This component does not need to render anything
};

export default ScrollHandler;
