// components/LoaderProvider.js
"use client"
import { useState, useEffect } from 'react';

import path from 'path';
import Lottie from 'lottie-web';
import animationData from '../app/Loading Animation.json';
import Loader from './Loader'; // Import your Loader component

const stateFilePath = path.resolve('./.initialLoadState');

const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate an asynchronous operation (e.g., fetching data) to determine when to stop showing the loader
      const fetchData = async () => {
        // Replace this with your actual initialization logic
        await new Promise(resolve => setTimeout(resolve, 6000));
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {loading ? (
            <div className='h-[100vh] w-full flex flex-row justify-center items-center bg-[#02043a] overflow-hidden'>
          <Loader onAnimationComplete={() => setLoading(false)} />
            </div>
          // <></>
        ) : (
          children
        )}
      </div>
    );
  };
  
  export default LoaderProvider;