
const positions = [
  [-4, 0, 0],
  [-3, 0, 0],
  [-3.6, 2, 0],
  [-2.75, 2, 0],
  [-3.5, 2.5, 0],
  [-2.6875, 2.5, 0],
  [-3, 5, 0],
  [-2.5, 4, 0],
  [-1, 0, 0],
  [-2, 0, 0],
  [-1.4, 2, 0],
  [-2.25, 2, 0],
  [-1.5, 2.5, 0],
  [-2.3125, 2.5, 0],
  [-2, 5, 0],
  [-4, 0, 1],
  [-3, 0, 1],
  [-3.6, 2, 1],
  [-2.75, 2, 1],
  [-3.5, 2.5, 1],
  [-2.6875, 2.5, 1],
  [-3, 5, 1],
  [-2.5, 4, 1],
  [-1, 0, 1],
  [-2, 0, 1],
  [-1.4, 2, 1],
  [-2.25, 2, 1],
  [-1.5, 2.5, 1],
  [-2.3125, 2.5, 1],
  [-2, 5, 1],
  [0, 0, 0],
  [3, 0, 0],
  [3, 3, 0],
  [1, 3, 0],
  [1, 4, 0],
  [3, 4, 0],
  [3, 5, 0],
  [0, 5, 0],
  [0, 2, 0],
  [2, 2, 0],
  [2, 1, 0],
  [0, 1, 0],
  [0, 0, 1],
  [3, 0, 1],
  [3, 3, 1],
  [1, 3, 1],
  [1, 4, 1],
  [3, 4, 1],
  [3, 5, 1],
  [0, 5, 1],
  [0, 2, 1],
  [2, 2, 1],
  [2, 1, 1],
  [0, 1, 1],
  [5, 0, 0],
  [6, 0, 0],
  [7, 1, 0],
  [7, 5, 0],
  [6, 5, 0],
  [6, 1, 0],
  [5, 1, 0],
  [5, 5, 0],
  [4, 5, 0],
  [4, 1, 0],
  [5, 0, 1],
  [6, 0, 1],
  [7, 1, 1],
  [7, 5, 1],
  [6, 5, 1],
  [6, 1, 1],
  [5, 1, 1],
  [5, 5, 1],
  [4, 5, 1],
  [4, 1, 1],
];

const cells = [
  [2, 3, 1, 0],
  [4, 5, 3, 2],
  [6, 7, 5, 4],
  [11, 10, 8, 9],
  [13, 12, 10, 11],
  [7, 14, 12, 13],
  [5, 13, 11, 3],
  [6, 14, 7],
  [15, 16, 18, 17],
  [17, 18, 20, 19],
  [19, 20, 22, 21],
  [24, 23, 25, 26],
  [26, 25, 27, 28],
  [28, 27, 29, 22],
  [18, 26, 28, 20],
  [22, 29, 21],
  [0, 15, 17, 2],
  [2, 17, 19, 4],
  [4, 19, 21, 6],
  [6, 21, 29, 14],
  [14, 29, 27, 12],
  [12, 27, 25, 10],
  [10, 25, 23, 8],
  [8, 23, 24, 9],
  [9, 24, 26, 11],
  [11, 26, 18, 3],
  [3, 18, 16, 1],
  [1, 16, 15, 0],
  [7, 22, 20, 5],
  [5, 20, 28, 13],
  [13, 28, 22, 7],
  [41, 40, 31, 30],
  [40, 39, 32, 31],
  [39, 38, 33, 32],
  [38, 37, 34, 33],
  [37, 36, 35, 34],
  [42, 43, 52, 53],
  [43, 44, 51, 52],
  [44, 45, 50, 51],
  [45, 46, 49, 50],
  [46, 47, 48, 49],
  [30, 31, 43, 42],
  [31, 32, 44, 43],
  [32, 33, 45, 44],
  [33, 34, 46, 45],
  [34, 35, 47, 46],
  [35, 36, 48, 47],
  [36, 37, 49, 48],
  [37, 38, 50, 49],
  [38, 39, 51, 50],
  [39, 40, 52, 51],
  [40, 41, 53, 52],
  [41, 30, 42, 53],
  [63, 60, 59, 56, 55, 54],
  [58, 57, 56, 59],
  [62, 61, 60, 63],
  [64, 65, 66, 69, 70, 73],
  [66, 67, 68, 69],
  [70, 71, 72, 73],
  [54, 55, 65, 64],
  [55, 56, 66, 65],
  [56, 57, 67, 66],
  [57, 58, 68, 67],
  [58, 59, 69, 68],
  [59, 60, 70, 69],
  [60, 61, 71, 70],
  [61, 62, 72, 71],
  [62, 63, 73, 72],
  [63, 54, 64, 73],
];

export const model = { positions, cells };
