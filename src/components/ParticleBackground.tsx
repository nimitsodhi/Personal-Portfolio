import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#00ffff',
          },
          links: {
            color: '#00ffff',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
