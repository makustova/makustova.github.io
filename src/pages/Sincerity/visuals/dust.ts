import {BORDER_FREQ, PARTICLE_DENSITY, PARTICLE_RANDOM_Q} from "./constants";
import {DrawVisual} from "./types";

export const initParticles = (width: number, height: number) => {
  const particles = new Array(PARTICLE_DENSITY).fill(undefined);

  for (const i in particles) {
    particles[i] = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      size: Math.floor(Math.random() * PARTICLE_RANDOM_Q),
      momentumX: (Math.random() - 0.5) / PARTICLE_RANDOM_Q,
      momentumY: (Math.random() - 0.5) / PARTICLE_RANDOM_Q,
    };
  }

  // @ts-ignore
  window.particles = particles;
};

export const drawDust: DrawVisual = ({
  ctx,
  width,
  height,
  freqs,
  accentColor,
}) => {
  // @ts-ignore
  const {particles} = window;

  ctx.fillStyle = accentColor;
  ctx.shadowColor = accentColor;
  ctx.strokeStyle = accentColor;

  ctx.lineWidth = 3;
  ctx.lineCap = "butt";
  ctx.globalAlpha = 0.5 + freqs[BORDER_FREQ] / 10;
  ctx.shadowBlur = 7;

  for (const particle of particles) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, true);
    particle.x += (particle.momentumX * freqs[BORDER_FREQ]) / 50;
    particle.y += (particle.momentumY * freqs[BORDER_FREQ]) / 50;
    if (particle.x > width) {
      particle.x = 0;
    }
    if (particle.x < 0) {
      particle.x = width;
    }
    if (particle.y > height) {
      particle.y = 0;
    }
    if (particle.y < 0) {
      particle.y = height;
    }
    ctx.fill();
  }
};
