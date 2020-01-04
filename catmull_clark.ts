import * as vec3 from 'gl-vec3';
import quadsToTris = require('gl-quads-to-tris');
import { SubdivisionManager } from './subdivision_manager';

interface VertexData {
  facePoints: number[][],
  edgeMidPoints: number[][],
}

function findFacePoint(facePositions: number[], positions: number[][]) {
  let avg = vec3.fromValues(0, 0, 0);
  facePositions.forEach(posIndex => vec3.add(avg, avg, positions[posIndex]));
  vec3.scale(avg, avg, 1.0 / facePositions.length);
  return avg;
}

function edgeKey(edge: number[]) {
  return edge.sort().toString();
}

function addEdgeFaces(facePositions: number[], [fpx, fpy, fpz]: number[], positions: number[][], edgeFacePoints: Map<string, number[][]>) {
  facePositions.forEach((posIndex, index) => {
    const edge = [posIndex, facePositions[(index + 1) % facePositions.length]];
    let _edgeFacePoints: number[][];
    if (!edgeFacePoints.has(edgeKey(edge))) {
      _edgeFacePoints = [];
    } else {
      _edgeFacePoints = edgeFacePoints.get(edgeKey(edge));
    }
    _edgeFacePoints.push(vec3.fromValues(fpx, fpy, fpz));
    edgeFacePoints.set(edgeKey(edge), _edgeFacePoints);
  })
}

function getOriginalEdgeEndpoints(edgeKey: string, positions: number[][]) {
  return edgeKey.split(',').map(Number.parseFloat).map(i => positions[i]);
}

function getEdgePoints(facePoints: number[][], endpoints: number[][]) {
  let avg = vec3.fromValues(0, 0, 0);
  const points = [...facePoints, ...endpoints];
  points.forEach(p => vec3.add(avg, avg, p));
  vec3.scale(avg, avg, 1.0 / points.length)
  return avg;
}

function defineFacePointEdges(facePositions: number[], facePoint: number[], positions: number[][], edgePoints: Map<string, number[]>) {
  let avg = vec3.fromValues(0, 0, 0);
  const newEdges = [];
  facePositions.forEach((posIndex, index) => {
    const edge = [posIndex, facePositions[(index + 1) % facePositions.length]];
    newEdges.push([facePoint, edgePoints.get(edgeKey(edge))]);
  });
  return newEdges;
}

function getEdgeMidPoint(edge: number[], positions: number[][]) {
  let avg = vec3.fromValues(0, 0, 0);
  edge.forEach(i => vec3.add(avg, avg, positions[i]));
  vec3.scale(avg, avg, 1.0 / edge.length);
  return avg;
}

function fillVertexData(facePositions: number[], facePoint: number[], positions: number[][], vertexData: Map<number, VertexData>) {
  facePositions.forEach((posIndex, index) => {
    const edge = [posIndex, facePositions[(index + 1) % facePositions.length]];
    const edgeMidPoint = getEdgeMidPoint(edge, positions);
    edge.forEach(vertIndex => {
      let vertex: VertexData;
      if (!vertexData.has(vertIndex)) {
        vertex = {
          edgeMidPoints: [],
          facePoints: [],
        };
      } else {
        vertex = vertexData.get(vertIndex)
      }
      vertex.edgeMidPoints.push(edgeMidPoint);
      vertexData.set(vertIndex, vertex);
    });

    let vertex: VertexData;
    if (!vertexData.has(posIndex)) {
      vertex = {
        edgeMidPoints: [],
        facePoints: [],
      };
    } else {
      vertex = vertexData.get(posIndex)
    }

    vertex.facePoints.push(facePoint);
    vertexData.set(posIndex, vertex);
  });
}

function getAverage(points: number[][]) {
  let avg = vec3.fromValues(0, 0, 0);
  points.forEach(point => {
    vec3.add(avg, avg, point);
  });

  vec3.scale(avg, avg, 1.0 / points.length);
  return avg;
}

function getVertexPoint(posIndex: number, positions: number[][], vertexData: VertexData) {

  const n = vertexData.facePoints.length;

  let avg = vec3.fromValues(0, 0, 0);
  const fpAverage = getAverage(vertexData.facePoints);
  vec3.add(avg, avg, fpAverage);

  const empAverage = getAverage(vertexData.edgeMidPoints);
  const empScaled = vec3.fromValues(0, 0, 0);
  vec3.scale(empScaled, empAverage, 2.0);
  vec3.add(avg, avg, empScaled);

  vec3.add(avg, avg, positions[posIndex]);
  vec3.scale(avg, avg, 1.0 / n);

  return avg;
}

function createVerticesAndCells() {

}

export function catmullClark(positions: number[][], cells: number[][]) {

  const facePoints = new Map<number, number[]>(cells.map((cell, index) => [index, findFacePoint(cell, positions)]));

  const edgeFaces = new Map<string, number[][]>();
  cells.forEach((cell, index) => addEdgeFaces(cell, facePoints.get(index), positions, edgeFaces));
  const edgePoints = new Map<string, number[]>(
    Array.from(edgeFaces.entries()).map(
      ([edgeKey, edgeFacePoints]) => [edgeKey, getEdgePoints(edgeFacePoints, getOriginalEdgeEndpoints(edgeKey, positions))]
    )
  );

  const vertexData = new Map<number, VertexData>();
  cells.forEach((cell, index) => fillVertexData(cell, facePoints.get(index), positions, vertexData));

  const newVertexPositions = new Map<number, number[]>(
    Array.from(vertexData.entries()).map(
      ([posIndex, vertData]) => [posIndex, getVertexPoint(posIndex, positions, vertData)]
    )
  );

  const subdivManager = new SubdivisionManager();

  cells.forEach((cell, index) => {
    const facePoint = facePoints.get(index);

    const newIndeces = cell.map(positionIndex => subdivManager.getIndex(newVertexPositions.get(positionIndex)));
    const facePointIndex = subdivManager.getIndex(facePoint);
    cell.forEach((positionIndex, cellPositionIndex) => {
      const secondPosIndex = cell[(cellPositionIndex + 1) % cell.length];
      const edge = [positionIndex, secondPosIndex];
      const edgePoint = edgePoints.get(edgeKey(edge));
      const edgePointIndex = subdivManager.getIndex(edgePoint);

      subdivManager.addCell([newIndeces[cellPositionIndex], edgePointIndex, facePointIndex]);
      subdivManager.addCell([edgePointIndex, newIndeces[(cellPositionIndex + 1) % cell.length], facePointIndex]);
    })
  })

  return { positions: subdivManager.getPositions(), cells: subdivManager.getCells() };
}