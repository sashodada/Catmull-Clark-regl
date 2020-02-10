
const positions = [
  [0, 1, 0],
  [0, 0, 0],
  [0.5, 0, 0],
  [0.475528, 0, 0.154508],
  [0.404508, 0, 0.293893],
  [0.293893, 0, 0.404508],
  [0.154508, 0, 0.475528],
  [0, 0, 0.5],
  [-0.154508, 0, 0.475528],
  [-0.293893, 0, 0.404508],
  [-0.404508, 0, 0.293893],
  [-0.475528, 0, 0.154508],
  [-0.5, 0, 0],
  [-0.475528, 0, -0.154508],
  [-0.404508, 0, -0.293893],
  [-0.293893, 0, -0.404508],
  [-0.154508, 0, -0.475528],
  [0, 0, -0.5],
  [0.154508, 0, -0.475528],
  [0.293893, 0, -0.404508],
  [0.404508, 0, -0.293893],
  [0.475528, 0, -0.154508],
];

const cells = [
  [2, 0, 3],
  [3, 1, 2],
  [3, 0, 4],
  [4, 1, 3],
  [4, 0, 5],
  [5, 1, 4],
  [5, 0, 6],
  [6, 1, 5],
  [6, 0, 7],
  [7, 1, 6],
  [7, 0, 8],
  [8, 1, 7],
  [8, 0, 9],
  [9, 1, 8],
  [9, 0, 10],
  [10, 1, 9],
  [10, 0, 11],
  [11, 1, 10],
  [11, 0, 12],
  [12, 1, 11],
  [12, 0, 13],
  [13, 1, 12],
  [13, 0, 14],
  [14, 1, 13],
  [14, 0, 15],
  [15, 1, 14],
  [15, 0, 16],
  [16, 1, 15],
  [16, 0, 17],
  [17, 1, 16],
  [17, 0, 18],
  [18, 1, 17],
  [18, 0, 19],
  [19, 1, 18],
  [19, 0, 20],
  [20, 1, 19],
  [20, 0, 21],
  [21, 1, 20],
  [21, 0, 2],
  [2, 1, 21],
];

export const model = { positions, cells };