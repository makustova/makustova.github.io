import {PALETTE, BORDER_FREQ} from "../constants.js";

export default function () {
  const {ctx, width, height, freqs} = this;
  const {particles, accentColor} = window;

  ctx.fillStyle = PALETTE.light
  ctx.lineWidth = 3;
  ctx.shadowColor = accentColor
  ctx.strokeStyle = PALETTE.light
  ctx.lineCap = 'butt'
  ctx.globalAlpha = 0.7 + freqs[BORDER_FREQ] / 10
  ctx.shadowBlur = 7

  for (const particle of particles) {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, true);
    particle.x += particle.momentumX * freqs[BORDER_FREQ] / 50
    particle.y += particle.momentumY * freqs[BORDER_FREQ] / 50
    if (particle.x > width) {
      particle.x = 0
    }
    if (particle.x < 0) {
      particle.x = width
    }
    if (particle.y > height) {
      particle.y = 0
    }
    if (particle.y < 0) {
      particle.y = height
    }
    ctx.fill()
  }
}