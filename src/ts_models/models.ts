import { model as Apple } from './Apple';
import { model as Sword01 } from './Sword01';
import { model as asu } from './asu';
import { model as boxcube } from './boxcube';
import { model as boxtorus } from './boxtorus';
import { model as concave } from './concave';
import { model as cone } from './cone';
import { model as cross } from './cross';
import { model as cube } from './cube';
import { model as cuboctahedron } from './cuboctahedron';
import { model as dodecahedron } from './dodecahedron';
import { model as dragon } from './dragon';
import { model as epcot } from './epcot';
import { model as goblet } from './goblet';
import { model as head } from './head';
import { model as heart } from './heart';
import { model as helix2 } from './helix2';
import { model as helm } from './helm';
import { model as house } from './house';
import { model as icosahedron } from './icosahedron';
import { model as icosidodecahedron } from './icosidodecahedron';
import { model as king } from './king';
import { model as klingon } from './klingon';
import { model as mushroom } from './mushroom';
import { model as octahedron } from './octahedron';
import { model as octtorus } from './octtorus';
import { model as pear } from './pear';
import { model as rhombicosidodecahedron } from './rhombicosidodecahedron';
import { model as rhombicuboctahedron } from './rhombicuboctahedron';
import { model as rhombitruncated_cubeoctahedron } from './rhombitruncated_cubeoctahedron';
import { model as rhombitruncated_icosidodecahedron } from './rhombitruncated_icosidodecahedron';
import { model as seashell } from './seashell';
import { model as snub_cube } from './snub_cube';
import { model as snub_dodecahedron } from './snub_dodecahedron';
import { model as space_shuttle } from './space_shuttle';
import { model as space_station } from './space_station';
import { model as teapot } from './teapot';
import { model as tetrahedron } from './tetrahedron';
import { model as triangle } from './triangle';
import { model as truncated_cube } from './truncated_cube';
import { model as truncated_dodecahedron } from './truncated_dodecahedron';
import { model as truncated_icosahedron } from './truncated_icosahedron';
import { model as truncated_octahedron } from './truncated_octahedron';
import { model as truncated_tetrahedron } from './truncated_tetrahedron';
import { model as volks } from './volks';
import { model as x29_plane } from './x29_plane';

export const models = {
  Apple,
  Sword01: {
    cells: Sword01.cells,
    positions: Sword01.positions.map(([x, y, z]) => [x / 100, y / 100, z / 100]),
  },
  asu,
  boxcube,
  boxtorus,
  concave,
  cone,
  cross,
  cube,
  cuboctahedron,
  dodecahedron,
  dragon,
  epcot,
  goblet,
  head,
  heart,
  helix2,
  helm,
  house,
  icosahedron,
  icosidodecahedron,
  king: {
    cells: king.cells,
    positions: king.positions.map(([x, y, z]) => [x / 100, y / 100, z / 100]),
  },
  klingon,
  mushroom,
  octahedron,
  octtorus,
  pear,
  rhombicosidodecahedron,
  rhombicuboctahedron,
  rhombitruncated_cubeoctahedron,
  rhombitruncated_icosidodecahedron,
  seashell,
  snub_cube,
  snub_dodecahedron,
  space_shuttle,
  space_station,
  teapot,
  tetrahedron,
  triangle,
  truncated_cube,
  truncated_dodecahedron,
  truncated_icosahedron,
  truncated_octahedron,
  truncated_tetrahedron,
  volks,
  x29_plane,
};
