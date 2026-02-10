const spinSound = new Audio("sounds/spin.mp3");
const clickSound = new Audio("sounds/click.mp3");

function spinWheel() {
    spinSound.currentTime = 0;
    spinSound.play();
    // buraya spin çarx fırlanma kodun gələ bilər
}

document.querySelectorAll(".service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
