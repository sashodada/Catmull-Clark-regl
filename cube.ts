const positions = [
  [-1.0, +1.0, +1.0], [+1.0, +1.0, +1.0],
  [+1.0, -1.0, +1.0], [-1.0, -1.0, +1.0],
  [+1.0, +1.0, -1.0], [+1.0, -1.0, -1.0], 
  [-1.0, +1.0, -1.0], [-1.0, -1.0, -1.0],
]

const cells = [
  [0, 1, 2], [0, 2, 3], // positive z face.
  [5, 4, 1], [5, 1, 2], // positive x face.
  [7, 6, 4], [7, 4, 5], // negative z face.
  [3, 0, 6], [3, 6, 7], // negative x face.
  [1, 4, 6], [1, 6, 0], // top face.
  [7, 5, 2], [3, 7, 2], // bottom face
]

export const cube = { positions, cells };