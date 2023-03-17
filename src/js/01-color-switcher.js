

const refs = {
  bodyEl: document.querySelector('body'), 
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
}

let generatedId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.startBtnEl.addEventListener('click', onStartGeneratedHexColor);
refs.stopBtnEl.addEventListener('click', onStopGeneratedHexolor); 

function onStartGeneratedHexColor() {
    generatedId = setInterval(() => (refs.bodyEl.style.backgroundColor = getRandomHexColor()), 1000 );
    refs.startBtnEl.disabled = true;
    refs.stopBtnEl.disabled = false;
}

function onStopGeneratedHexolor() {
    clearInterval(generatedId);
    refs.startBtnEl.disabled = false;
}