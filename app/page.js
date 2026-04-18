"use client";

import dynamic from 'next/dynamic';

// We import the carousel dynamically and disable Server-Side Rendering (ssr: false)
const DiamondCarousel = dynamic(() => import('./DiamondCarousel'), { 
  ssr: false,
  loading: () => <div style={loadingStyle}>Loading 3D Emerald...</div>
});

export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', width: '100vw' }}>
      <DiamondCarousel />
    </main>
  );
}

const loadingStyle = {
  color: '#004d40',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '1.2rem',
  letterSpacing: '2px'
};