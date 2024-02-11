import * as React from "react";
import sincerity from "./audio/sincerity.wav";
import {useTrack} from "../../hooks";
import {drawBars} from "../../visuals/bars";

export const Sincerity: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const timeRef = React.useRef<number>(0);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const [freqs, setFreqs] = React.useState<Uint8Array | null>(null);
  const sourceRef = React.useRef<MediaElementAudioSourceNode | null>(null);
  const audio = useTrack(sincerity);

  React.useEffect(() => {
    draw();
  }, [freqs]);

  const draw = React.useCallback(() => {
    if (!canvasRef.current || !analyserRef.current || !freqs) return;

    analyserRef.current!.getByteFrequencyData(freqs);

    const ctx = canvasRef.current.getContext("2d")!;

    const width = window.innerWidth || 0;
    const height = window.innerHeight || 0;

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    ctx.clearRect(0, 0, width, height);

    drawBars(ctx, window.innerWidth, window.innerHeight, freqs);

    requestAnimationFrame(draw);
  }, [freqs]);

  const listener = (e: KeyboardEvent) => {
    if (e.key !== " ") return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    if (sourceRef.current) {
      audio.play();
      return;
    }
    const ctx = new AudioContext();
    analyserRef.current = ctx.createAnalyser();
    sourceRef.current = ctx.createMediaElementSource(audio);
    sourceRef.current.connect(analyserRef.current);
    sourceRef.current.connect(ctx.destination);
    analyserRef.current.connect(ctx.destination);
    analyserRef.current.fftSize = 2048;
    const bufferLength = analyserRef.current.frequencyBinCount;
    setFreqs(new Uint8Array(bufferLength));
    audio.play();
  };

  React.useEffect(() => {
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
};
