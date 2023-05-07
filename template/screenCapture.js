const videoElement = document.getElementById('video');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const statusMessage = document.getElementById('status');


let stream;

startButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(mediaStream => {
      stream = mediaStream;
      videoElement.srcObject = stream;
      videoElement.play();
      startButton.disabled = true;
      stopButton.disabled = false;
      statusMessage.style.display = 'block';
    })
    .catch(error => {
      console.error('Unable to access the camera.', error);
    });
});
document.getElementById("final").innerHTML = "Hai";
document.getElementById("final").style.color = "white";
stopButton.addEventListener('click', () => {
  if (stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });
    videoElement.srcObject = null;
    startButton.disabled = false;
    stopButton.disabled = true;
    statusMessage.style.display = 'none';
  }
});
