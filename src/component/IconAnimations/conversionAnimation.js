// WorldAnimation.js
"use client"
import React from 'react';
import Lottie from 'lottie-web';

const ConversionAnimation = ({ animationData }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let animationInstance;

    if (containerRef.current) {
      animationInstance = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        renderer: 'svg', // or 'canvas'
        loop: false,
        autoplay: true,
      });
    }

    // Cleanup function
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef}></div>;
};

export default ConversionAnimation;
