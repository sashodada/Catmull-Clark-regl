
const positions = [
  [0, 0.47166, 0],
  [0.246229, 0.459663, -0.006919],
  [0.451282, 0.380737, -0.012681],
  [0.587984, 0.289183, -0.016522],
  [0.695863, 0.205838, -0.019554],
  [0.686805, 0.133226, -0.019299],
  [0.643983, 0.082083, -0.018096],
  [0.485869, 0.097236, -0.013653],
  [0.226464, 0.140172, -0.006364],
  [0.06341, 0.107339, -0.001782],
  [0.059293, -0.023362, -0.001666],
  [0.162231, -0.244985, -0.004559],
  [0.216582, -0.399048, -0.006086],
  [0.168819, -0.452717, -0.004744],
  [0.098821, -0.4584, -0.002777],
  [0, -0.455243, 0],
  [0.207595, 0.459663, 0.095878],
  [0.380476, 0.380737, 0.175722],
  [0.49573, 0.289183, 0.228952],
  [0.586683, 0.205838, 0.270959],
  [0.579045, 0.133226, 0.267431],
  [0.542942, 0.082083, 0.250757],
  [0.409636, 0.097236, 0.18919],
  [0.190932, 0.140172, 0.088182],
  [0.053461, 0.107339, 0.024691],
  [0.04999, -0.023362, 0.023088],
  [0.136777, -0.244985, 0.06317],
  [0.182601, -0.399048, 0.084334],
  [0.142331, -0.452717, 0.065736],
  [0.083316, -0.4584, 0.038479],
  [0.142896, 0.459663, 0.142087],
  [0.261897, 0.380737, 0.260413],
  [0.341231, 0.289183, 0.339298],
  [0.403838, 0.205838, 0.40155],
  [0.398581, 0.133226, 0.396322],
  [0.373729, 0.082083, 0.371612],
  [0.281969, 0.097236, 0.280372],
  [0.131426, 0.140172, 0.130682],
  [0.036799, 0.107339, 0.036591],
  [0.03441, -0.023362, 0.034215],
  [0.094149, -0.244985, 0.093616],
  [0.125691, -0.399048, 0.124979],
  [0.097972, -0.452717, 0.097417],
  [0.05735, -0.4584, 0.057025],
  [0.064001, 0.459663, 0.223138],
  [0.117299, 0.380737, 0.408962],
  [0.152831, 0.289183, 0.532845],
  [0.180872, 0.205838, 0.630607],
  [0.178517, 0.133226, 0.622398],
  [0.167387, 0.082083, 0.583592],
  [0.126289, 0.097236, 0.440306],
  [0.058864, 0.140172, 0.205227],
  [0.016482, 0.107339, 0.057464],
  [0.015412, -0.023362, 0.053732],
  [0.042168, -0.244985, 0.147017],
  [0.056295, -0.399048, 0.196272],
  [0.04388, -0.452717, 0.152988],
  [0.025686, -0.4584, 0.089554],
  [0, 0.459663, 0.271818],
  [0, 0.380737, 0.498182],
  [0, 0.289183, 0.649091],
  [0, 0.205838, 0.768182],
  [0, 0.133226, 0.758182],
  [0, 0.082083, 0.710909],
  [0, 0.097236, 0.536364],
  [0, 0.140172, 0.25],
  [0, 0.107339, 0.07],
  [0, -0.023362, 0.065455],
  [0, -0.244985, 0.179091],
  [0, -0.399048, 0.239091],
  [0, -0.452717, 0.186364],
  [0, -0.4584, 0.109091],
  [-0.097968, 0.459663, 0.251127],
  [-0.179554, 0.380737, 0.46026],
  [-0.233944, 0.289183, 0.599682],
  [-0.276867, 0.205838, 0.709707],
  [-0.273263, 0.133226, 0.700469],
  [-0.256225, 0.082083, 0.656794],
  [-0.193315, 0.097236, 0.495535],
  [-0.090105, 0.140172, 0.23097],
  [-0.025229, 0.107339, 0.064672],
  [-0.023591, -0.023362, 0.060472],
  [-0.064548, -0.244985, 0.165458],
  [-0.086173, -0.399048, 0.220891],
  [-0.067169, -0.452717, 0.172178],
  [-0.039318, -0.4584, 0.100787],
  [-0.161049, 0.459663, 0.180883],
  [-0.295167, 0.380737, 0.331517],
  [-0.384579, 0.289183, 0.43194],
  [-0.455139, 0.205838, 0.51119],
  [-0.449215, 0.133226, 0.504536],
  [-0.421206, 0.082083, 0.473078],
  [-0.31779, 0.097236, 0.356926],
  [-0.148122, 0.140172, 0.166364],
  [-0.041474, 0.107339, 0.046582],
  [-0.038781, -0.023362, 0.043557],
  [-0.106109, -0.244985, 0.119177],
  [-0.141659, -0.399048, 0.159104],
  [-0.110418, -0.452717, 0.124017],
  [-0.064635, -0.4584, 0.072595],
  [-0.201079, 0.459663, 0.110951],
  [-0.368533, 0.380737, 0.203349],
  [-0.480169, 0.289183, 0.264947],
  [-0.568267, 0.205838, 0.313558],
  [-0.560869, 0.133226, 0.309476],
  [-0.525899, 0.082083, 0.29018],
  [-0.396778, 0.097236, 0.218934],
  [-0.184939, 0.140172, 0.102045],
  [-0.051783, 0.107339, 0.028573],
  [-0.04842, -0.023362, 0.026717],
  [-0.132483, -0.244985, 0.073102],
  [-0.176869, -0.399048, 0.097593],
  [-0.137864, -0.452717, 0.07607],
  [-0.080701, -0.4584, 0.044529],
  [-0.215974, 0.459663, 0.020757],
  [-0.395831, 0.380737, 0.038043],
  [-0.515736, 0.289183, 0.049567],
  [-0.61036, 0.205838, 0.058661],
  [-0.602415, 0.133226, 0.057898],
  [-0.564854, 0.082083, 0.054288],
  [-0.426169, 0.097236, 0.040959],
  [-0.198638, 0.140172, 0.019091],
  [-0.055619, 0.107339, 0.005345],
  [-0.052007, -0.023362, 0.004998],
  [-0.142297, -0.244985, 0.013676],
  [-0.18997, -0.399048, 0.018258],
  [-0.148076, -0.452717, 0.014231],
  [-0.086678, -0.4584, 0.008331],
  [-0.210854, 0.459663, -0.09316],
  [-0.386447, 0.380737, -0.170741],
  [-0.50351, 0.289183, -0.222461],
  [-0.595891, 0.205838, -0.263277],
  [-0.588134, 0.133226, -0.25985],
  [-0.551463, 0.082083, -0.243648],
  [-0.416066, 0.097236, -0.183826],
  [-0.193929, 0.140172, -0.085682],
  [-0.0543, 0.107339, -0.023991],
  [-0.050774, -0.023362, -0.022433],
  [-0.138924, -0.244985, -0.061379],
  [-0.185467, -0.399048, -0.081943],
  [-0.144565, -0.452717, -0.063872],
  [-0.084624, -0.4584, -0.037388],
  [-0.181022, 0.459663, -0.192204],
  [-0.331772, 0.380737, -0.352268],
  [-0.432273, 0.289183, -0.458976],
  [-0.511583, 0.205838, -0.543186],
  [-0.504923, 0.133226, -0.536115],
  [-0.473441, 0.082083, -0.502688],
  [-0.3572, 0.097236, -0.379266],
  [-0.166492, 0.140172, -0.176777],
  [-0.046618, 0.107339, -0.049497],
  [-0.043591, -0.023362, -0.046283],
  [-0.119268, -0.244985, -0.126636],
  [-0.159226, -0.399048, -0.169063],
  [-0.124112, -0.452717, -0.131779],
  [-0.072651, -0.4584, -0.077139],
  [-0.099841, 0.459663, -0.231293],
  [-0.182987, 0.380737, -0.423907],
  [-0.238417, 0.289183, -0.552317],
  [-0.28216, 0.205838, -0.653653],
  [-0.278487, 0.133226, -0.645144],
  [-0.261123, 0.082083, -0.604919],
  [-0.197011, 0.097236, -0.456397],
  [-0.091827, 0.140172, -0.212727],
  [-0.025712, 0.107339, -0.059564],
  [-0.024042, -0.023362, -0.055696],
  [-0.065782, -0.244985, -0.15239],
  [-0.08782, -0.399048, -0.203445],
  [-0.068453, -0.452717, -0.158579],
  [-0.04007, -0.4584, -0.092826],
  [0, 0.459663, -0.236729],
  [0, 0.380737, -0.433871],
  [0, 0.289183, -0.565299],
  [0, 0.205838, -0.669017],
  [0, 0.133226, -0.660307],
  [0, 0.082083, -0.619137],
  [0, 0.097236, -0.467124],
  [0, 0.140172, -0.217727],
  [0, 0.107339, -0.060964],
  [0, -0.023362, -0.057005],
  [0, -0.244985, -0.155972],
  [0, -0.399048, -0.208226],
  [0, -0.452717, -0.162306],
  [0, -0.4584, -0.095008],
  [0.082387, 0.459663, -0.203864],
  [0.150996, 0.380737, -0.373636],
  [0.196736, 0.289183, -0.486818],
  [0.232831, 0.205838, -0.576136],
  [0.229801, 0.133226, -0.568636],
  [0.215472, 0.082083, -0.533182],
  [0.162569, 0.097236, -0.402273],
  [0.075774, 0.140172, -0.1875],
  [0.021217, 0.107339, -0.0525],
  [0.019839, -0.023362, -0.049091],
  [0.054281, -0.244985, -0.134318],
  [0.072467, -0.399048, -0.179318],
  [0.056486, -0.452717, -0.139773],
  [0.033065, -0.4584, -0.081818],
  [0.171522, 0.459663, -0.165809],
  [0.314362, 0.380737, -0.303891],
  [0.409588, 0.289183, -0.395945],
  [0.484737, 0.205838, -0.468591],
  [0.478427, 0.133226, -0.462491],
  [0.448597, 0.082083, -0.433655],
  [0.338455, 0.097236, -0.327182],
  [0.157755, 0.140172, -0.1525],
  [0.044171, 0.107339, -0.0427],
  [0.041303, -0.023362, -0.039927],
  [0.11301, -0.244985, -0.109245],
  [0.150871, -0.399048, -0.145845],
  [0.117599, -0.452717, -0.113682],
  [0.068838, -0.4584, -0.066545],
  [0.236516, 0.459663, -0.10402],
  [0.433481, 0.380737, -0.190646],
  [0.564791, 0.289183, -0.248396],
  [0.668416, 0.205838, -0.29397],
  [0.659714, 0.133226, -0.290143],
  [0.618581, 0.082083, -0.272053],
  [0.466704, 0.097236, -0.205257],
  [0.217532, 0.140172, -0.095671],
  [0.060909, 0.107339, -0.026788],
  [0.056954, -0.023362, -0.025048],
  [0.155832, -0.244985, -0.068535],
  [0.208039, -0.399048, -0.091496],
  [0.16216, -0.452717, -0.071318],
  [0.094923, -0.4584, -0.041747],
];

