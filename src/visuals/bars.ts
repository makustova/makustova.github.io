import {BORDER_FREQ} from "../constants";
import {DrawVisual} from "./types";

export const drawBars: DrawVisual = ({
  ctx,
  width,
  height,
  freqs,
  accentColor,
}) => {
  const drawEveryNth = 5;
  ctx.lineWidth = 5;
  ctx.lineCap = "butt";
  ctx.shadowBlur = 10;
  ctx.beginPath();

  let i = 0;

  while (i <= BORDER_FREQ) {
    if (i % drawEveryNth === 1) {
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
