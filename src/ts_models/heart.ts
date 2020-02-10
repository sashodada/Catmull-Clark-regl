
const positions = [
  [0, 1.75, -0.75],
  [0, 1.8175000000000001, -0.6540000000000001],
  [0, 1.8700000000000006, -0.5220000000000001],
  [0, 1.9074999999999993, -0.3629999999999999],
  [0, 1.9300000000000002, -0.18599999999999994],
  [0, 1.9375, 0],
  [0, 1.9300000000000002, 0.18599999999999994],
  [0, 1.9075, 0.36299999999999993],
  [0, 1.87, 0.5220000000000001],
  [0, 1.8175, 0.6540000000000001],
  [0, 1.75, 0.75],
  [0, 1.4887500000000002, -0.81725],
  [0.33534, 1.8477825, -0.7029040000000001],
  [0.59616, 2.1270300000000004, -0.555822],
  [0.7824599999999999, 2.3264924999999996, -0.3841879999999999],
  [0.89424, 2.4461700000000004, -0.19618599999999997],
  [0.9315, 2.4860625, 0],
  [0.89424, 2.4461700000000004, 0.19618599999999997],
  [0.78246, 2.3264925000000005, 0.3841879999999999],
  [0.59616, 2.12703, 0.555822],
  [0.33533999999999997, 1.8477824999999999, 0.7029040000000001],
  [0, 1.4887500000000002, 0.81725],
  [0, 1.1600000000000004, -0.8680000000000002],
  [0.6091200000000001, 1.7129600000000005, -0.7394720000000002],
  [1.08288, 2.143040000000001, -0.5808960000000003],
  [1.4212799999999999, 2.45024, -0.39978400000000003],
  [1.6243200000000002, 2.6345600000000005, -0.203648],
  [1.6920000000000002, 2.6960000000000006, 0],
  [1.6243200000000002, 2.6345600000000005, 0.203648],
  [1.4212800000000003, 2.450240000000001, 0.399784],
  [1.0828799999999998, 2.14304, 0.5808960000000003],
  [0.6091199999999999, 1.7129600000000003, 0.7394720000000002],
  [0, 1.1600000000000004, 0.8680000000000002],
  [0, 0.7712499999999999, -0.9007499999999999],
  [0.81648, 1.4322775, -0.762288],
  [1.4515200000000001, 1.9464100000000002, -0.5960340000000001],
  [1.9051199999999993, 2.313647499999999, -0.4089359999999998],
  [2.1772799999999997, 2.5339899999999993, -0.20794199999999996],
  [2.268, 2.6074374999999996, 0],
  [2.1772799999999997, 2.5339899999999993, 0.20794199999999996],
  [1.90512, 2.3136475, 0.40893599999999986],
  [1.4515199999999997, 1.9464099999999998, 0.5960340000000001],
  [0.8164799999999997, 1.4322774999999996, 0.762288],
  [0, 0.7712499999999999, 0.9007499999999999],
  [0, 0.32999999999999996, -0.9140000000000001],
  [0.9525600000000001, 1.02498, -0.7699360000000002],
  [1.6934400000000003, 1.56552, -0.6000480000000002],
  [2.2226399999999993, 1.9516199999999997, -0.41079199999999993],
  [2.5401599999999998, 2.18328, -0.20862399999999998],
  [2.646, 2.2605, 0],
  [2.5401599999999998, 2.18328, 0.20862399999999998],
  [2.2226399999999997, 1.9516200000000001, 0.41079199999999993],
  [1.6934399999999996, 1.5655199999999996, 0.6000480000000002],
  [0.9525599999999997, 1.0249799999999998, 0.7699360000000002],
  [0, 0.32999999999999996, 0.9140000000000001],
  [0, -0.15625, -0.90625],
  [1.0125, 0.5103125000000002, -0.7610000000000001],
  [1.8000000000000003, 1.02875, -0.5917500000000002],
  [2.3625, 1.3990624999999999, -0.4044999999999999],
  [2.7, 1.62125, -0.20524999999999993],
  [2.8125, 1.6953125, 0],
  [2.7, 1.62125, 0.20524999999999993],
  [2.3625000000000003, 1.3990625000000003, 0.4044999999999999],
  [1.7999999999999996, 1.0287499999999998, 0.5917500000000002],
  [1.0124999999999997, 0.5103125, 0.7610000000000001],
  [0, -0.15625, 0.90625],
  [0, -0.6799999999999999, -0.876],
  [0.9914400000000001, -0.09247999999999987, -0.734064],
  [1.7625600000000001, 0.36448000000000025, -0.5699520000000001],
  [2.3133599999999994, 0.6908800000000004, -0.3892079999999999],
  [2.64384, 0.8867200000000004, -0.19737599999999988],
  [2.7539999999999996, 0.9520000000000004, 0],
  [2.64384, 0.8867200000000004, 0.19737599999999988],
  [2.3133600000000003, 0.6908800000000004, 0.3892079999999999],
  [1.7625599999999997, 0.36448000000000014, 0.5699520000000001],
  [0.9914399999999999, -0.09247999999999998, 0.734064],
  [0, -0.6799999999999999, 0.876],
  [0, -1.2337499999999995, -0.82175],
  [0.8845200000000001, -0.7641524999999993, -0.687712],
  [1.57248, -0.3989099999999994, -0.533466],
  [2.0638799999999997, -0.1380224999999993, -0.36406399999999994],
  [2.35872, 0.018510000000000665, -0.1845579999999999],
  [2.457, 0.07068750000000068, 0],
  [2.35872, 0.018510000000000665, 0.1845579999999999],
  [2.06388, -0.13802249999999924, 0.36406399999999994],
  [1.5724799999999994, -0.39890999999999954, 0.533466],
  [0.8845199999999998, -0.7641524999999995, 0.6877119999999999],
  [0, -1.2337499999999995, 0.82175],
  [0, -1.8100000000000007, -0.7419999999999999],
  [0.6868799999999999, -1.4854600000000007, -0.620528],
  [1.22112, -1.2330400000000008, -0.48110400000000003],
  [1.6027199999999995, -1.0527400000000005, -0.32821599999999984],
  [1.83168, -0.9445600000000005, -0.16635199999999994],
  [1.9079999999999997, -0.9085000000000005, 0],
  [1.83168, -0.9445600000000005, 0.16635199999999994],
  [1.6027199999999997, -1.0527400000000005, 0.3282159999999999],
  [1.2211199999999995, -1.2330400000000008, 0.48110400000000003],
  [0.6868799999999997, -1.4854600000000007, 0.620528],
  [0, -1.8100000000000007, 0.7419999999999999],
  [0, -2.4012500000000006, -0.63525],
  [0.39365999999999995, -2.237157500000001, -0.5310960000000001],
  [0.69984, -2.109530000000001, -0.41167800000000004],
  [0.9185399999999997, -2.0183675, -0.28081199999999995],
  [1.0497599999999998, -1.9636700000000005, -0.14231399999999997],
  [1.0934999999999997, -1.9454375000000004, 0],
  [1.0497599999999998, -1.9636700000000005, 0.14231399999999997],
  [0.9185399999999999, -2.0183675000000005, 0.28081199999999995],
  [0.6998399999999998, -2.1095300000000003, 0.41167800000000004],
  [0.39365999999999984, -2.2371575000000004, 0.5310960000000001],
  [0, -2.4012500000000006, 0.63525],
  [0, -3, -0.5],
  [0, -3, -0.41800000000000004],
  [0, -3.0000000000000004, -0.32400000000000007],
  [0, -2.9999999999999996, -0.22099999999999995],
  [0, -3, -0.112],
  [0, -3, 0],
  [0, -3, 0.112],
  [0, -3, 0.22099999999999997],
  [0, -3, 0.32400000000000007],
  [0, -3, 0.418],
  [0, -3, 0.5],
  [0, 1.8175000000000001, 0.6540000000000001],
  [0, 1.8700000000000006, 0.5220000000000001],
  [0, 1.9074999999999993, 0.3629999999999999],
  [0, 1.9075, -0.36299999999999993],
  [0, 1.87, -0.5220000000000001],
  [0, 1.8175, -0.6540000000000001],
  [-0.33534, 1.8477825, 0.7029040000000001],
  [-0.59616, 2.1270300000000004, 0.555822],
  [-0.7824599999999999, 2.3264924999999996, 0.3841879999999999],
  [-0.89424, 2.4461700000000004, 0.19618599999999997],
  [-0.9315, 2.4860625, 0],
  [-0.89424, 2.4461700000000004, -0.19618599999999997],
  [-0.78246, 2.3264925000000005, -0.3841879999999999],
  [-0.59616, 2.12703, -0.555822],
  [-0.33533999999999997, 1.8477824999999999, -0.7029040000000001],
  [-0.6091200000000001, 1.7129600000000005, 0.7394720000000002],
  [-1.08288, 2.143040000000001, 0.5808960000000003],
  [-1.4212799999999999, 2.45024, 0.39978400000000003],
  [-1.6243200000000002, 2.6345600000000005, 0.203648],
  [-1.6920000000000002, 2.6960000000000006, 0],
  [-1.6243200000000002, 2.6345600000000005, -0.203648],
  [-1.4212800000000003, 2.450240000000001, -0.399784],
  [-1.0828799999999998, 2.14304, -0.5808960000000003],
  [-0.6091199999999999, 1.7129600000000003, -0.7394720000000002],
  [-0.81648, 1.4322775, 0.762288],
  [-1.4515200000000001, 1.9464100000000002, 0.5960340000000001],
  [-1.9051199999999993, 2.313647499999999, 0.4089359999999998],
  [-2.1772799999999997, 2.5339899999999993, 0.20794199999999996],
  [-2.268, 2.6074374999999996, 0],
  [-2.1772799999999997, 2.5339899999999993, -0.20794199999999996],
  [-1.90512, 2.3136475, -0.40893599999999986],
  [-1.4515199999999997, 1.9464099999999998, -0.5960340000000001],
  [-0.8164799999999997, 1.4322774999999996, -0.762288],
  [-0.9525600000000001, 1.02498, 0.7699360000000002],
  [-1.6934400000000003, 1.56552, 0.6000480000000002],
  [-2.2226399999999993, 1.9516199999999997, 0.41079199999999993],
  [-2.5401599999999998, 2.18328, 0.20862399999999998],
  [-2.646, 2.2605, 0],
  [-2.5401599999999998, 2.18328, -0.20862399999999998],
  [-2.2226399999999997, 1.9516200000000001, -0.41079199999999993],
  [-1.6934399999999996, 1.5655199999999996, -0.6000480000000002],
  [-0.9525599999999997, 1.0249799999999998, -0.7699360000000002],
  [-1.0125, 0.5103125000000002, 0.7610000000000001],
  [-1.8000000000000003, 1.02875, 0.5917500000000002],
  [-2.3625, 1.3990624999999999, 0.4044999999999999],
  [-2.7, 1.62125, 0.20524999999999993],
  [-2.8125, 1.6953125, 0],
  [-2.7, 1.62125, -0.20524999999999993],
  [-2.3625000000000003, 1.3990625000000003, -0.4044999999999999],
  [-1.7999999999999996, 1.0287499999999998, -0.5917500000000002],
  [-1.0124999999999997, 0.5103125, -0.7610000000000001],
  [-0.9914400000000001, -0.09247999999999987, 0.734064],
  [-1.7625600000000001, 0.36448000000000025, 0.5699520000000001],
  [-2.3133599999999994, 0.6908800000000004, 0.3892079999999999],
  [-2.64384, 0.8867200000000004, 0.19737599999999988],
  [-2.7539999999999996, 0.9520000000000004, 0],
  [-2.64384, 0.8867200000000004, -0.19737599999999988],
  [-2.3133600000000003, 0.6908800000000004, -0.3892079999999999],
  [-1.7625599999999997, 0.36448000000000014, -0.5699520000000001],
  [-0.9914399999999999, -0.09247999999999998, -0.734064],
  [-0.8845200000000001, -0.7641524999999993, 0.687712],
  [-1.57248, -0.3989099999999994, 0.533466],
  [-2.0638799999999997, -0.1380224999999993, 0.36406399999999994],
  [-2.35872, 0.018510000000000665, 0.1845579999999999],
  [-2.457, 0.07068750000000068, 0],
  [-2.35872, 0.018510000000000665, -0.1845579999999999],
  [-2.06388, -0.13802249999999924, -0.36406399999999994],
  [-1.5724799999999994, -0.39890999999999954, -0.533466],
  [-0.8845199999999998, -0.7641524999999995, -0.6877119999999999],
  [-0.6868799999999999, -1.4854600000000007, 0.620528],
  [-1.22112, -1.2330400000000008, 0.48110400000000003],
  [-1.6027199999999995, -1.0527400000000005, 0.32821599999999984],
  [-1.83168, -0.9445600000000005, 0.16635199999999994],
  [-1.9079999999999997, -0.9085000000000005, 0],
  [-1.83168, -0.9445600000000005, -0.16635199999999994],
  [-1.6027199999999997, -1.0527400000000005, -0.3282159999999999],
  [-1.2211199999999995, -1.2330400000000008, -0.48110400000000003],
  [-0.6868799999999997, -1.4854600000000007, -0.620528],
  [-0.39365999999999995, -2.237157500000001, 0.5310960000000001],
  [-0.69984, -2.109530000000001, 0.41167800000000004],
  [-0.9185399999999997, -2.0183675, 0.28081199999999995],
  [-1.0497599999999998, -1.9636700000000005, 0.14231399999999997],
  [-1.0934999999999997, -1.9454375000000004, 0],
  [-1.0497599999999998, -1.9636700000000005, -0.14231399999999997],
  [-0.9185399999999999, -2.0183675000000005, -0.28081199999999995],
  [-0.6998399999999998, -2.1095300000000003, -0.41167800000000004],
  [-0.39365999999999984, -2.2371575000000004, -0.5310960000000001],
  [0, -3, 0.41800000000000004],
  [0, -3.0000000000000004, 0.32400000000000007],
  [0, -2.9999999999999996, 0.22099999999999995],
  [0, -3, -0.22099999999999997],
  [0, -3, -0.32400000000000007],
  [0, -3, -0.418],
];

