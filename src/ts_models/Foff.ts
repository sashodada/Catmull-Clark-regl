
const positions = [
  [49.35863,12.04094,-6.318298],
  [43.82401,22.90324,-6.318298],
  [35.20364,31.52361,-6.318298],
  [22.06698,37.41844,-6.318298],
  [12.3004,38.96531,-6.318298],
  [2.533808,37.41843,-6.318298],
  [-10.60284,31.52359,-6.318298],
  [-19.22322,22.90323,-6.318298],
  [-24.75783,12.04093,-6.318298],
  [-26.66493,-0.000015,-6.318298],
  [-24.75783,-12.04096,-6.318298],
  [-19.22322,-22.90325,-6.318298],
  [-10.60284,-31.52362,-6.318298],
  [2.533811,-37.41846,-6.318298],
  [12.3004,-38.96533,-6.318298],
  [22.06698,-37.41846,-6.318298],
  [35.20363,-31.52362,-6.318298],
  [43.82399,-22.90325,-6.318298],
  [49.35861,-12.04096,-6.318298],
  [51.26571,-0.000015,-6.318298],
  [49.35863,12.04094,8.045282],
  [43.82401,22.90324,8.045282],
  [35.20364,31.52361,8.045282],
  [22.06698,37.41844,8.045282],
  [12.3004,38.96531,8.045282],
  [2.533808,37.41843,8.045282],
  [-10.60284,31.52359,8.045282],
  [-19.22322,22.90323,8.045282],
  [-24.75783,12.04093,8.045282],
  [-26.66493,-0.000015,8.045282],
  [-24.75783,-12.04096,8.045282],
  [-19.22322,-22.90325,8.045282],
  [-10.60284,-31.52362,8.045282],
  [2.533811,-37.41846,8.045282],
  [12.3004,-38.96533,8.045282],
  [22.06698,-37.41846,8.045282],
  [35.20363,-31.52362,8.045282],
  [43.82399,-22.90325,8.045282],
  [49.35861,-12.04096,8.045282],
  [51.26571,-0.000015,8.045282],
  [65.699,17.35024,-6.318298],
  [57.72396,33.00212,-6.318298],
  [57.72396,33.00212,8.045282],
  [65.699,17.35024,8.045282],
  [45.30254,45.42355,-6.318298],
  [45.30254,45.42355,8.045282],
  [29.65065,53.39857,-6.318298],
  [29.65065,53.39857,8.045282],
  [12.3004,56.14658,-6.318298],
  [12.3004,56.14658,8.045282],
  [-5.049861,53.39857,-6.318298],
  [-5.049861,53.39857,8.045282],
  [-20.70174,45.42352,-6.318298],
  [-20.70174,45.42352,8.045282],
  [-33.12315,33.00212,-6.318298],
  [-33.12315,33.00212,8.045282],
  [-41.09818,17.35023,-6.318298],
  [-41.09818,17.35023,8.045282],
  [-43.84619,-0.000018,-6.318298],
  [-43.84619,-0.000018,8.045282],
  [-41.09818,-17.35026,-6.318298],
  [-41.09818,-17.35026,8.045282],
  [-33.12315,-33.00216,-6.318298],
  [-33.12315,-33.00216,8.045282],
  [-20.70174,-45.42356,-6.318298],
  [-20.70174,-45.42356,8.045282],
  [-5.049841,-53.39859,-6.318298],
  [-5.049841,-53.39859,8.045282],
  [12.3004,-56.14658,-6.318298],
  [12.3004,-56.14658,8.045282],
  [29.65065,-53.39859,-6.318298],
  [29.65065,-53.39859,8.045282],
  [45.30252,-45.42356,-6.318298],
  [45.30252,-45.42356,8.045282],
  [57.72393,-33.00214,-6.318298],
  [57.72393,-33.00214,8.045282],
  [65.69896,-17.35026,-6.318298],
  [65.69896,-17.35026,8.045282],
  [68.44696,-0.000018,-6.318298],
  [68.44696,-0.000018,8.045282],
  [2.557743,-54.60351,8.045282],
  [2.557743,-54.60351,-6.318298],
  [22.04305,-54.6035,-6.318298],
  [22.04306,-54.6035,8.045282],
  [2.557736,54.6035,8.045282],
  [2.557723,54.6035,-6.318298],
  [22.04307,54.6035,-6.318298],
  [22.04305,54.6035,8.045282],
  [2.437768,-78.33467,8.045282],
  [2.437768,-78.33467,-6.318298],
  [12.3004,-78.3347,-6.318298],
  [12.3004,-78.3347,8.045282],
  [22.16303,-78.33467,-6.318298],
  [22.16304,-78.33467,8.045282],
  [12.3004,78.3347,-6.318298],
  [2.437751,78.33467,-6.318298],
  [2.437761,78.33467,8.045282],
  [12.3004,78.3347,8.045282],
  [22.16304,78.33467,-6.318298],
  [22.16303,78.33467,8.045282],
  [-45.92488,-66.92842,0.081688],
  [-50.42268,-64.19868,0.081688],
  [-48.42102,-61.01524,-13.42922],
  [-43.92505,-63.74792,-13.40536],
  [-42.26799,-51.22946,-23.79947],
  [-37.78761,-53.98689,-23.73332],
  [-34.05298,-38.16428,-26.39577],
  [-29.59473,-40.95696,-26.31297],
  [-24.32744,-22.69679,-23.76263],
  [-19.88498,-25.51455,-23.68195],
  [-9.995596,0.536984,-8.921627],
  [-5.442329,-2.095383,-8.779587],
  [-9.951672,0.55371,9.038031],
  [-5.520688,-2.271575,9.29504],
  [-23.84286,-21.92615,23.16646],
  [-19.40671,-24.75392,23.0898],
  [-32.84348,-36.24071,26.39578],
  [-28.40101,-39.05845,26.31511],
  [-40.56623,-48.52298,25.24003],
  [-36.10802,-51.31567,25.15722],
  [-47.30426,-60.59713,15.48491],
  [-43.66927,-62.97492,15.30069],
  [-51.6729,-59.08804,0.081688],
  [-49.75294,-56.03451,-12.38038],
  [-44.28337,-47.33572,-20.89109],
  [-37.04304,-35.82068,-22.75588],
  [-28.01026,-21.45496,-20.2163],
  [-14.92573,-0.472081,-7.386284],
  [-14.78525,-0.272233,7.131193],
  [-27.80324,-21.12569,19.7965],
  [-36.52629,-34.99885,22.84946],
  [-43.5563,-46.17939,21.60012],
  [-48.4294,-56.21622,13.48795],
  [-48.94318,-54.59023,0.081688],
  [-47.14056,-51.72336,-10.87324],
  [-42.65313,-44.58652,-16.71187],
  [-36.8134,-35.29902,-17.52551],
  [-28.77606,-22.51645,-15.12036],
  [-17.34475,-4.531463,-5.072948],
  [-17.18999,-4.265568,4.691484],
  [-28.96785,-22.82147,14.95402],
  [-37.2921,-36.06035,17.75352],
  [-43.32667,-45.65774,16.36975],
  [-46.38557,-52.39846,10.47957],
  [-43.83254,-53.34001,0.081688],
  [-42.11425,-50.60723,-9.790657],
  [-38.33222,-44.59232,-13.70992],
  [-33.49856,-36.90485,-13.76852],
  [-26.17628,-25.25948,-11.45996],
  [-15.83559,-9.263262,-3.336739],
  [-15.75723,-9.087057,3.148056],
  [-26.65453,-26.0201,11.47565],
  [-34.69231,-38.80338,14.09312],
  [-40.01183,-47.26355,12.61276],
  [-42.37006,-51.38023,8.222061],
  [-39.33473,-56.06974,0.081688],
  [-37.6183,-53.33992,-9.766796],
  [-33.85183,-47.34975,-13.64376],
  [-29.04032,-39.69753,-13.68572],
  [-21.73379,-28.07721,-11.37929],
  [-11.28232,-11.89561,-3.194714],
  [-11.32628,-11.91235,3.405052],
  [-22.21835,-28.84786,11.39899],
  [-30.24981,-41.6211,14.01246],
  [-35.55359,-50.05622,12.52997],
  [-38.73507,-53.75803,8.037834],
  [-38.08451,-61.18037,0.081688],
  [-36.28638,-58.32065,-10.81563],
  [-31.83646,-51.2435,-16.55214],
  [-26.05025,-42.04112,-17.32561],
  [-18.05096,-29.31905,-14.92561],
  [-6.352169,-10.88655,-4.730053],
  [-6.492683,-11.08641,5.311916],
  [-18.258,-29.64833,14.76896],
  [-26.567,-42.86296,17.55879],
  [-32.56353,-52.39984,16.16987],
  [-37.60991,-58.13895,10.03482],
  [-40.81422,-65.6782,0.081688],
  [-38.89872,-62.63177,-12.32278],
  [-33.46671,-53.99269,-20.73138],
  [-26.2799,-42.5628,-22.556],
  [-17.28517,-28.25756,-20.02155],
  [-3.933191,-6.827176,-7.043392],
  [-4.087942,-7.09308,7.751625],
  [-17.09338,-27.95255,19.61143],
  [-25.80121,-41.80148,22.65471],
  [-32.79317,-52.92149,21.40024],
  [-39.65372,-61.9567,13.04319]
];

