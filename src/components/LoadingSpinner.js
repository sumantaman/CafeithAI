import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="coffee-cup">
        <div className="coffee-steam">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="coffee-handle"></div>
      </div>
      <p className="loading-text">Brewing your experience...</p>
    </div>
  );
};

export default LoadingSpinner; 