import {countBpm} from "./bassboosted/bpm.js";

const audio = document.getElementById('audio')

const submitButton = document.getElementById('submit');

let audioSource;
let context;

submitButton.onclick = () => {
  const input = document.getElementById('audio-input');
  const blob = input.files[0]
  const blobURL = window.URL.createObjectURL(blob);
  audio.setAttribute('src', blobURL)
  audio.play()
  context = new AudioContext();

  console.log(audioSource)
}

const bassboostedButton = document.getElementById('bassboosted');

const addLowpass = () => {
  const filter = context.createBiquadFilter();
  filter.type = "lowpass"; // lowshelf
  filter.frequency.value = 150;
  filter.Q.value = 1;
  filter.connect(context.destination);
  audioSource.connect(filter);
}

bassboostedButton.onclick = () => {
  // countBpm(audioSource);
  audioSource = context.createMediaElementSource(audio);
  for (let i=0; i<20; i++) {
    addLowpass()
  }
}

const animate = () => {
  requestAnimationFrame( animate );
  // console.log(1)
}

animate();