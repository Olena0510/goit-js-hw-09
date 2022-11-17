
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);
let intervalId = null;

function onStart() {
    refs.startBtn.setAttribute('disabled', true);
     intervalId = setInterval(() => {
        const bodyColor = getRandomHexColor()
        refs.body.style.backgroundColor = bodyColor
    }, 1000);
}

function onStop() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
