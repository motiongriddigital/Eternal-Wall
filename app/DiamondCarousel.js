"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// This is the magic fix: it tells Next.js "Don't load this on the server"
const SplineScene = dynamic(() => import('./SplineScene'), { 
  ssr: false,
  loading: () => <div style={loadingContainer}>✨ Polishing Emerald...</div>
});

const DiamondCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these with your actual Spline Export URLs
  const diamonds = [
    { name: 'Emerald', url: 'https://my.spline.design/reddiamondruby-783VUe0ThsDfMJ0sGbuV76qe/' },
    { name: 'Ruby', url: 'https://my.spline.design/reddiamondruby-783VUe0ThsDfMJ0sGbuV76qe/' }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{diamonds[currentIndex].name}</h1>
      
      <div style={carouselWrapper}>
        <button onClick={() => setCurrentIndex(0)} style={btnStyle}>Emerald</button>
        
        <div style={canvasContainer}>
          <SplineScene sceneUrl={diamonds[currentIndex].url} />
        </div>

        <button onClick={() => setCurrentIndex(1)} style={btnStyle}>Ruby</button>
      </div>
    </div>
  );
};

// --- Styles ---
const containerStyle = { height: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' };
const titleStyle = { color: '#004d40', fontSize: '2.5rem', marginBottom: '20px', letterSpacing: '5px' };
const carouselWrapper = { display: 'flex', alignItems: 'center', width: '90%', height: '600px' };
const canvasContainer = { flex: 1, height: '100%' };
const btnStyle = { padding: '10px 20px', background: 'transparent', border: '1px solid #004d40', color: '#fff', cursor: 'pointer', margin: '0 20px' };
const loadingContainer = { color: '#004d40', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' };

export default DiamondCarousel;