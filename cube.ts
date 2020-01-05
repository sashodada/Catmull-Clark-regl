const positions = [
  [4.0, 4.0, 4.0],
  [4.0, 4.0, -4.0],
  [4.0, -4.0, -4.0],
  [4.0, -4.0, 4.0],
  [-4.0, 4.0, 4.0],
  [-4.0, 4.0, -4.0],
  [-4.0, -4.0, -4.0],
  [-4.0, -4.0, 4.0],
];

const cells = [
  [0, 3, 2, 1],
  [1, 2, 6, 5],
  [5, 6, 7, 4],
  [0, 4, 7, 3],
  [0, 1, 5, 4],
  [6, 2, 3, 7],
];

export const cube = { positions, cells };