"use client"
import { useEffect, useState, useRef } from "react";
import { useAnimation } from "framer-motion";

export function useVisibleAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const slideLeft = useAnimation();
  const slideRight = useAnimation();
  const slideR1 = useAnimation();
  const slideR2 = useAnimation();
  const slideR3 = useAnimation();
  const rotate1=useAnimation();


  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animations when element is not visible
          // controls.start({ opacity: 0, y: [50] });
          // slideLeft.start({ opacity: 0, x: -50 });
          // slideRight.start({ opacity: 0, x: 50 });
          setIsVisible(false);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [controls, slideLeft, slideRight,slideR1,slideR2,slideR3,rotate1]);


 
  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      slideLeft.start({ opacity: 1, x: 0, transition: { duration: 1 } });
      slideRight.start({ opacity: 1, x: 0, transition: { duration: 1 } });
      slideR1.start({opacity:1,x:0,transition: { duration: 0.85  } });
      slideR2.start({opacity:1,x:0,transition: { duration: 0.85,delay:0.5  } });
      slideR3.start({opacity:1,x:0,transition: { duration: 0.85,delay:1  } });
      rotate1.start({scale:1,transition: { duration: 1  } })  
    }
  }, [isVisible, controls, slideLeft, slideRight,slideR1,slideR2,slideR3,rotate1]);

  return [ref, controls, slideLeft, slideRight,slideR1,slideR2,slideR3,rotate1];
}
