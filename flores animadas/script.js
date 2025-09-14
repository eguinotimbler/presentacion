document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  const signature = document.querySelector(".my-name");
  const presentation = document.querySelector("#presentation");
  const contactButton = document.querySelector("#contact-button");
  const backgroundMusic = document.querySelector("#background-music");
  const clickToStart = document.querySelector("#click-to-start");

  document.body.addEventListener("click", () => {
    clickToStart.classList.add("hidden");
    setTimeout(() => {
      flower.style.display = "inherit";
      word.style.display = "none";
      signature.style.display = "none";
      presentation.style.display = "block";
      contactButton.style.display = "inline-block";
      backgroundMusic.play().catch(error => {
        console.log("Error al reproducir el audio: ", error);
      });
    }, 2500);
  }, { once: true });
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);
