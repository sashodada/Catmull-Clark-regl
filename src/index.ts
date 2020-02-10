import { cube } from './cube';
import { CallHandler } from './callHandler';
import { files } from './files';
import { models } from './ts_models/models';
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

  const vertCounter = document.createElement('p');
  vertCounter.textContent = `${handler.vertexCount} vertices`;

  const wireframeButton = document.createElement('button');
  wireframeButton.disabled = true;
  wireframeButton.textContent = 'Toggle wireframe mode';
  wireframeButton.onclick = () => {
    handler.handleToggleWireframe();
    polyCounter.textContent = `${handler.polygonCount} triangles`;
    vertCounter.textContent = `${handler.vertexCount} vertices`;
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

  const figureSelect = document.createElement('select');
  files.forEach(file => {
    const opt = document.createElement('option');
    opt.value = file;
    opt.innerHTML = file;
    figureSelect.appendChild(opt);
  });

  figureSelect.onchange = () => {
    handler.hotswapModel(models[figureSelect.value]);
    polyCounter.textContent = `${handler.polygonCount} triangles`;
    vertCounter.textContent = `${handler.vertexCount} vertices`;
    wireframeButton.disabled = true;
    subdivisionCounter.textContent = `Figure swapped`;
  };

  const selectDiv = document.createElement('div');
  selectDiv.append(figureSelect)
  menuContainer.appendChild(resetButton);
  menuContainer.appendChild(subdivideButton);
  menuContainer.append(subdivisionCounter);
  menuContainer.append(polyCounter);
  menuContainer.append(vertCounter);
  menuContainer.append(wireframeButton);
  menuContainer.append(selectDiv);
}

window.onload = initUI;