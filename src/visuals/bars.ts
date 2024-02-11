import {BORDER_FREQ} from "../constants";

export const drawBars = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  freqs: Uint8Array
) => {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const drawEveryNth = 5;
  ctx.lineWidth = 5;
  ctx.lineCap = "butt";
  ctx.shadowBlur = 10;
  ctx.globalAlpha = 1;
  ctx.beginPath();

  let i = 0;

  while (i <= BORDER_FREQ) {
    if (i % drawEveryNth === 1) {
      // ctx.fillStyle = window.accentColor
      // ctx.shadowColor = window.accentColor
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
