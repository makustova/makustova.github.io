import Track from "./track.js";
import drawLines from './visuals/lines.js';
import drawCircle from './visuals/circle.js'
import drawBars from './visuals/bars.js'
import drawDust from './visuals/dust.js'
import drawGlare from './visuals/glare.js'
import {animateAccentColor, initParticles} from './helpers.js'

export const run2d = () => {
  const canvas = document.createElement('canvas')

  const width = window.innerWidth || 0
  const height = window.innerHeight || 0

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d')

  animateAccentColor(0)

  initParticles(window.innerWidth, window.innerHeight)

  const visualizers = [
    drawDust,
    drawLines,
    drawGlare,
    drawCircle,
    drawBars,
  ]

  for (const visualization of visualizers) {
    visualization.apply({ctx, width, height, centerX: width / 2, centerY: height / 2, freqs: new Array(512).fill(0)});
  }

  async function run () {
    const track = new Track('./audio/issues-mix.wav');

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      const width = window.innerWidth || 0
      const height = window.innerHeight || 0

      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height)

      for (const visualization of visualizers) {
        visualization.apply({ctx, width, height, centerX: width / 2, centerY: height / 2, freqs: track.getByteFrequencyData()});
      }
    };

    // track.initControls();

    renderFrame();
  }

  document.body.appendChild(canvas);

  run()
}
