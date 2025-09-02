// components/Loader.js
import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../app/Business Logo Animation.json';

const Loader = ({ onAnimationComplete }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let animationInstance;

    if (containerRef.current) {
      animationInstance = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        renderer: 'svg', // or 'canvas'
        loop: false, // No need to loop for the initial load
        autoplay: true,
      });

      // Listen for animation complete event
      animationInstance.addEventListener('complete', onAnimationComplete);
    }

    // Cleanup function
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [onAnimationComplete]);

  return <div ref={containerRef}></div>;
};

export default Loader;
