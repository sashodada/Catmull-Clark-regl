
const positions = [
  [0.168381, 0.518225, 0.838505],
  [-0.440828, 0.32028, 0.838505],
  [-0.168381, 0.518225, 0.838505],
  [-0.440828, 0.606748, 0.661458],
  [0.168381, -0.518225, 0.838505],
  [0.492861, 0.16014, 0.838505],
  [0.544894, 0, 0.838505],
  [-0.440828, -0.32028, 0.838505],
  [0.440828, 0.606748, 0.661458],
  [0.544894, 0.749982, 0.374991],
  [-0.168381, 0.981739, -0.0885233],
  [0.168381, 0.981739, -0.0885233],
  [-0.544894, 0, 0.838505],
  [-0.713275, 0.695271, 0.0885233],
  [-0.544894, 0.749982, 0.374991],
  [-0.881657, -0.286468, 0.374991],
  [-0.168381, -0.518225, 0.838505],
  [-0.713275, -0.231757, 0.661458],
  [-0.881657, -0.463514, 0.0885233],
  [-0.713275, -0.695271, -0.0885233],
  [0, -0.927028, 0.374991],
  [-0.168381, -0.981739, 0.0885233],
  [0.440828, -0.32028, 0.838505],
  [0.0841907, -0.634103, 0.749982],
  [0, -0.749982, 0.661458],
  [0.713275, -0.695271, -0.0885233],
  [0.440828, -0.893216, -0.0885233],
  [0.881657, -0.286468, 0.374991],
  [0.881657, -0.463514, 0.0885233],
  [0.440828, 0.32028, 0.838505],
  [0.713275, -0.231757, 0.661458],
  [0.985722, 0.143234, -0.0885233],
  [0.713275, 0.695271, 0.0885233],
  [0.168381, -0.518225, -0.838505],
  [0.440828, -0.32028, -0.838505],
  [-0.304605, 0.419253, -0.838505],
  [-0.544894, 0, -0.838505],
  [-0.304605, -0.419253, -0.838505],
  [-0.168381, -0.518225, -0.838505],
  [-0.544894, -0.749982, -0.374991],
  [-0.440828, -0.893216, -0.0885233],
  [0.168381, -0.981739, 0.0885233],
  [0.304605, -0.937477, 0],
  [0.544894, -0.749982, -0.374991],
  [0.440828, -0.606748, -0.661458],
  [0.985722, -0.143234, 0.0885233],
  [0.713275, 0.231757, -0.661458],
  [0.544894, 0, -0.838505],
  [0.440828, 0.32028, -0.838505],
  [0.881657, 0.286468, -0.374991],
  [0.881657, 0.374991, -0.231757],
  [0.881657, 0.463514, -0.0885233],
  [0.440828, 0.893216, 0.0885233],
  [0, 0.749982, -0.661458],
  [0.168381, 0.518225, -0.838505],
  [-0.168381, 0.518225, -0.838505],
  [0, 0.927028, -0.374991],
  [-0.440828, 0.893216, 0.0885233],
  [-0.881657, 0.463514, -0.0885233],
  [-0.881657, 0.286468, -0.374991],
  [-0.713275, 0.231757, -0.661458],
  [-0.440828, 0.32028, -0.838505],
  [-0.985722, 0.143234, -0.0885233],
  [-0.985722, -0.143234, 0.0885233],
  [-0.440828, -0.606748, -0.661458],
  [-0.440828, -0.32028, -0.838505],
];

const cells = [
  [3, 1, 2],
  [6, 5, 29, 0, 2, 1, 12, 7, 16, 4, 22],
  [52, 11, 10, 57, 14, 3, 2, 0, 8, 9],
  [57, 13, 14],
  [62, 63, 15, 17, 12, 1, 3, 14, 13, 58],
  [4, 16, 24],
  [17, 15, 18, 19, 40, 21, 20, 24, 16, 7],
  [12, 17, 7],
  [39, 40, 19],
  [41, 26, 25, 28, 27, 30, 22, 4, 23, 24, 20],
  [21, 41, 20],
  [0, 29, 8],
  [6, 22, 30],
  [32, 52, 9],
  [9, 8, 29, 6, 30, 27, 45, 31, 51, 32],
  [65, 36, 61, 55, 54, 48, 47, 34, 33, 38],
  [21, 40, 39, 64, 38, 33, 44, 43, 26, 42, 41],
  [43, 25, 26],
  [34, 44, 33],
  [27, 28, 45],
  [46, 49, 31, 45, 28, 25, 43, 44, 34, 47],
  [48, 46, 47],
  [50, 51, 31, 49],
  [52, 32, 51, 49, 46, 48, 54, 53, 56, 11],
  [56, 10, 11],
  [54, 55, 53],
  [59, 62, 58],
  [60, 59, 58, 13, 57, 10, 56, 53, 55, 35, 61],
  [36, 60, 61],
  [15, 63, 18],
  [18, 63, 62, 59, 60, 36, 65, 64, 39, 19],
  [37, 38, 64, 65],
];

export const model = { positions, cells };
