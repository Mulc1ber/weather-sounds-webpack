import "./style.scss";

function NatureSoundsApp() {
  let audio = null;
  let currentSound = null;
  let isPlaying = false;

  function init() {
    const buttons = document.querySelectorAll(".buttons button");
    const volumeControl = document.getElementById("volume");

    document.body.style.backgroundImage = `url('/images/summer-bg.jpg')`;

    buttons.forEach((button) => {
      button.style.backgroundImage = `url('/images/${button.getAttribute(
        "data-image"
      )}')`;
      button.addEventListener("click", () => handleButtonClick(button));
    });

    volumeControl.addEventListener("input", () =>
      handleVolumeChange(volumeControl)
    );
  }

  function handleButtonClick(button) {
    const sound = button.getAttribute("data-sound");
    const image = button.getAttribute("data-image");

    if (currentSound === sound && isPlaying) {
      pauseAudio();
    } else {
      playAudio(sound, image);
    }
  }

  function playAudio(sound, image) {
    if (audio) {
      audio.pause();
    }

    audio = new Audio(`/sounds/${sound}.mp3`);
    audio.volume = parseFloat(document.getElementById("volume").value);
    audio.play();
    isPlaying = true;
    currentSound = sound;

    if (image) {
      document.body.style.backgroundImage = `url('/images/${image}')`;
      document.body.style.backdropFilter = "blur(10px)";
    }
  }

  function pauseAudio() {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  }

  function handleVolumeChange(volumeControl) {
    if (audio) {
      audio.volume = parseFloat(volumeControl.value);
    }
  }

  init();
}

NatureSoundsApp();
