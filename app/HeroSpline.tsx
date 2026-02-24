'use client';

import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <Spline
      scene="https://prod.spline.design/60ETvIjjQN428da4/scene.splinecode"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}
