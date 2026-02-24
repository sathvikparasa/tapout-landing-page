'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '3px solid rgba(0,0,0,0.1)',
            borderTopColor: '#0a0a0a',
            animation: 'spin 0.75s linear infinite',
          }} />
        </div>
      )}

      <div className="spline-mobile-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Spline
          scene="https://prod.spline.design/60ETvIjjQN428da4/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </>
  );
}