const cells = [
  [0, 16, 1],
  [1, 16, 17, 2],
  [2, 17, 18, 3],
  [3, 18, 19, 4],
  [4, 19, 20, 5],
  [5, 20, 21, 6],
  [6, 21, 22, 7],
  [7, 22, 23, 8],
  [8, 23, 24, 9],
  [9, 24, 25, 10],
  [10, 25, 26, 11],
  [11, 26, 27, 12],
  [12, 27, 28, 13],
  [13, 28, 29, 14],
  [14, 29, 15],
  [0, 30, 16],
  [16, 30, 31, 17],
  [17, 31, 32, 18],
  [18, 32, 33, 19],
  [19, 33, 34, 20],
  [20, 34, 35, 21],
  [21, 35, 36, 22],
  [22, 36, 37, 23],
  [23, 37, 38, 24],
  [24, 38, 39, 25],
  [25, 39, 40, 26],
  [26, 40, 41, 27],
  [27, 41, 42, 28],
  [28, 42, 43, 29],
  [29, 43, 15],
  [0, 44, 30],
  [30, 44, 45, 31],
  [31, 45, 46, 32],
  [32, 46, 47, 33],
  [33, 47, 48, 34],
  [34, 48, 49, 35],
  [35, 49, 50, 36],
  [36, 50, 51, 37],
  [37, 51, 52, 38],
  [38, 52, 53, 39],
  [39, 53, 54, 40],
  [40, 54, 55, 41],
  [41, 55, 56, 42],
  [42, 56, 57, 43],
  [43, 57, 15],
  [0, 58, 44],
  [44, 58, 59, 45],
  [45, 59, 60, 46],
  [46, 60, 61, 47],
  [47, 61, 62, 48],
  [48, 62, 63, 49],
  [49, 63, 64, 50],
  [50, 64, 65, 51],
  [51, 65, 66, 52],
  [52, 66, 67, 53],
  [53, 67, 68, 54],
  [54, 68, 69, 55],
  [55, 69, 70, 56],
  [56, 70, 71, 57],
  [57, 71, 15],
  [0, 72, 58],
  [58, 72, 73, 59],
  [59, 73, 74, 60],
  [60, 74, 75, 61],
  [61, 75, 76, 62],
  [62, 76, 77, 63],
  [63, 77, 78, 64],
  [64, 78, 79, 65],
  [65, 79, 80, 66],
  [66, 80, 81, 67],
  [67, 81, 82, 68],
  [68, 82, 83, 69],
  [69, 83, 84, 70],
  [70, 84, 85, 71],
  [71, 85, 15],
  [0, 86, 72],
  [72, 86, 87, 73],
  [73, 87, 88, 74],
  [74, 88, 89, 75],
  [75, 89, 90, 76],
  [76, 90, 91, 77],
  [77, 91, 92, 78],
  [78, 92, 93, 79],
  [79, 93, 94, 80],
  [80, 94, 95, 81],
  [81, 95, 96, 82],
  [82, 96, 97, 83],
  [83, 97, 98, 84],
  [84, 98, 99, 85],
  [85, 99, 15],
  [0, 100, 86],
  [86, 100, 101, 87],
  [87, 101, 102, 88],
  [88, 102, 103, 89],
  [89, 103, 104, 90],
  [90, 104, 105, 91],
  [91, 105, 106, 92],
  [92, 106, 107, 93],
  [93, 107, 108, 94],
  [94, 108, 109, 95],
  [95, 109, 110, 96],
  [96, 110, 111, 97],
  [97, 111, 112, 98],
  [98, 112, 113, 99],
  [99, 113, 15],
  [0, 114, 100],
  [100, 114, 115, 101],
  [101, 115, 116, 102],
  [102, 116, 117, 103],
  [103, 117, 118, 104],
  [104, 118, 119, 105],
  [105, 119, 120, 106],
  [106, 120, 121, 107],
  [107, 121, 122, 108],
  [108, 122, 123, 109],
  [109, 123, 124, 110],
  [110, 124, 125, 111],
  [111, 125, 126, 112],
  [112, 126, 127, 113],
  [113, 127, 15],
  [0, 128, 114],
  [114, 128, 129, 115],
  [115, 129, 130, 116],
  [116, 130, 131, 117],
  [117, 131, 132, 118],
  [118, 132, 133, 119],
  [119, 133, 134, 120],
  [120, 134, 135, 121],
  [121, 135, 136, 122],
  [122, 136, 137, 123],
  [123, 137, 138, 124],
  [124, 138, 139, 125],
  [125, 139, 140, 126],
  [126, 140, 141, 127],
  [127, 141, 15],
  [0, 142, 128],
  [128, 142, 143, 129],
  [129, 143, 144, 130],
  [130, 144, 145, 131],
  [131, 145, 146, 132],
  [132, 146, 147, 133],
  [133, 147, 148, 134],
  [134, 148, 149, 135],
  [135, 149, 150, 136],
  [136, 150, 151, 137],
  [137, 151, 152, 138],
  [138, 152, 153, 139],
  [139, 153, 154, 140],
  [140, 154, 155, 141],
  [141, 155, 15],
  [0, 156, 142],
  [142, 156, 157, 143],
  [143, 157, 158, 144],
  [144, 158, 159, 145],
  [145, 159, 160, 146],
  [146, 160, 161, 147],
  [147, 161, 162, 148],
  [148, 162, 163, 149],
  [149, 163, 164, 150],
  [150, 164, 165, 151],
  [151, 165, 166, 152],
  [152, 166, 167, 153],
  [153, 167, 168, 154],
  [154, 168, 169, 155],
  [155, 169, 15],
  [0, 170, 156],
  [156, 170, 171, 157],
  [157, 171, 172, 158],
  [158, 172, 173, 159],
  [159, 173, 174, 160],
  [160, 174, 175, 161],
  [161, 175, 176, 162],
  [162, 176, 177, 163],
  [163, 177, 178, 164],
  [164, 178, 179, 165],
  [165, 179, 180, 166],
  [166, 180, 181, 167],
  [167, 181, 182, 168],
  [168, 182, 183, 169],
  [169, 183, 15],
  [0, 184, 170],
  [170, 184, 185, 171],
  [171, 185, 186, 172],
  [172, 186, 187, 173],
  [173, 187, 188, 174],
  [174, 188, 189, 175],
  [175, 189, 190, 176],
  [176, 190, 191, 177],
  [177, 191, 192, 178],
  [178, 192, 193, 179],
  [179, 193, 194, 180],
  [180, 194, 195, 181],
  [181, 195, 196, 182],
  [182, 196, 197, 183],
  [183, 197, 15],
  [0, 198, 184],
  [184, 198, 199, 185],
  [185, 199, 200, 186],
  [186, 200, 201, 187],
  [187, 201, 202, 188],
  [188, 202, 203, 189],
  [189, 203, 204, 190],
  [190, 204, 205, 191],
  [191, 205, 206, 192],
  [192, 206, 207, 193],
  [193, 207, 208, 194],
  [194, 208, 209, 195],
  [195, 209, 210, 196],
  [196, 210, 211, 197],
  [197, 211, 15],
  [0, 212, 198],
  [198, 212, 213, 199],
  [199, 213, 214, 200],
  [200, 214, 215, 201],
  [201, 215, 216, 202],
  [202, 216, 217, 203],
  [203, 217, 218, 204],
  [204, 218, 219, 205],
  [205, 219, 220, 206],
  [206, 220, 221, 207],
  [207, 221, 222, 208],
  [208, 222, 223, 209],
  [209, 223, 224, 210],
  [210, 224, 225, 211],
  [211, 225, 15],
  [0, 1, 212],
  [212, 1, 2, 213],
  [213, 2, 3, 214],
  [214, 3, 4, 215],
  [215, 4, 5, 216],
  [216, 5, 6, 217],
  [217, 6, 7, 218],
  [218, 7, 8, 219],
  [219, 8, 9, 220],
  [220, 9, 10, 221],
  [221, 10, 11, 222],
  [222, 11, 12, 223],
  [223, 12, 13, 224],
  [224, 13, 14, 225],
  [225, 14, 15],
];

export const model = { positions, cells };