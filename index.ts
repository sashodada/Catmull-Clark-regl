import { cube } from './cube';
import { CallHandler } from './callHandler';

const handler = new CallHandler(cube.positions, cube.cells);

function initUI() {

  const body = document.querySelector('body');

  const menuContainer = document.createElement('div');
  menuContainer.style.position = 'absolute';
  body.appendChild(menuContainer);

  const subdivisionCounter = document.createElement('p');
  subdivisionCounter.textContent = `No subdivisions`;

  const polyCounter = document.createElement('p');
  polyCounter.textContent = `${handler.polygonCount} triangles`;

  const subdivideButton = document.createElement('button');
  subdivideButton.textContent = 'Subdivide';
  subdivideButton.onclick = () => {
    if (handler.subdivisionCounter > 4) {
      alert('Too much polygons, cannot render properly!');
      return;
    }
    handler.handleUpshift();
    subdivisionCounter.textContent = `Subdivisions: ${handler.subdivisionCounter}`;
    polyCounter.textContent = `${handler.polygonCount} triangles`;
  }

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.onclick = () => {
    handler.handleReset();
    subdivisionCounter.textContent = `Subdivision restarted`;
    polyCounter.textContent = `${handler.polygonCount} triangles`;
  }

  const breakLine = document.createElement('br');

  menuContainer.appendChild(resetButton);
  menuContainer.appendChild(subdivideButton);
  menuContainer.append(breakLine);
  menuContainer.append(subdivisionCounter);
  menuContainer.append(breakLine);
  menuContainer.append(polyCounter);
}

window.onload = initUI;