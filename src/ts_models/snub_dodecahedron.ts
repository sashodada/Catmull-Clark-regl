
const positions = [
  [0.544149, -0.494938, 0.795558],
  [-0.194436, -0.976275, 0.427849],
  [-0.302562, -0.670461, 0.795558],
  [0.839268, -0.068253, 0.681868],
  [-0.868409, -0.600296, 0.243894],
  [-0.108126, -1.07458, -0.086901],
  [-0.416538, -0.90411, -0.427849],
  [0.868409, 0.486606, -0.427849],
  [0.302562, 1.01141, -0.243894],
  [0.32426, -0.7771, -0.681868],
  [-0.32426, 0.262351, 1],
  [0.638865, 0.364572, 0.795558],
  [-0.7191, -0.438092, 0.681868],
  [0.416538, -0.021651, 1],
  [0.194436, -0.819283, 0.681868],
  [0.108126, -0.402842, 1],
  [-0.349712, -0.227319, 1],
  [0.349712, -0.996087, -0.243894],
  [-0.544148, -0.932911, 0.086901],
  [-0.868409, 0.600296, -0.243894],
  [0.149309, -0.38946, -1],
  [0.638865, -0.364572, -0.795558],
  [0.544149, 0.494938, -0.795558],
  [-0.302562, 0.670461, -0.795558],
  [0.839268, 0.068253, -0.681868],
  [0.194436, 0.819283, -0.681868],
  [0.108126, 0.402842, -1],
  [-0.7191, 0.438092, -0.681868],
  [-0.149309, -0.7191, -0.795558],
  [0.416538, 0.021651, -1],
  [-0.839268, -0.638865, -0.243894],
  [-0.988577, 0.116766, -0.427849],
  [-1.0554, 0.22923, 0.086901],
  [-0.544148, 0.932911, -0.086901],
  [-0.839268, 0.638865, 0.243894],
  [-0.149309, 0.720255, 0.795558],
  [0.149309, 0.38946, 1],
  [-0.638865, 0.548527, 0.681868],
  [-0.731143, 0.080569, 0.795558],
  [0.731142, 0.675536, 0.427849],
  [-0.108126, 1.07458, 0.086901],
  [0.720255, 0.805802, -0.086901],
  [0.988577, -0.434898, -0.086901],
  [-0.988577, -0.116766, 0.427849],
  [-1.0554, -0.227319, -0.086901],
  [0.988577, 0.434898, 0.086901],
  [1.0554, -0.024789, 0.243894],
  [0.720255, -0.805802, 0.086901],
  [0.32426, 0.7771, 0.681868],
  [0.868409, -0.486606, 0.427849],
  [0.302562, -1.01141, 0.243894],
  [-0.416538, 0.90411, 0.427849],
  [-0.349712, 0.22923, -1],
  [-0.32426, -0.262351, -1],
  [-0.731143, -0.080569, -0.795558],
  [-0.638865, -0.548527, -0.681868],
  [-0.194436, 0.976275, -0.427849],
  [0.731142, -0.675536, -0.427849],
  [0.349712, 0.996087, 0.243894],
  [1.0554, 0.024789, -0.243894],
];

const cells = [
  [16, 15, 13, 36, 10],
  [18, 1, 2, 12, 4],
  [51, 35, 48, 58, 40],
  [39, 11, 3, 46, 45],
  [47, 49, 0, 14, 50],
  [43, 38, 37, 34, 32],
  [26, 29, 20, 53, 52],
  [33, 56, 23, 27, 19],
  [9, 17, 5, 6, 28],
  [59, 42, 57, 21, 24],
  [22, 25, 8, 41, 7],
  [31, 54, 55, 30, 44],
  [10, 35, 37],
  [36, 11, 48],
  [13, 0, 3],
  [15, 2, 14],
  [16, 38, 12],
  [51, 33, 34],
  [39, 41, 58],
  [49, 42, 46],
  [1, 5, 50],
  [43, 44, 4],
  [40, 8, 56],
  [45, 59, 7],
  [47, 17, 57],
  [18, 30, 6],
  [32, 19, 31],
  [53, 28, 55],
  [20, 21, 9],
  [29, 22, 24],
  [26, 23, 25],
  [52, 54, 27],
  [10, 36, 35],
  [36, 13, 11],
  [13, 15, 0],
  [15, 16, 2],
  [16, 10, 38],
  [48, 35, 36],
  [3, 11, 13],
  [14, 0, 15],
  [12, 2, 16],
  [37, 38, 10],
  [35, 51, 37],
  [11, 39, 48],
  [0, 49, 3],
  [2, 1, 14],
  [38, 43, 12],
  [51, 40, 33],
  [39, 45, 41],
  [49, 47, 42],
  [1, 18, 5],
  [43, 32, 44],
  [40, 58, 8],
  [45, 46, 59],
  [47, 50, 17],
  [18, 4, 30],
  [32, 34, 19],
  [58, 48, 39],
  [46, 3, 49],
  [50, 14, 1],
  [4, 12, 43],
  [34, 37, 51],
  [53, 20, 28],
  [20, 29, 21],
  [29, 26, 22],
  [26, 52, 23],
  [52, 53, 54],
  [9, 28, 20],
  [24, 21, 29],
  [25, 22, 26],
  [27, 23, 52],
  [55, 54, 53],
  [28, 6, 55],
  [21, 57, 9],
  [22, 7, 24],
  [23, 56, 25],
  [54, 31, 27],
  [6, 5, 18],
  [57, 42, 47],
  [7, 41, 45],
  [56, 33, 40],
  [31, 44, 32],
  [5, 17, 50],
  [42, 59, 46],
  [41, 8, 58],
  [33, 19, 34],
  [44, 30, 4],
  [17, 9, 57],
  [59, 24, 7],
  [8, 25, 56],
  [19, 27, 31],
  [30, 55, 6],
];

export const model = { positions, cells };
