
const positions = [
  [0.357407, 0.357407, 0.862856],
  [-0.357407, 0.357407, 0.862856],
  [-0.357407, 0.862856, 0.357407],
  [0.357407, -0.357407, 0.862856],
  [0.862856, 0.357407, 0.357407],
  [0.357407, 0.862856, 0.357407],
  [-0.357407, 0.357407, -0.862856],
  [-0.862856, 0.357407, 0.357407],
  [-0.357407, 0.862856, -0.357407],
  [-0.357407, -0.357407, -0.862856],
  [-0.862856, 0.357407, -0.357407],
  [0.357407, 0.862856, -0.357407],
  [-0.357407, -0.357407, 0.862856],
  [-0.862856, -0.357407, -0.357407],
  [-0.357407, -0.862856, 0.357407],
  [0.862856, 0.357407, -0.357407],
  [0.862856, 0, -0.357407],
  [-0.862856, -0.357407, 0.357407],
  [0.357407, -0.862856, 0.357407],
  [0.357407, -0.357407, -0.862856],
  [0.862856, -0.357407, 0.357407],
  [0.357407, -0.862856, -0.357407],
  [0.357407, 0.357407, -0.862856],
  [0.862856, -0.357407, -0.357407],
  [-0.357407, -0.862856, -0.357407],
];

const cells = [
  [0, 1, 12, 3],
  [4, 15, 11, 5],
  [0, 4, 5],
  [11, 8, 2, 5],
  [2, 1, 0, 5],
  [2, 8, 10, 7],
  [1, 2, 7],
  [6, 10, 8],
  [6, 9, 13, 10],
  [22, 6, 8, 11],
  [14, 18, 3, 12],
  [1, 7, 17, 12],
  [12, 17, 14],
  [4, 20, 23, 16, 15],
  [7, 10, 13, 17],
  [3, 18, 20],
  [4, 0, 3, 20],
  [18, 14, 24, 21],
  [19, 9, 6, 22],
  [11, 15, 22],
  [19, 22, 15, 23],
  [21, 19, 23],
  [20, 18, 21, 23],
  [9, 19, 21, 24],
  [13, 9, 24],
  [14, 17, 13, 24],
];

export const model = { positions, cells };