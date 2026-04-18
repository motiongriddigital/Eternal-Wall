"use client";
import React, { useState } from 'react';

// Instead of importing, define it right here:
const gemData = [
  { "id": 1, "name": "Ruby", "imagePath": "/ruby.png", "color": "#ff2d55" },
  { "id": 2, "name": "Emerald", "imagePath": "/emerald.png", "color": "#00fb9a" },
  { "id": 3, "name": "Gold", "imagePath": "/gold.png", "color": "#ffcc00" },
  { "id": 4, "name": "Silver", "imagePath": "/silver.png", "color": "#e0e0e0" },
  { "id": 5, "name": "Sapphire", "imagePath": "/sapphire.png", "color": "#2d55ff" }
];

export default function DiamondCarousel() {
  const [rotateY, setRotateY] = useState(0);

  const angleStep = 360 / gemData.length;

  const moveNext = () => setRotateY((prev) => prev - angleStep);
  const movePrev = () => setRotateY((prev) => prev + angleStep);

  return (
    <div style={containerStyle}>
      {/* 3D Scene Stage */}
      <div style={stageStyle}>
        <div
          style={{
            ...sliderStyle,
            transform: `rotateX(-10deg) rotateY(${rotateY}deg)`,
          }}
        >
          {gemData.map((gem, i) => (
            <div
              key={gem.id}
              style={{
                ...gemPositionStyle,
                transform: `rotateY(${i * angleStep}deg) translateZ(450px)`,
              }}
            >
              <div style={contentWrapper}>
                {/* In Next.js, images in /public are accessed via absolute path */}
                <img
                  src={gem.imagePath}
                  alt={gem.name}
                  style={imgStyle}
                />
                <span style={{ ...labelStyle, color: gem.color }}>
                  {gem.name}
                </span>
                <div style={{ ...glowStyle, backgroundColor: gem.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={uiOverlay}>
        <button onClick={movePrev} style={arrowBtn}>&larr;</button>
        <button onClick={moveNext} style={arrowBtn}>&rarr;</button>
      </div>
    </div>
  );
}

// --- Styles ---
const containerStyle = {
  height: '100vh',
  width: '100vw',
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  perspective: '2000px',
};

const stageStyle = {
  marginTop:'-150',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transformStyle: 'preserve-3d',
};

const sliderStyle = {
  width: '0px',
  height: '0px',
  transformStyle: 'preserve-3d',
  transition: 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
};

const gemPositionStyle = {
  position: 'absolute',
  width: '180px',
  height: '180px',
  left: '-125px',
  top: '-125px',
  transformStyle: 'preserve-3d',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contentWrapper = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  zIndex: 2,
  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9))',
};

const labelStyle = {
  marginTop: '30px',
  fontSize: '14px',
  letterSpacing: '8px',
  textTransform: 'uppercase',
  fontWeight: '300',
};

const glowStyle = {
  position: 'absolute',
  top: '20%',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  filter: 'blur(60px)',
  opacity: 0.2,
  zIndex: 1,
};

const uiOverlay = {
  position: 'absolute',
  bottom: '10%',
  display: 'flex',
  gap: '60px',
};

const arrowBtn = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  padding: '10px 25px',
  cursor: 'pointer',
  fontSize: '20px',
  borderRadius: '50px',
  transition: '0.3s',
};