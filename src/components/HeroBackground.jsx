// src/components/HeroBackground.jsx
import React from "react";
import Particles from "react-tsparticles";

const HeroBackground = () => {
  return (
    <>
      <Particles
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: "#0b1220" },
          fpsLimit: 60,
          particles: {
            color: { value: "#22d3ee" },
            links: {
              enable: true,
              color: "#22d3ee",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: 3 },
            opacity: { value: 0.7 },
          },
        }}
      />

      <div className="animated-gradient"></div>
    </>
  );
};

export default HeroBackground;
