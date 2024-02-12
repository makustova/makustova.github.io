import {BORDER_FREQ} from "./constants";
import {DrawVisual} from "./types";

export const drawLines: DrawVisual = ({
  ctx,
  width,
  height,
  freqs,
  accentColor,
}) => {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;
  ctx.shadowColor = accentColor;
  ctx.shadowBlur = 10;
  ctx.beginPath();

  const offset = height / 2 - freqs[BORDER_FREQ];
  const random = (Math.random() - 0.5) * 5;

  let i = 0;
  while (i < 35) {
    ctx.lineTo((width / 35) * i, offset + random + freqs[i + BORDER_FREQ]);
    i++;
  }
  ctx.lineTo(width, height / 2);
  ctx.stroke();
  ctx.moveTo(0, height / 2);
  i = 0;
  while (i < 35) {
    ctx.lineTo(
      (width / 35) * i,
      height - offset + random - freqs[i + BORDER_FREQ]
    );
    i++;
  }
  ctx.lineTo(width, height / 2);
  ctx.stroke();
};
