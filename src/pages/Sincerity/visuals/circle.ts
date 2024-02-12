import {DIAMETER, PALETTE} from "./constants";
import {DrawVisual} from "./types";

export const drawCircle: DrawVisual = ({ctx, accentColor, width, height}) => {
  ctx.translate(width / 2, height / 2);
  ctx.strokeStyle = accentColor;
  ctx.shadowColor = accentColor;
  ctx.fillStyle = accentColor;

  ctx.fillStyle = PALETTE.light;
  ctx.beginPath();
  ctx.arc(0, 0, DIAMETER, 0, Math.PI * 2, true);
  ctx.fill();

  // ctx.globalAlpha = 0.2;
  // ctx.shadowBlur = 10;
  // ctx.beginPath();
  // ctx.arc(0, 0, DIAMETER, 0, Math.PI * 2, true);
  // ctx.fill();

  ctx.translate(-width / 2, -height / 2);
};
