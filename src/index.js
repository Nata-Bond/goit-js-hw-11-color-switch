import css from "./css/style.css";

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let changeColors = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeTheme = () => {
  refs.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

function startChangeColors() {
  changeColors = setInterval(changeTheme, 1000);
}

function stopChangeColors() {
  clearInterval(changeColors);
}

refs.start.addEventListener("click", () => {
  refs.start.disabled = true;
  startChangeColors();
});

refs.stop.addEventListener("click", () => {
  refs.start.disabled = false;
  stopChangeColors();
});
