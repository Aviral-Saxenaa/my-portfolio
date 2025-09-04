"use client"

import { useState, useEffect } from 'react';

export default function CustomLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.2; // Will reach 100% in about 8.3 seconds
      });
    }, 100);

    // Hide loading screen after 8.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1224] overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-violet-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main loading content */}
        <div className="relative z-10 text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-pulse">
              aviral.tech
            </h1>
            <p className="text-gray-400 text-base md:text-lg tracking-wider animate-pulse">
              Loading Portfolio...
            </p>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center items-center space-x-3 mb-8">
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Progress bar */}
          <div className="w-80 md:w-96 mx-auto mb-6">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-green-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Progress percentage */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Loading text */}
          <div className="mt-4">
            <p className="text-gray-500 text-sm md:text-base animate-pulse">
              {progress < 30 && "Initializing experience..."}
              {progress >= 30 && progress < 60 && "Loading components..."}
              {progress >= 60 && progress < 90 && "Preparing portfolio..."}
              {progress >= 90 && "Almost ready..."}
            </p>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float-${(i % 6) + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Loading completion animation */}
        {progress >= 100 && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-green-500/20 animate-pulse"></div>
        )}
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}