const cells = [
  [40,43,42,41],
  [41,42,45,44],
  [44,45,47,46],
  [46,47,87,86],
  [84,51,50,85],
  [50,51,53,52],
  [52,53,55,54],
  [54,55,57,56],
  [56,57,59,58],
  [58,59,61,60],
  [60,61,63,62],
  [62,63,65,64],
  [64,65,67,66],
  [88,91,90,89],
  [90,91,93,92],
  [70,71,73,72],
  [72,73,75,74],
  [74,75,77,76],
  [76,77,79,78],
  [78,79,43,40],
  [0,1,21,20],
  [1,2,22,21],
  [2,3,23,22],
  [5,6,26,25],
  [6,7,27,26],
  [7,8,28,27],
  [8,9,29,28],
  [9,10,30,29],
  [10,11,31,30],
  [11,12,32,31],
  [12,13,33,32],
  [15,16,36,35],
  [16,17,37,36],
  [17,18,38,37],
  [18,19,39,38],
  [19,0,20,39],
  [0,40,41,1],
  [21,42,43,20],
  [1,41,44,2],
  [22,45,42,21],
  [2,44,46,3],
  [23,47,45,22],
  [3,46,86],
  [87,47,23],
  [85,50,5],
  [25,51,84],
  [5,50,52,6],
  [26,53,51,25],
  [6,52,54,7],
  [27,55,53,26],
  [7,54,56,8],
  [28,57,55,27],
  [8,56,58,9],
  [29,59,57,28],
  [9,58,60,10],
  [30,61,59,29],
  [10,60,62,11],
  [31,63,61,30],
  [11,62,64,12],
  [32,65,63,31],
  [12,64,66,13],
  [33,67,65,32],
  [13,81,68,14],
  [34,69,80,33],
  [14,68,82,15],
  [35,83,69,34],
  [15,70,72,16],
  [36,73,71,35],
  [16,72,74,17],
  [37,75,73,36],
  [17,74,76,18],
  [38,77,75,37],
  [18,76,78,19],
  [39,79,77,38],
  [19,78,40,0],
  [20,43,79,39],
  [4,14,15,3],
  [3,15,35,23],
  [23,35,34,24],
  [24,34,33,25],
  [25,33,13,5],
  [5,13,14,4],
  [80,67,33],
  [66,67,80,81],
  [13,66,81],
  [82,70,15],
  [83,71,70,82],
  [35,71,83],
  [25,84,49,24],
  [94,97,96,95],
  [4,48,85,5],
  [3,86,48,4],
  [99,97,94,98],
  [24,49,87,23],
  [80,88,89,81],
  [81,89,90,68],
  [69,91,88,80],
  [68,90,92,82],
  [82,92,93,83],
  [83,93,91,69],
  [48,94,95,85],
  [85,95,96,84],
  [84,96,97,49],
  [87,99,98,86],
  [86,98,94,48],
  [49,97,99,87],
  [100,103,102,101],
  [103,105,104,102],
  [105,107,106,104],
  [107,109,108,106],
  [109,111,110,108],
  [111,113,112,110],
  [113,115,114,112],
  [115,117,116,114],
  [117,119,118,116],
  [119,121,120,118],
  [121,100,101,120],
  [101,102,123,122],
  [102,104,124,123],
  [104,106,125,124],
  [106,108,126,125],
  [108,110,127,126],
  [110,112,128,127],
  [112,114,129,128],
  [114,116,130,129],
  [116,118,131,130],
  [118,120,132,131],
  [120,101,122,132],
  [122,123,134,133],
  [123,124,135,134],
  [124,125,136,135],
  [125,126,137,136],
  [126,127,138,137],
  [127,128,139,138],
  [128,129,140,139],
  [129,130,141,140],
  [130,131,142,141],
  [131,132,143,142],
  [132,122,133,143],
  [133,134,145,144],
  [134,135,146,145],
  [135,136,147,146],
  [136,137,148,147],
  [137,138,149,148],
  [138,139,150,149],
  [139,140,151,150],
  [140,141,152,151],
  [141,142,153,152],
  [142,143,154,153],
  [143,133,144,154],
  [144,145,156,155],
  [145,146,157,156],
  [146,147,158,157],
  [147,148,159,158],
  [148,149,160,159],
  [149,150,161,160],
  [150,151,162,161],
  [151,152,163,162],
  [152,153,164,163],
  [153,154,165,164],
  [154,144,155,165],
  [155,156,167,166],
  [156,157,168,167],
  [157,158,169,168],
  [158,159,170,169],
  [159,160,171,170],
  [160,161,172,171],
  [161,162,173,172],
  [162,163,174,173],
  [163,164,175,174],
  [164,165,176,175],
  [165,155,166,176],
  [166,167,178,177],
  [167,168,179,178],
  [168,169,180,179],
  [169,170,181,180],
  [170,171,182,181],
  [171,172,183,182],
  [172,173,184,183],
  [173,174,185,184],
  [174,175,186,185],
  [175,176,187,186],
  [176,166,177,187],
  [177,178,103,100],
  [178,179,105,103],
  [179,180,107,105],
  [180,181,109,107],
  [181,182,111,109],
  [182,183,113,111],
  [183,184,115,113],
  [184,185,117,115],
  [185,186,119,117],
  [186,187,121,119],
  [187,177,100,121]
];

export const model = { positions, cells };
