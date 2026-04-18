"use client";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ sceneUrl }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* React 19 likes Suspense for heavy 3D assets */}
      <Suspense fallback={<div>Loading 3D...</div>}>
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  );
}