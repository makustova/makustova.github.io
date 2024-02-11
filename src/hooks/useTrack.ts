export const useTrack = (src: string) => {
  const audio = new Audio(src);
  audio.volume = 1;
  audio.loop = true;
  audio.controls = true;
  audio.crossOrigin = "anonymous";
  audio.preload = "auto";

  // audio.autoplay = true;

  // audio.addEventListener("canplay", () => {
  //   console.log("canplay");
  // });

  // audio.addEventListener("canplaythrough", () => {
  //   console.log("canplaythrough");
  // });

  // audio.addEventListener("play", () => {
  //   console.log("play");
  // });

  // audio.addEventListener("playing", () => {
  //   console.log("playing");
  // });

  // audio.addEventListener("ended", () => {
  //   console.log("ended");
  // });

  // audio.addEventListener("pause", () => {
  //   console.log("pause");
  // });

  // audio.addEventListener("waiting", () => {
  //   console.log("waiting");
  // });

  // audio.addEventListener("seeking", () => {
  //   console.log("seeking");
  // });

  // audio.addEventListener("seeked", () => {
  //   console.log("seeked");
  // });

  // audio.addEventListener("stalled", () => {
  //   console.log("stalled");
  // });

  // audio.addEventListener("suspend", () => {
  //   console.log("suspend");
  // });

  // audio.addEventListener("abort", () => {
  //   console.log("abort");
  // });

  // audio.addEventListener("error", () => {
  //   console.log("error");
  // });

  // audio.addEventListener("loadedmetadata", () => {
  //   console.log("loadedmetadata");
  // });

  // audio.addEventListener("loadeddata", () => {
  //   console.log("loadeddata");
  // });

  // audio.addEventListener("progress", () => {
  //   console.log("progress");
  // });

  // audio.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");
  // });

  // audio.addEventListener("volumechange", () => {
  //   console.log("volumechange");
  // });

  // audio.addEventListener("durationchange", () => {
  //   console.log("durationchange");
  // });

  return audio;
};
