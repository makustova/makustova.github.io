export type DrawVisual = ({
  ctx,
  width,
  height,
  freqs,
  accentColor,
}: {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  freqs: Uint8Array;
  accentColor: string;
}) => void;
