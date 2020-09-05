const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    //   This is where the fun beigns
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log('OOPs Error Here:', err);
  }
}

button.addEventListener('click', async () => {
  // Disble button when we click
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //   Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
