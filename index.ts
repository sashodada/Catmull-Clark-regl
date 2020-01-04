import * as REGL from 'regl';
import * as reglCamera from 'regl-camera';
import * as calculateNormals from 'angle-normals';
import { catmullClark } from './catmull_clark';
import { initUserInterface } from './ui';
import { cube } from './cube';
import { vertexShaderCode, fragmentShaderCode } from './shader_code';
import { pyramid } from './pyramid';

const regl = REGL();
const camera = reglCamera(regl, {
    center: [0, 0, 0],
    distance: 10,
});

// let obj = cube;
let obj = pyramid;
// obj = catmullClark(obj.positions, obj.cells)
const { positions, cells } = obj;

const normals = calculateNormals(cells, positions);

const draw = regl({
  vert: vertexShaderCode,
  frag: fragmentShaderCode,

  attributes: {
    position: positions,
    normal: normals,
  },

  elements: cells,
});

regl.frame(() => {
  regl.clear({ color: [1, 0.7, 0.7, 1] });
  camera(draw);
});

 initUserInterface();