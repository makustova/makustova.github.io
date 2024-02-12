import {DIAMETER} from "./constants";
import {DrawVisual} from "./types";

const ANGLE = (2 * Math.PI) / 100;

export const drawFlare: DrawVisual = ({
  ctx,
  freqs,
  width,
  height,
  accentColor,
}) => {
  ctx.translate(width / 2, height / 2);

  ctx.fillStyle = accentColor;
  ctx.shadowColor = accentColor;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.shadowBlur = 100;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();

  let i = 100;
  while (i < 200) {
    const h = freqs[i];
    ctx.rotate(ANGLE);
    ctx.lineTo(0, -h / 10 + DIAMETER + 30);
    i++;
  }
  if (i === 200) {
    const h = freqs[100];
    ctx.rotate(ANGLE);
    ctx.lineTo(0, -h / 10 + DIAMETER + 30);
    i++;
  }
  ctx.fill();

  // reset
  ctx.rotate(-ANGLE);
  ctx.translate(-width / 2, -height / 2);
  ctx.globalAlpha = 1;
};
