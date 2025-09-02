"use client"
import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../../app/AnimationData/trading.json';

const TradingAnimation = () => {
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
      
        // Cleanup function
        return () => {
          if (animationInstance) {
            animationInstance.destroy();
          }
        };
      }, [animationData]);
  
    return <div ref={containerRef}></div>;
  };
  
  export default TradingAnimation;
