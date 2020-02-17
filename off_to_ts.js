const fs = require('fs');

const content = fs.readFileSync('Foff.off').toString().split('\r\n');
console.log(content);

const [ vertices, cells ] = content[1].split(' ').map(s => Number.parseInt(s));
console.log(vertices, cells);

content.splice(0, 2);

const vertexBuffer = [];
const cellBuffer = [];

for (let i = 0; i < vertices; ++i) {
  vertexBuffer.push(content[i].split(' ').map(s => Number.parseFloat(s)));
}

for (let i = vertices; i < vertices + cells; ++i) {
  const cell = [];
  const cellContent = content[i].split(' ').map(s => Number.parseInt(s));

  for (let j = 1; j <= cellContent[0]; ++j) {
    cell.push(cellContent[j]);
  }
  cellBuffer.push(cell);
}

console.log(cellBuffer);

const modelFileContent = `
const positions = [
  ${vertexBuffer.map(s => JSON.stringify(s)).join(',\r\n  ')}
];

const cells = [
  ${cellBuffer.map(s => JSON.stringify(s)).join(',\r\n  ')}
];

export const model = { positions, cells };
`;

fs.writeFileSync('Foff.ts', modelFileContent);
