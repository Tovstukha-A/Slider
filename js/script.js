const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlidIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
    chengeSlide("up");
});

downBtn.addEventListener("click", () => {
    chengeSlide("down");
});

function chengeSlide(dir) {
    if (dir === "up") {
        activeSlidIndex++;
        if (activeSlidIndex === slidesCount) {
            activeSlidIndex = 0;
        }
    } else if (dir === "down") {
        activeSlidIndex--;
        if (activeSlidIndex < 0) {
            activeSlidIndex = slidesCount - 1;
        }
    }

    let height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlidIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlidIndex * height}px)`;
}