
export function polisToTris(cell: number[]) {
  let triCells: number[][] = [];
  for (let i = 1; i + 1 < cell.length; ++i) {
    const el = [cell[0], cell[i], cell[i + 1]];
    triCells.push(el);
  }

  return triCells;
}