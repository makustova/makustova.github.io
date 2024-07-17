const dotsX = 100;
const dotsY = 100;

export const draw = (x: number, y: number) => {
  const dots = new Array(dotsX).fill(new Array(dotsY).fill(1));

  const renderFrame = () => {
    requestAnimationFrame(renderFrame);

    const canvas = document.querySelector("canvas");
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let linesFromAngle = 0;



    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();
    ctx.closePath();
  }

  renderFrame();
}