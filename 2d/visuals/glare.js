import {DIAMETER} from "../constants.js";

const ANGLE = 2 * Math.PI / 100;

export default function () {
  const {ctx, freqs, centerX, centerY} = this;
  ctx.fillStyle = window.accentColor
  ctx.shadowColor = window.accentColor
  ctx.lineWidth = 1;
  ctx.lineCap = 'butt'
  ctx.shadowBlur = 100
  ctx.globalAlpha = 0.2
  // ctx.filter = 'blur(10px)';
  ctx.beginPath();

  let i = 100;
  while (i < 200) {
    const h = freqs[i];
    ctx.translate(centerX, centerY)
    ctx.rotate(ANGLE)
    ctx.translate(-centerX, -centerY)
    ctx.lineTo(centerX, -h / 10 + 300)
    i++
  }
  if (i === 200) {
    const h = freqs[100];
    ctx.translate(centerX, centerY)
    ctx.rotate(ANGLE)
    ctx.translate(-centerX, -centerY)
    ctx.lineTo(centerX, -h / 10 + 300)
    i++
  }
  ctx.fill()
}
