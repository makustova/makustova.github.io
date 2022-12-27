import {PALETTE, DIAMETER} from "../constants.js";

export default function () {
  const {ctx, centerX, centerY} = this;

  ctx.strokeStyle = window.accentColor
  ctx.shadowColor = PALETTE.light
  ctx.globalAlpha = 1
  ctx.fillStyle = PALETTE.dark
  ctx.shadowBlur = 10
  ctx.beginPath()
  ctx.arc(centerX, centerY, DIAMETER, 0, Math.PI * 2, true);
  ctx.fill()
}