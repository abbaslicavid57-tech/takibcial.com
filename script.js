const clickSound = document.getElementById("clickSound");

document.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

function showPlatform(id) {
  document.querySelectorAll(".services").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function order(text) {
  const phone = "994709006777";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
