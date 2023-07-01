const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  // try catch statement - anything that needs to be resolved when completing call will wait until try has completed instead of throwing error
  try {
    // wait for user to select media stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // passing the media stream into video object as the source
    videoElement.srcObject = mediaStream;
    // true when loaded, when loaded meta data will play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
    console.log("whops error here:", error);
  }
}

// use button to start picture in picture
button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start picture-in-picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});
// on load
selectMediaStream();
