import {BORDER_FREQ, DRAW_EVERY_NTH_BAR} from "./constants";
import {DrawVisual} from "./types";

export const drawBars: DrawVisual = ({
  ctx,
  width,
  height,
  freqs,
  accentColor,
}) => {
  ctx.lineWidth = 5;
  ctx.lineCap = "butt";
  ctx.shadowBlur = 10;
  ctx.beginPath();

  let i = 0;

  while (i <= BORDER_FREQ) {
    if (i % DRAW_EVERY_NTH_BAR === 1) {
      ctx.fillStyle = accentColor;
      ctx.shadowColor = accentColor;
      ctx.fillRect((width / BORDER_FREQ) * i, 0, 1, freqs[i - 1]);
      ctx.fillRect(
        (width / BORDER_FREQ) * i,
        height - freqs[BORDER_FREQ - i],
        1,
        height
      );
    }
    i++;
  }
};
