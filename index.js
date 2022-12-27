const submitButton = document.getElementById('submit');

submitButton.onclick = () => {
  const input = document.getElementById('audio-input');
  const blob = input.files[0]
  const blobURL = window.URL.createObjectURL(blob);
  document.getElementById('audio').setAttribute('src', blobURL)

  document.getElementById('audio').play()
}