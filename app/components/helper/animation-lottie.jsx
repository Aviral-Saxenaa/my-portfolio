"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-200 animate-pulse rounded"></div>
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
    // If animationPath is a string (URL), fetch the JSON
    if (typeof animationPath === 'string') {
      fetch(animationPath)
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(error => console.error('Error loading animation:', error));
    } else {
      // If it's already an object, use it directly
      setAnimationData(animationPath);
    }
  }, [animationPath]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    style: {
      width: width || '95%',
    }
  };

  if (!isClient || !animationData) {
    return <div className="w-full h-64 bg-gray-200 animate-pulse rounded"></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;