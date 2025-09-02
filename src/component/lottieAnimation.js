"use client"
import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../app/Payments.json';

const LottieAnimation = () => {
    const containerRef = React.useRef(null);
  
    React.useEffect(() => {
        let animationInstance;
      
        if (containerRef.current) {
          animationInstance = Lottie.loadAnimation({
            container: containerRef.current,
            animationData: animationData,
            renderer: 'svg', // or 'canvas'
            loop: true,
            autoplay: true,
          });
        }
      
        
        return () => {
          if (animationInstance) {
            animationInstance.destroy();
          }
        };
      }, [animationData]);
  
    return <div ref={containerRef}></div>;
  };
  
  export default LottieAnimation;
