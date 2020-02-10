
const positions = [
  [0.223919, 0.308198, 0.924594],
  [-0.223919, 0.308198, 0.924594],
  [-0.223919, 0.689152, 0.689152],
  [0, -0.380954, 0.924594],
  [0.293114, 0.0952384, 0.924594],
  [0.362309, -0.117721, 0.924594],
  [-0.362309, -0.117721, 0.924594],
  [0.223919, 0.689152, 0.689152],
  [0.362309, 0.879629, 0.308198],
  [0, 0.99735, 0.0727557],
  [-0.362309, 0.879629, 0.308198],
  [-0.724617, 0, 0.689152],
  [-0.586228, 0.425919, 0.689152],
  [-0.724617, 0.616396, 0.308198],
  [-0.948536, 0.308198, 0.0727557],
  [-0.948536, -0.0727557, 0.308198],
  [-0.111959, -0.535053, 0.806873],
  [-0.223919, -0.689152, 0.689152],
  [-0.586228, -0.425919, 0.689152],
  [-0.810147, -0.498675, 0.308198],
  [-0.586228, -0.806873, 0.0727557],
  [-0.223919, -0.924594, 0.308198],
  [-0.111959, -0.960972, 0.117721],
  [0.586228, -0.425919, 0.689152],
  [0.223919, -0.689152, 0.689152],
  [0.223919, -0.924594, 0.308198],
  [0.586228, -0.806873, 0.0727557],
  [0.810147, -0.498675, 0.308198],
  [0.586228, 0.425919, 0.689152],
  [0.724617, 0, 0.689152],
  [0.948536, -0.0727557, 0.308198],
  [0.948536, 0.308198, 0.0727557],
  [0.724617, 0.616396, 0.308198],
  [0, -0.308198, -0.924594],
  [0.223919, -0.308198, -0.924594],
  [0.362309, 0.117721, -0.924594],
  [0, 0.380954, -0.924594],
  [-0.362309, 0.117721, -0.924594],
  [-0.223919, -0.308198, -0.924594],
  [-0.223919, -0.689152, -0.689152],
  [-0.293114, -0.78439, -0.498675],
  [-0.405073, -0.557535, -0.689152],
  [-0.362309, -0.879629, -0.308198],
  [0, -0.99735, -0.0727557],
  [0.362309, -0.879629, -0.308198],
  [0.223919, -0.689152, -0.689152],
  [0.223919, -0.498675, -0.806873],
  [0.586228, -0.425919, -0.689152],
  [0.724617, -0.616396, -0.308198],
  [0.948536, -0.308198, -0.0727557],
  [0.948536, 0.0727557, -0.308198],
  [0.724617, 0, -0.689152],
  [0.586228, 0.425919, -0.689152],
  [0.810147, 0.498675, -0.308198],
  [0.586228, 0.806873, -0.0727557],
  [0.223919, 0.924594, -0.308198],
  [0.223919, 0.689152, -0.689152],
  [-0.223919, 0.689152, -0.689152],
  [-0.223919, 0.924594, -0.308198],
  [-0.586228, 0.806873, -0.0727557],
  [-0.810147, 0.498675, -0.308198],
  [-0.586228, 0.425919, -0.689152],
  [-0.724617, 0, -0.689152],
  [-0.948536, 0.0727557, -0.308198],
  [-0.948536, -0.308198, -0.0727557],
  [-0.724617, -0.616396, -0.308198],
  [-0.586228, -0.425919, -0.689152],
];

const cells = [
  [1, 6, 3, 5, 4, 0],
  [29, 28, 0, 5],
  [3, 24, 23, 5],
  [1, 12, 11, 6],
  [2, 1, 0, 7],
  [9, 10, 2, 7, 8],
  [18, 6, 11],
  [13, 14, 15, 11, 12],
  [1, 2, 12],
  [12, 2, 10, 13],
  [60, 63, 14],
  [19, 18, 11, 15],
  [17, 3, 6, 18],
  [19, 64, 65, 20],
  [17, 18, 19, 20, 21],
  [22, 43, 25, 21],
  [20, 42, 43, 21],
  [3, 16, 17, 24],
  [26, 27, 23, 24, 25],
  [24, 17, 21, 25],
  [25, 43, 44, 26],
  [7, 0, 28],
  [5, 23, 29],
  [27, 49, 30],
  [29, 23, 27, 30],
  [32, 28, 29, 30, 31],
  [8, 7, 28, 32],
  [54, 8, 32],
  [51, 47, 34, 35],
  [56, 52, 35, 36],
  [61, 57, 36, 37],
  [37, 36, 35, 34, 33, 38],
  [34, 45, 39, 38],
  [41, 66, 38, 39],
  [20, 65, 42],
  [44, 43, 42, 40, 39, 45],
  [45, 46, 34, 47],
  [44, 45, 47, 48],
  [26, 44, 48],
  [49, 27, 26, 48],
  [48, 47, 51, 50, 49],
  [31, 30, 49, 50],
  [52, 53, 50, 51],
  [51, 35, 52],
  [31, 50, 53],
  [54, 32, 31, 53],
  [53, 52, 56, 55, 54],
  [9, 8, 54, 55],
  [56, 36, 57],
  [55, 56, 57, 58],
  [9, 55, 58],
  [59, 10, 9, 58],
  [13, 10, 59],
  [60, 14, 13, 59],
  [62, 63, 60, 61],
  [60, 59, 58, 57, 61],
  [37, 38, 66, 62],
  [61, 37, 62],
  [64, 15, 14, 63],
  [19, 15, 64],
  [39, 42, 65, 66],
  [65, 64, 63, 62, 66],
];

export const model = { positions, cells };
