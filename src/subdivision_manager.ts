export class SubdivisionManager {

  private indices = new Map<string, number>();
  private vertices: number[][] = [];
  private faces: number[][] = [];
  private vertexCounter = 0;

  constructor() {}

  getKey(vertex: number[]) {
    return vertex.toString();
  }

  getIndex(vertexData: {newPosition: number[], newIndex: number}) {
    const { newIndex, newPosition } = vertexData;
    if (newIndex !== null) {
      return newIndex;
    }
    const key = this.getKey(newPosition);
    const index = this.indices.get(key);
    if (index) {
      return index;
    }

    this.indices.set(key, this.vertexCounter);
    this.vertices[this.vertexCounter] = newPosition;
    vertexData.newIndex = this.vertexCounter;
    return this.vertexCounter++;
  }

  addCell(cell: number[]) {
    this.faces.push(cell);
  }

  getCells() {
    return this.faces;
  }

  getPositions() {
    return this.vertices;
  }
}