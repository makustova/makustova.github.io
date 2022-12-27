import {DENSITY, PARTICLE_RANDOM_Q} from "./constants.js";

export function animateAccentColor(i) {
  window.accentColor = 'hsl(' + i + ', 40%, 40%)';

  setTimeout(function() {
      animateAccentColor(++i)
  }, i);
}

export function initParticles(width, height) {
  const particles = new Array(DENSITY).fill(undefined);

  for (const i in particles) {
    particles[i] = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      size: Math.floor(Math.random() * PARTICLE_RANDOM_Q),
      momentumX: (Math.random() - 0.5) / PARTICLE_RANDOM_Q,
      momentumY: (Math.random() - 0.5) / PARTICLE_RANDOM_Q
    }
  }

  window.particles = particles;
}

export const resetFrame = (ctx) => {
  ctx.fillStyle = 'transparent'
  ctx.strokeStyle = 'transparent'
  ctx.globalAlpha = 1
}