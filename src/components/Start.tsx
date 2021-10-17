import React from 'react';
import './start.css';

export const Start: React.FC = () => {
    return (
        <div className="start-navigation-container">
          <a href="/" className="start-navigation text-white">
            Start din rejse her
            <span className="dots dot-1">.</span>
            <span className="dots dot-2">.</span>
            <span className="dots dot-3">.</span>
          </a>
        </div>
    )
}