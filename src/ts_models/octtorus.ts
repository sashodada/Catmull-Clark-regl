
const positions = [
  [1.5, 0.7, 0],
  [2.5, 0.9, 0],
  [0.7, 1.5, 0],
  [0.9, 2.5, 0],
  [-1.5, 0.7, 0],
  [-2.5, 0.9, 0],
  [-0.7, 1.5, 0],
  [-0.9, 2.5, 0],
  [1.5, -0.7, 0],
  [2.5, -0.9, 0],
  [0.7, -1.5, 0],
  [0.9, -2.5, 0],
  [-1.5, -0.7, 0],
  [-2.5, -0.9, 0],
  [-0.7, -1.5, 0],
  [-0.9, -2.5, 0],
  [2, 0.8, 0.5],
  [0.8, 2, 0.5],
  [-2, 0.8, 0.5],
  [-0.8, 2, 0.5],
  [2, -0.8, 0.5],
  [0.8, -2, 0.5],
  [-2, -0.8, 0.5],
  [-0.8, -2, 0.5],
  [2, 0.8, -0.5],
  [0.8, 2, -0.5],
  [-2, 0.8, -0.5],
  [-0.8, 2, -0.5],
  [2, -0.8, -0.5],
  [0.8, -2, -0.5],
  [-2, -0.8, -0.5],
  [-0.8, -2, -0.5],
];

const cells = [
  [0, 16, 17, 2],
  [2, 17, 19, 6],
  [6, 19, 18, 4],
  [4, 18, 22, 12],
  [12, 22, 23, 14],
  [14, 23, 21, 10],
  [10, 21, 20, 8],
  [8, 20, 16, 0],
  [1, 16, 20, 9],
  [9, 20, 21, 11],
  [11, 21, 23, 15],
  [15, 23, 22, 13],
  [13, 22, 18, 5],
  [5, 18, 19, 7],
  [7, 19, 17, 3],
  [3, 17, 16, 1],
  [0, 24, 28, 8],
  [8, 28, 29, 10],
  [10, 29, 31, 14],
  [14, 31, 30, 12],
  [12, 30, 26, 4],
  [4, 26, 27, 6],
  [6, 27, 25, 2],
  [2, 25, 24, 0],
  [24, 1, 9, 28],
  [28, 9, 11, 29],
  [29, 11, 15, 31],
  [31, 15, 13, 30],
  [30, 13, 5, 26],
  [26, 5, 7, 27],
  [27, 7, 3, 25],
  [25, 3, 1, 24],
];

export const model = { positions, cells };
