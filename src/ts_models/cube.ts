
const positions = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 1],
];

const cells = [
  [0, 1, 3, 2],
  [2, 3, 7, 6],
  [4, 6, 7, 5],
  [0, 4, 5, 1],
  [1, 5, 7, 3],
  [0, 2, 6, 4],
];

export const model = { positions, cells };