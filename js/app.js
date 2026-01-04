// hero icons sound effect
let music = document.getElementById("sound");
function playmusic() {
  music.play();
}
function pausemusic() {
  music.pause();
  music.currentTime = 0;
}

// skills progress bar
let no = document.querySelectorAll("number");
let spans = document.querySelectorAll(".progress .progress-bar ");
spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});

// navbar
document.getElementById("closenav").onclick = function () {
  document.getElementById("nav").style =
    "transform:translateX(400px); opacity:0;display:none;";
};
document.getElementById("opennav").onclick = function () {
  document.getElementById("nav").style =
    "transform:translateX(0px); opacity:1;display:flex;";
};