const cells = [
  [0, 1, 12, 11],
  [1, 2, 13, 12],
  [2, 3, 14, 13],
  [3, 4, 15, 14],
  [4, 5, 16, 15],
  [5, 6, 17, 16],
  [6, 7, 18, 17],
  [7, 8, 19, 18],
  [8, 9, 20, 19],
  [9, 10, 21, 20],
  [11, 12, 23, 22],
  [12, 13, 24, 23],
  [13, 14, 25, 24],
  [14, 15, 26, 25],
  [15, 16, 27, 26],
  [16, 17, 28, 27],
  [17, 18, 29, 28],
  [18, 19, 30, 29],
  [19, 20, 31, 30],
  [20, 21, 32, 31],
  [22, 23, 34, 33],
  [23, 24, 35, 34],
  [24, 25, 36, 35],
  [25, 26, 37, 36],
  [26, 27, 38, 37],
  [27, 28, 39, 38],
  [28, 29, 40, 39],
  [29, 30, 41, 40],
  [30, 31, 42, 41],
  [31, 32, 43, 42],
  [33, 34, 45, 44],
  [34, 35, 46, 45],
  [35, 36, 47, 46],
  [36, 37, 48, 47],
  [37, 38, 49, 48],
  [38, 39, 50, 49],
  [39, 40, 51, 50],
  [40, 41, 52, 51],
  [41, 42, 53, 52],
  [42, 43, 54, 53],
  [44, 45, 56, 55],
  [45, 46, 57, 56],
  [46, 47, 58, 57],
  [47, 48, 59, 58],
  [48, 49, 60, 59],
  [49, 50, 61, 60],
  [50, 51, 62, 61],
  [51, 52, 63, 62],
  [52, 53, 64, 63],
  [53, 54, 65, 64],
  [55, 56, 67, 66],
  [56, 57, 68, 67],
  [57, 58, 69, 68],
  [58, 59, 70, 69],
  [59, 60, 71, 70],
  [60, 61, 72, 71],
  [61, 62, 73, 72],
  [62, 63, 74, 73],
  [63, 64, 75, 74],
  [64, 65, 76, 75],
  [66, 67, 78, 77],
  [67, 68, 79, 78],
  [68, 69, 80, 79],
  [69, 70, 81, 80],
  [70, 71, 82, 81],
  [71, 72, 83, 82],
  [72, 73, 84, 83],
  [73, 74, 85, 84],
  [74, 75, 86, 85],
  [75, 76, 87, 86],
  [77, 78, 89, 88],
  [78, 79, 90, 89],
  [79, 80, 91, 90],
  [80, 81, 92, 91],
  [81, 82, 93, 92],
  [82, 83, 94, 93],
  [83, 84, 95, 94],
  [84, 85, 96, 95],
  [85, 86, 97, 96],
  [86, 87, 98, 97],
  [88, 89, 100, 99],
  [89, 90, 101, 100],
  [90, 91, 102, 101],
  [91, 92, 103, 102],
  [92, 93, 104, 103],
  [93, 94, 105, 104],
  [94, 95, 106, 105],
  [95, 96, 107, 106],
  [96, 97, 108, 107],
  [97, 98, 109, 108],
  [99, 100, 111, 110],
  [100, 101, 112, 111],
  [101, 102, 113, 112],
  [102, 103, 114, 113],
  [103, 104, 115, 114],
  [104, 105, 116, 115],
  [105, 106, 117, 116],
  [106, 107, 118, 117],
  [107, 108, 119, 118],
  [108, 109, 120, 119],
  [10, 121, 127, 21],
  [121, 122, 128, 127],
  [122, 123, 129, 128],
  [123, 6, 130, 129],
  [6, 5, 131, 130],
  [5, 4, 132, 131],
  [4, 124, 133, 132],
  [124, 125, 134, 133],
  [125, 126, 135, 134],
  [126, 0, 11, 135],
  [21, 127, 136, 32],
  [127, 128, 137, 136],
  [128, 129, 138, 137],
  [129, 130, 139, 138],
  [130, 131, 140, 139],
  [131, 132, 141, 140],
  [132, 133, 142, 141],
  [133, 134, 143, 142],
  [134, 135, 144, 143],
  [135, 11, 22, 144],
  [32, 136, 145, 43],
  [136, 137, 146, 145],
  [137, 138, 147, 146],
  [138, 139, 148, 147],
  [139, 140, 149, 148],
  [140, 141, 150, 149],
  [141, 142, 151, 150],
  [142, 143, 152, 151],
  [143, 144, 153, 152],
  [144, 22, 33, 153],
  [43, 145, 154, 54],
  [145, 146, 155, 154],
  [146, 147, 156, 155],
  [147, 148, 157, 156],
  [148, 149, 158, 157],
  [149, 150, 159, 158],
  [150, 151, 160, 159],
  [151, 152, 161, 160],
  [152, 153, 162, 161],
  [153, 33, 44, 162],
  [54, 154, 163, 65],
  [154, 155, 164, 163],
  [155, 156, 165, 164],
  [156, 157, 166, 165],
  [157, 158, 167, 166],
  [158, 159, 168, 167],
  [159, 160, 169, 168],
  [160, 161, 170, 169],
  [161, 162, 171, 170],
  [162, 44, 55, 171],
  [65, 163, 172, 76],
  [163, 164, 173, 172],
  [164, 165, 174, 173],
  [165, 166, 175, 174],
  [166, 167, 176, 175],
  [167, 168, 177, 176],
  [168, 169, 178, 177],
  [169, 170, 179, 178],
  [170, 171, 180, 179],
  [171, 55, 66, 180],
  [76, 172, 181, 87],
  [172, 173, 182, 181],
  [173, 174, 183, 182],
  [174, 175, 184, 183],
  [175, 176, 185, 184],
  [176, 177, 186, 185],
  [177, 178, 187, 186],
  [178, 179, 188, 187],
  [179, 180, 189, 188],
  [180, 66, 77, 189],
  [87, 181, 190, 98],
  [181, 182, 191, 190],
  [182, 183, 192, 191],
  [183, 184, 193, 192],
  [184, 185, 194, 193],
  [185, 186, 195, 194],
  [186, 187, 196, 195],
  [187, 188, 197, 196],
  [188, 189, 198, 197],
  [189, 77, 88, 198],
  [98, 190, 199, 109],
  [190, 191, 200, 199],
  [191, 192, 201, 200],
  [192, 193, 202, 201],
  [193, 194, 203, 202],
  [194, 195, 204, 203],
  [195, 196, 205, 204],
  [196, 197, 206, 205],
  [197, 198, 207, 206],
  [198, 88, 99, 207],
  [109, 199, 208, 120],
  [199, 200, 209, 208],
  [200, 201, 210, 209],
  [201, 202, 116, 210],
  [202, 203, 115, 116],
  [203, 204, 114, 115],
  [204, 205, 211, 114],
  [205, 206, 212, 211],
  [206, 207, 213, 212],
  [207, 99, 110, 213],
];

export const model = { positions, cells };
