import {useRef} from "react";

export const useTrack = (src: string) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));

  const audio = audioRef.current;
  audio.volume = 1;
  audio.loop = true;
  audio.controls = true;
  audio.crossOrigin = "anonymous";

  return audio;
};
