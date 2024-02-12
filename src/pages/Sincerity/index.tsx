import * as React from "react";
import sincerity from "./audio/sincerity.mp3";
import {useTrack} from "../../hooks";
import {
  drawBars,
  drawCircle,
  drawFlare,
  drawLines,
  drawDust,
  initParticles,
} from "./visuals";
import {PALETTE} from "./visuals/constants";

export const Sincerity: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const timeRef = React.useRef<number>(0);
  const playPromiseRef = React.useRef<Promise<void> | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const freqsRef = React.useRef<Uint8Array | null>(null);
  const sourceRef = React.useRef<MediaElementAudioSourceNode | null>(null);
  // const audio = useTrack("https://ccrma.stanford.edu/~jos/mp3/gtr-nylon22.mp3");
  const audio = useTrack(sincerity);

  const draw = React.useCallback(() => {
    if (!canvasRef.current || !analyserRef.current || !freqsRef.current) return;

    analyserRef.current!.getByteFrequencyData(freqsRef.current);

    const ctx = canvasRef.current.getContext("2d")!;

    const width = window.innerWidth || 0;
    const height = window.innerHeight || 0;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    ctx.fillStyle = PALETTE.light;
    ctx.fillRect(0, 0, width, height);

    const visuals = [drawDust, drawFlare, drawBars, drawLines, drawCircle];

    visuals.forEach(visual => {
      visual({
        ctx,
        width: window.innerWidth,
        height: window.innerHeight,
        freqs: freqsRef.current!,
        accentColor: "hsl(" + timeRef.current / 3 + ", 100%, 45%)",
      });
    });

    requestAnimationFrame(draw);

    timeRef.current++;
  }, []);

  const listener = (e: KeyboardEvent) => {
    if (e.key !== " ") return;
    const ctx = new AudioContext();

    if (playPromiseRef.current) {
      if (audio.paused) {
        playPromiseRef.current = audio.play();
        return;
      }
      playPromiseRef.current.then(() => {
        audio.pause();
      });
      return;
    }

    analyserRef.current = ctx.createAnalyser();
    sourceRef.current = ctx.createMediaElementSource(audio);
    sourceRef.current.connect(analyserRef.current);
    sourceRef.current.connect(ctx.destination);
    analyserRef.current.connect(ctx.destination);
    analyserRef.current.fftSize = 2048;
    const bufferLength = analyserRef.current.frequencyBinCount;
    freqsRef.current = new Uint8Array(bufferLength);
    playPromiseRef.current = audio.play();

    draw();
  };

  React.useEffect(() => {
    window.addEventListener("keydown", listener);
    initParticles(window.innerWidth, window.innerHeight);
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
