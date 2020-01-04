import { catmullClark } from './catmull_clark';

let subdivCounter = 0;

function initButtons() {

  const body = document.querySelector('body');

  const menuContainer = document.createElement('div');
  menuContainer.style.position = 'absolute';
  body.appendChild(menuContainer);

  const subdivideButton = document.createElement('button');
  subdivideButton.textContent = 'Subdivide';
  subdivideButton.onclick = () => {
    subdivCounter++;
    subdivideButton.disabled = subdivCounter > 2;
    console.log(subdivCounter);
    // TODO: call Catmull-Clark
  }

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.onclick = () => {
    subdivCounter = 0;
    subdivideButton.disabled = false;
    console.log(subdivCounter);
    // TODO: call Catmull-Clark
  }

  menuContainer.appendChild(resetButton);
  menuContainer.appendChild(subdivideButton);
}

export function initUserInterface() {
  window.onload = initButtons;
}