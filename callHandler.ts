import REGL = require('regl');
import reglCamera = require('regl-camera');
import { catmullClark } from './catmull_clark';
import { flatMap } from 'lodash'
import { polisToTris } from './util';
import { vertexShaderCode, fragmentShaderCode } from './shader_code';
import calculateNormals = require('angle-normals');
import { addSyntheticLeadingComment } from 'typescript';

export class CallHandler {

  private regl: REGL.Regl;
  private camera: any;
  private draw: () => void;
  private drawFunc: REGL.Cancellable;
  private wireframe: boolean;
  subdivisionCounter = 0;

  private obj: { positions: number[][], cells: number[][] };
  polygonCount: number;
  vertexCount: number;
  
  constructor(private positions: number[][], private cells: number[][]) {
    this.regl = REGL();
    this.camera = reglCamera(this.regl, {
        center: [0, 0, 0],
        distance: 25,
    });

    this.obj = { positions: this.positions, cells: this.cells };

    this.initRegl(this.positions, this.cells);
  }

  handleToggleWireframe() {
    this.drawFunc.cancel();
    this.wireframe = !this.wireframe;
  
    this.initRegl(this.obj.positions, this.obj.cells);
  }

  handleUpshift() {
    this.drawFunc.cancel();
    this.obj = catmullClark(this.obj.positions, this.obj.cells);
    this.subdivisionCounter++;
  
    this.initRegl(this.obj.positions, this.obj.cells);
  }

  handleReset() {
    this.drawFunc.cancel();
    this.wireframe = false;
    this.obj = { positions: this.positions, cells: this.cells };
    this.subdivisionCounter = 0;

    this.initRegl(this.positions, this.cells);
  }

  private initRegl(positions: number[][], cells: number[][]) {

    if (!this.wireframe) {
      cells = flatMap(cells, polisToTris);
    }

    this.polygonCount = cells.length;
    this.vertexCount = positions.length;

    const normals = calculateNormals(cells, positions);
    this.draw = this.regl({
      vert: vertexShaderCode,
      frag: fragmentShaderCode,

      attributes: {
        position: positions,
        normal: normals,
      },

      primitive: this.wireframe ? 'lines' : 'triangles',

      elements: cells
    });
    this.drawFunc = this.regl.frame(() => {
      this.regl.clear({ color: [0.6, 0.6, 1, 1] });
      this.camera(this.draw);
    });
  }
}