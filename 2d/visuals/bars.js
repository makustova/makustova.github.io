import {PALETTE, BORDER_FREQ} from "../constants.js";

export default function () {
  const {ctx, width, height, freqs} = this;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const drawEveryNth = 5;
  ctx.lineWidth = 5;
  ctx.lineCap = 'butt'
  ctx.shadowBlur = 10
  ctx.globalAlpha = 1
  ctx.beginPath()

  let i = 0;

  while (i <= BORDER_FREQ) {
    if ((i % drawEveryNth) === 1) {
      ctx.fillStyle = PALETTE.dark
      ctx.shadowColor = PALETTE.dark
      ctx.fillRect(width / BORDER_FREQ * i, 0, 1, freqs[i - 1])
      ctx.fillStyle = PALETTE.light
      ctx.shadowColor = PALETTE.light
      ctx.fillRect(width / BORDER_FREQ * i, height - freqs[BORDER_FREQ - i], 1, height)
    }
    i++
  }
}