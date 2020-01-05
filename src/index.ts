import { cube } from './cube';
import bunny = require('bunny');
import teapot = require('teapot');
import { CallHandler } from './callHandler';

const handler = new CallHandler(cube.positions, cube.cells);
// const handler = new CallHandler(teapot.positions, teapot.cells);

function initUI() {

  const body = document.querySelector('body');

  const menuContainer = document.createElement('div');
  menuContainer.style.position = 'absolute';
  body.appendChild(menuContainer);

  const subdivisionCounter = document.createElement('p');
  subdivisionCounter.textContent = `No subdivisions`;

  const polyCounter = document.createElement('p');
  polyCounter.textContent = `${handler.polygonCount} triangles`;

  const vertCounter = document.createElement('p');
  vertCounter.textContent = `${handler.vertexCount} vertices`;

  const wireframeButton = document.createElement('button');
  wireframeButton.disabled = true;
  wireframeButton.textContent = 'Toggle wireframe mode';
  wireframeButton.onclick = () => {
    handler.handleToggleWireframe();
  }

  const subdivideButton = document.createElement('button');
  subdivideButton.textContent = 'Subdivide';
  subdivideButton.onclick = () => {
    if (handler.subdivisionCounter > 5) {
      alert('Too much polygons, cannot render properly!');
      return;
    }
    handler.handleUpshift();
    wireframeButton.disabled = false;
    subdivisionCounter.textContent = `Subdivisions: ${handler.subdivisionCounter}`;
    polyCounter.textContent = `${handler.polygonCount} triangles`;
    vertCounter.textContent = `${handler.vertexCount} vertices`;
  }

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.onclick = () => {
    handler.handleReset();
    wireframeButton.disabled = true;
    subdivisionCounter.textContent = `Subdivision restarted`;
    polyCounter.textContent = `${handler.polygonCount} triangles`;
    vertCounter.textContent = `${handler.vertexCount} vertices`;
  }

  menuContainer.appendChild(resetButton);
  menuContainer.appendChild(subdivideButton);
  menuContainer.append(subdivisionCounter);
  menuContainer.append(polyCounter);
  menuContainer.append(vertCounter);
  menuContainer.append(wireframeButton);
}

window.onload = initUI;