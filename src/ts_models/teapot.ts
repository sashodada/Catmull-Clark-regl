
const positions = [
  [0, 0, 0.488037],
  [0.003906, 0.042188, 0.476326],
  [0.003906, -0.042188, 0.476326],
  [0.010742, 0, 0.575333],
  [0.0125, 0.056251, 0.450561],
  [0.0125, -0.056251, 0.450561],
  [0.019531, 0, 0.413654],
  [0.021094, 0.042188, 0.424797],
  [0.021094, -0.042188, 0.424797],
  [0.025, 0, 0.413086],
  [0.03875, 0.19625, 0.488037],
  [0.03875, -0.19625, 0.488037],
  [0.039063, 0, 0.66803],
  [0.04866, 0.192034, 0.575333],
  [0.04866, -0.192034, 0.575333],
  [0.056768, 0.188584, 0.413654],
  [0.056768, -0.188584, 0.413654],
  [0.0625, 0, 0.358795],
  [0.074785, 0.180918, 0.66803],
  [0.074785, -0.180918, 0.66803],
  [0.079102, 0, 0.764481],
  [0.096406, 0.171719, 0.358795],
  [0.096406, -0.171719, 0.358795],
  [0.1, 0, 0.769043],
  [0.103906, 0.042188, 0.777779],
  [0.103906, -0.042188, 0.777779],
  [0.105469, 0, 0.32156],
  [0.111721, 0.165203, 0.764481],
  [0.111721, -0.165203, 0.764481],
  [0.1125, 0.056251, 0.796997],
  [0.1125, -0.056251, 0.796997],
  [0.121094, 0.042188, 0.816215],
  [0.121094, -0.042188, 0.816215],
  [0.125, 0, 0.300049],
  [0.125, 0, 0.824951],
  [0.125, 0, 0.863037],
  [0.136045, 0.154853, 0.32156],
  [0.136045, -0.154853, 0.32156],
  [0.137695, 0, 0.881027],
  [0.145, 0.355, 0.488037],
  [0.145, -0.355, 0.488037],
  [0.149219, 0, 0.887024],
  [0.15, 0, 0.863037],
  [0.152627, 0.347373, 0.575333],
  [0.152627, -0.347373, 0.575333],
  [0.154062, 0.147187, 0.300049],
  [0.154062, 0.147187, 0.863037],
  [0.154062, -0.147187, 0.300049],
  [0.154062, -0.147187, 0.863037],
  [0.154883, 0, 0.881027],
  [0.158867, 0.341133, 0.413654],
  [0.158867, -0.341133, 0.413654],
  [0.165774, 0.142205, 0.881027],
  [0.165774, -0.142204, 0.881027],
  [0.172734, 0.327266, 0.66803],
  [0.172734, -0.327266, 0.66803],
  [0.175, 0, 0.863037],
  [0.176404, 0.137682, 0.887024],
  [0.176404, -0.137681, 0.887024],
  [0.177125, 0.137375, 0.863037],
  [0.177125, -0.137375, 0.863037],
  [0.181629, 0.135459, 0.881027],
  [0.181629, -0.135458, 0.881027],
  [0.189375, 0.310625, 0.358795],
  [0.189375, -0.310625, 0.358795],
  [0.200187, 0.127562, 0.863037],
  [0.200187, -0.127562, 0.863037],
  [0.201162, 0.298838, 0.764481],
  [0.201162, -0.298838, 0.764481],
  [0.210938, 0, 0.884945],
  [0.219883, 0.280117, 0.32156],
  [0.219883, -0.280117, 0.32156],
  [0.23334, 0.113457, 0.884945],
  [0.23334, -0.113457, 0.884945],
  [0.23375, 0.26625, 0.300049],
  [0.23375, 0.26625, 0.863037],
  [0.23375, -0.26625, 0.300049],
  [0.23375, -0.26625, 0.863037],
  [0.242764, 0.257238, 0.881027],
  [0.242764, -0.257235, 0.881027],
  [0.250945, 0.249056, 0.887024],
  [0.250945, -0.249054, 0.887024],
  [0.2515, 0.2485, 0.863037],
  [0.2515, -0.2485, 0.863037],
  [0.254967, 0.245034, 0.881027],
  [0.254967, -0.245033, 0.881027],
  [0.26925, 0.23075, 0.863037],
  [0.26925, -0.23075, 0.863037],
  [0.29375, 0, 0.900055],
  [0.294766, 0.205234, 0.884945],
  [0.294766, -0.205234, 0.884945],
  [0.30375, 0.46125, 0.488037],
  [0.30375, -0.46125, 0.488037],
  [0.307966, 0.45134, 0.575333],
  [0.307966, -0.45134, 0.575333],
  [0.309734, 0.080953, 0.900055],
  [0.309734, -0.080953, 0.900055],
  [0.311416, 0.443233, 0.413654],
  [0.311416, -0.443233, 0.413654],
  [0.319082, 0.425215, 0.66803],
  [0.319082, -0.425215, 0.66803],
  [0.328281, 0.403594, 0.358795],
  [0.328281, -0.403594, 0.358795],
  [0.334797, 0.388279, 0.764481],
  [0.334797, -0.388279, 0.764481],
  [0.345146, 0.363955, 0.32156],
  [0.345146, -0.363955, 0.32156],
  [0.352812, 0.345937, 0.300049],
  [0.352812, 0.345937, 0.863037],
  [0.352812, -0.345937, 0.300049],
  [0.352812, -0.345937, 0.863037],
  [0.353562, 0.146438, 0.900055],
  [0.353562, -0.146438, 0.900055],
  [0.357795, 0.334229, 0.881027],
  [0.357795, -0.334224, 0.881027],
  [0.362318, 0.323599, 0.887024],
  [0.362318, -0.323595, 0.887024],
  [0.362625, 0.322875, 0.863037],
  [0.362625, -0.322875, 0.863037],
  [0.364542, 0.318373, 0.881027],
  [0.364542, -0.318371, 0.881027],
  [0.372437, 0.299813, 0.863037],
  [0.372437, -0.299813, 0.863037],
  [0.385938, 0, 0.915394],
  [0.386543, 0.266661, 0.884945],
  [0.386543, -0.266661, 0.884945],
  [0.394777, 0.044769, 0.915394],
  [0.394777, -0.044769, 0.915394],
  [0.414844, 0, 1.03776],
  [0.41875, 0, 1.00793],
  [0.419016, 0.080984, 0.915394],
  [0.419016, -0.080984, 0.915394],
  [0.419047, 0.190266, 0.900055],
  [0.419047, -0.190266, 0.900055],
  [0.421414, 0.033513, 1.03776],
  [0.421414, -0.033513, 1.03776],
  [0.425021, 0.03197, 1.00793],
  [0.425021, -0.03197, 1.00793],
  [0.43946, 0.06054, 1.03776],
  [0.43946, -0.06054, 1.03776],
  [0.442242, 0.057758, 1.00793],
  [0.442242, -0.057758, 1.00793],
  [0.45, 0, 0.937988],
  [0.450781, 0, 0.971153],
  [0.453875, 0.019625, 0.937988],
  [0.453875, -0.019625, 0.937988],
  [0.454586, 0.019348, 0.971153],
  [0.454586, -0.019348, 0.971153],
  [0.45523, 0.105222, 0.915394],
  [0.45523, -0.105222, 0.915394],
  [0.4645, 0.0355, 0.937988],
  [0.4645, -0.0355, 0.937988],
  [0.465028, 0.034972, 0.971153],
  [0.465028, -0.034972, 0.971153],
  [0.466487, 0.078587, 1.03776],
  [0.466487, -0.078587, 1.03776],
  [0.46803, 0.07498, 1.00793],
  [0.46803, -0.07498, 1.00793],
  [0.480375, 0.046124, 0.937988],
  [0.480375, -0.046124, 0.937988],
  [0.480652, 0.045414, 0.971153],
  [0.480652, -0.045414, 0.971153],
  [0.5, 0, 1.05005],
  [0.5, 0.049218, 0.971153],
  [0.5, 0.049999, 0.937988],
  [0.5, 0.08125, 1.00793],
  [0.5, 0.085157, 1.03776],
  [0.5, 0.114062, 0.915394],
  [0.5, 0.20625, 0.900055],
  [0.5, 0.289063, 0.884945],
  [0.5, 0.325001, 0.863037],
  [0.5, 0.34512, 0.881027],
  [0.5, 0.35, 0.863037],
  [0.5, 0.350785, 0.887024],
  [0.5, 0.362308, 0.881027],
  [0.5, 0.375, 0.300049],
  [0.5, 0.375, 0.863037],
  [0.5, 0.394531, 0.32156],
  [0.5, 0.420898, 0.764481],
  [0.5, 0.4375, 0.358795],
  [0.5, 0.460938, 0.66803],
  [0.5, 0.480469, 0.413654],
  [0.5, 0.489258, 0.575333],
  [0.5, 0.5, 0.488037],
  [0.5, -0.049218, 0.971153],
  [0.5, -0.049999, 0.937988],
  [0.5, -0.08125, 1.00793],
  [0.5, -0.085157, 1.03776],
  [0.5, -0.114062, 0.915394],
  [0.5, -0.20625, 0.900055],
  [0.5, -0.289063, 0.884945],
  [0.5, -0.325001, 0.863037],
  [0.5, -0.345118, 0.881027],
  [0.5, -0.35, 0.863037],
  [0.5, -0.35078, 0.887024],
  [0.5, -0.362303, 0.881027],
  [0.5, -0.375, 0.300049],
  [0.5, -0.375, 0.863037],
  [0.5, -0.394531, 0.32156],
  [0.5, -0.420898, 0.764481],
  [0.5, -0.4375, 0.358795],
  [0.5, -0.460938, 0.66803],
  [0.5, -0.480469, 0.413654],
  [0.5, -0.489258, 0.575333],
  [0.5, -0.5, 0.488037],
  [0.519348, 0.045414, 0.971153],
  [0.519348, -0.045414, 0.971153],
  [0.519625, 0.046124, 0.937988],
  [0.519625, -0.046124, 0.937988],
  [0.53197, 0.07498, 1.00793],
  [0.53197, -0.07498, 1.00793],
  [0.533513, 0.078587, 1.03776],
  [0.533513, -0.078587, 1.03776],
  [0.534972, 0.034972, 0.971153],
  [0.534972, -0.034972, 0.971153],
  [0.5355, 0.0355, 0.937988],
  [0.5355, -0.0355, 0.937988],
  [0.54477, 0.105222, 0.915394],
  [0.54477, -0.105222, 0.915394],
  [0.545414, 0.019348, 0.971153],
  [0.545414, -0.019348, 0.971153],
  [0.546125, 0.019625, 0.937988],
  [0.546125, -0.019625, 0.937988],
  [0.549219, 0, 0.971153],
  [0.55, 0, 0.937988],
  [0.557758, 0.057758, 1.00793],
  [0.557758, -0.057758, 1.00793],
  [0.56054, 0.06054, 1.03776],
  [0.56054, -0.06054, 1.03776],
  [0.574979, 0.03197, 1.00793],
  [0.574979, -0.03197, 1.00793],
  [0.578586, 0.033513, 1.03776],
  [0.578586, -0.033513, 1.03776],
  [0.580953, 0.190266, 0.900055],
  [0.580953, -0.190266, 0.900055],
  [0.580984, 0.080984, 0.915394],
  [0.580984, -0.080984, 0.915394],
  [0.58125, 0, 1.00793],
  [0.585156, 0, 1.03776],
  [0.605223, 0.044769, 0.915394],
  [0.605223, -0.044769, 0.915394],
  [0.613457, 0.266661, 0.884945],
  [0.613457, -0.266661, 0.884945],
  [0.614062, 0, 0.915394],
  [0.627562, 0.299813, 0.863037],
  [0.627562, -0.299813, 0.863037],
  [0.635459, 0.318373, 0.881027],
  [0.635459, -0.318371, 0.881027],
  [0.637375, 0.322875, 0.863037],
  [0.637375, -0.322875, 0.863037],
  [0.637682, 0.323599, 0.887024],
  [0.637682, -0.323595, 0.887024],
  [0.642205, 0.334229, 0.881027],
  [0.642205, -0.334224, 0.881027],
  [0.646437, 0.146438, 0.900055],
  [0.646437, -0.146438, 0.900055],
  [0.647187, 0.345937, 0.300049],
  [0.647187, 0.345937, 0.863037],
  [0.647187, -0.345937, 0.300049],
  [0.647187, -0.345937, 0.863037],
  [0.654853, 0.363955, 0.32156],
  [0.654853, -0.363955, 0.32156],
  [0.665203, 0.388279, 0.764481],
  [0.665203, -0.388279, 0.764481],
  [0.671719, 0.403594, 0.358795],
  [0.671719, -0.403594, 0.358795],
  [0.680918, 0.425215, 0.66803],
  [0.680918, -0.425215, 0.66803],
  [0.688584, 0.443233, 0.413654],
  [0.688584, -0.443233, 0.413654],
  [0.690266, 0.080953, 0.900055],
  [0.690266, -0.080953, 0.900055],
  [0.692034, 0.45134, 0.575333],
  [0.692034, -0.45134, 0.575333],
  [0.69625, 0.46125, 0.488037],
  [0.69625, -0.46125, 0.488037],
  [0.705234, 0.205234, 0.884945],
  [0.705234, -0.205234, 0.884945],
  [0.70625, 0, 0.900055],
  [0.73075, 0.23075, 0.863037],
  [0.73075, -0.23075, 0.863037],
  [0.745033, 0.245034, 0.881027],
  [0.745033, -0.245033, 0.881027],
  [0.7485, 0.2485, 0.863037],
  [0.7485, -0.2485, 0.863037],
  [0.749055, 0.249056, 0.887024],
  [0.749055, -0.249054, 0.887024],
  [0.757236, 0.257238, 0.881027],
  [0.757236, -0.257235, 0.881027],
  [0.76625, 0.26625, 0.300049],
  [0.76625, 0.26625, 0.863037],
  [0.76625, -0.26625, 0.300049],
  [0.76625, -0.26625, 0.863037],
  [0.76666, 0.113457, 0.884945],
  [0.76666, -0.113457, 0.884945],
  [0.780117, 0.280117, 0.32156],
  [0.780117, -0.280117, 0.32156],
  [0.789062, 0, 0.884945],
  [0.798838, 0.298838, 0.764481],
  [0.798838, -0.298838, 0.764481],
  [0.799812, 0.127562, 0.863037],
  [0.799812, -0.127562, 0.863037],
  [0.810625, 0.310625, 0.358795],
  [0.810625, -0.310625, 0.358795],
  [0.818371, 0.135459, 0.881027],
  [0.818371, -0.135458, 0.881027],
  [0.822875, 0.137375, 0.863037],
  [0.822875, -0.137375, 0.863037],
  [0.823596, 0.137682, 0.887024],
  [0.823596, -0.137681, 0.887024],
  [0.825, 0, 0.863037],
  [0.827266, 0.327266, 0.66803],
  [0.827266, -0.327266, 0.66803],
  [0.834226, 0.142205, 0.881027],
  [0.834226, -0.142204, 0.881027],
  [0.841133, 0.341133, 0.413654],
  [0.841133, -0.341133, 0.413654],
  [0.845117, 0, 0.881027],
  [0.845937, 0.147187, 0.300049],
  [0.845937, 0.147187, 0.863037],
  [0.845937, -0.147187, 0.300049],
  [0.845937, -0.147187, 0.863037],
  [0.847373, 0.347373, 0.575333],
  [0.847373, -0.347373, 0.575333],
  [0.85, 0, 0.863037],
  [0.850781, 0, 0.887024],
  [0.855, 0.355, 0.488037],
  [0.855, -0.355, 0.488037],
  [0.862305, 0, 0.881027],
  [0.863955, 0.154853, 0.32156],
  [0.863955, -0.154853, 0.32156],
  [0.875, 0, 0.300049],
  [0.875, 0, 0.863037],
  [0.888279, 0.165203, 0.764481],
  [0.888279, -0.165203, 0.764481],
  [0.894531, 0, 0.32156],
  [0.903594, 0.171719, 0.358795],
  [0.903594, -0.171719, 0.358795],
  [0.920898, 0, 0.764481],
  [0.925, 0, 0.413086],
  [0.925, 0, 0.618896],
  [0.925, 0.092813, 0.445244],
  [0.925, 0.092813, 0.586738],
  [0.925, 0.123751, 0.515991],
  [0.925, -0.092813, 0.445244],
  [0.925, -0.092813, 0.586738],
  [0.925, -0.123751, 0.515991],
  [0.925215, 0.180918, 0.66803],
  [0.925215, -0.180918, 0.66803],
  [0.9375, 0, 0.358795],
  [0.943232, 0.188584, 0.413654],
  [0.943232, -0.188584, 0.413654],
  [0.95134, 0.192034, 0.575333],
  [0.95134, -0.192034, 0.575333],
  [0.960938, 0, 0.66803],
  [0.96125, 0.19625, 0.488037],
  [0.96125, -0.19625, 0.488037],
  [0.980469, 0, 0.413654],
  [0.989258, 0, 0.575333],
  [1, 0, 0.488037],
  [1.04492, 0, 0.646503],
  [1.05408, 0.083804, 0.622637],
  [1.05408, -0.083804, 0.622637],
  [1.07422, 0.111739, 0.570131],
  [1.07422, -0.111739, 0.570131],
  [1.09436, 0.083804, 0.517625],
  [1.09436, -0.083804, 0.517625],
  [1.09687, 0, 0.71286],
  [1.10352, 0, 0.493759],
  [1.10859, 0.063985, 0.698941],
  [1.10859, -0.063985, 0.698941],
  [1.12539, 0, 0.79327],
  [1.13437, 0.085313, 0.66832],
  [1.13437, -0.085313, 0.66832],
  [1.13967, 0.044165, 0.788218],
  [1.13967, -0.044165, 0.788218],
  [1.16016, 0.063985, 0.637698],
  [1.16016, -0.063985, 0.637698],
  [1.17109, 0.058887, 0.777105],
  [1.17109, -0.058887, 0.777105],
  [1.17188, 0, 0.623779],
  [1.175, 0, 0.863037],
  [1.19297, 0, 0.8732],
  [1.19844, 0.035156, 0.863037],
  [1.19844, -0.035156, 0.863037],
  [1.2, 0, 0.863037],
  [1.20251, 0.044165, 0.765992],
  [1.20251, -0.044165, 0.765992],
  [1.20625, 0, 0.876587],
  [1.21016, 0, 0.8732],
  [1.21563, 0.021094, 0.863037],
  [1.21563, -0.021094, 0.863037],
  [1.2168, 0, 0.76094],
  [1.21807, 0.032959, 0.873741],
  [1.21807, -0.032959, 0.873741],
  [1.22981, 0.028125, 0.87746],
  [1.22981, -0.028125, 0.87746],
  [1.23016, 0.023291, 0.873967],
  [1.23016, -0.023291, 0.873967],
  [1.25, 0.028125, 0.863037],
  [1.25, 0.046875, 0.863037],
  [1.25, -0.028125, 0.863037],
  [1.25, -0.046875, 0.863037],
  [1.27329, 0.043945, 0.874933],
  [1.27329, -0.043945, 0.874933],
  [1.27417, 0.031055, 0.875654],
  [1.27417, -0.031055, 0.875654],
  [1.28164, 0.0375, 0.879379],
  [1.28164, -0.0375, 0.879379],
  [1.28437, 0.021094, 0.863037],
  [1.28437, -0.021094, 0.863037],
  [1.3, 0, 0.863037],
  [1.30156, 0.035156, 0.863037],
  [1.30156, -0.035156, 0.863037],
  [1.31818, 0.023291, 0.877342],
  [1.31818, -0.023291, 0.877342],
  [1.325, 0, 0.863037],
  [1.32851, 0.032959, 0.876125],
  [1.32851, -0.032959, 0.876125],
  [1.33347, 0.028125, 0.881299],
  [1.33347, -0.028125, 0.881299],
  [1.33818, 0, 0.878109],
  [1.35361, 0, 0.876667],
  [1.35703, 0, 0.882171],
  [-0.016797, 0, 0.768166],
  [-0.020276, 0.042188, 0.776765],
  [-0.020276, -0.042188, 0.776765],
  [-0.02793, 0.056251, 0.795683],
  [-0.02793, -0.056251, 0.795683],
  [-0.035583, 0.042188, 0.814601],
  [-0.035583, -0.042188, 0.814601],
  [-0.039063, 0, 0.8232],
  [-0.080078, 0, 0.538757],
  [-0.082733, 0.042188, 0.529498],
  [-0.082733, -0.042188, 0.529498],
  [-0.088574, 0.056251, 0.509128],
  [-0.088574, -0.056251, 0.509128],
  [-0.094415, 0.042188, 0.488759],
  [-0.094415, -0.042188, 0.488759],
  [-0.09707, 0, 0.4795],
  [-0.103125, 0, 0.762024],
  [-0.111426, 0.042188, 0.769668],
  [-0.111426, -0.042188, 0.769668],
  [-0.129688, 0.056251, 0.786484],
  [-0.129688, -0.056251, 0.786484],
  [-0.134375, 0, 0.600098],
  [-0.141943, 0.042188, 0.592611],
  [-0.141943, -0.042188, 0.592611],
  [-0.147949, 0.042188, 0.8033],
  [-0.147949, -0.042188, 0.8033],
  [-0.15625, 0, 0.810943],
  [-0.156641, 0, 0.745354],
  [-0.158594, 0.056251, 0.576141],
  [-0.158594, -0.056251, 0.576141],
  [-0.165234, 0, 0.661621],
  [-0.167566, 0.042188, 0.750404],
  [-0.167566, -0.042188, 0.750404],
  [-0.175, 0, 0.712891],
  [-0.175244, 0.042188, 0.559671],
  [-0.175244, -0.042188, 0.559671],
  [-0.175885, 0.042188, 0.656723],
  [-0.175885, -0.042188, 0.656723],
  [-0.182812, 0, 0.552185],
  [-0.186719, 0.042188, 0.712891],
  [-0.186719, -0.042188, 0.712891],
  [-0.191602, 0.056251, 0.761515],
  [-0.191602, -0.056251, 0.761515],
  [-0.199316, 0.056251, 0.645947],
  [-0.199316, -0.056251, 0.645947],
  [-0.2125, 0.056251, 0.712891],
  [-0.2125, -0.056251, 0.712891],
  [-0.215637, 0.042188, 0.772625],
  [-0.215637, -0.042188, 0.772625],
  [-0.222748, 0.042188, 0.63517],
  [-0.222748, -0.042188, 0.63517],
  [-0.226562, 0, 0.777676],
  [-0.233398, 0, 0.630272],
  [-0.238281, 0.042188, 0.712891],
  [-0.238281, -0.042188, 0.712891],
  [-0.25, 0, 0.712891],
];

const cells = [
  [324, 317, 304, 306],
  [306, 304, 281, 283],
  [283, 281, 246, 248],
  [248, 246, 171, 172],
  [317, 325, 308, 304],
  [304, 308, 285, 281],
  [281, 285, 250, 246],
  [246, 250, 173, 171],
  [325, 328, 313, 308],
  [308, 313, 287, 285],
  [285, 287, 252, 250],
  [250, 252, 174, 173],
  [328, 332, 319, 313],
  [313, 319, 290, 287],
  [287, 290, 257, 252],
  [252, 257, 176, 174],
  [172, 171, 119, 117],
  [117, 119, 84, 82],
  [82, 84, 61, 59],
  [59, 61, 49, 42],
  [171, 173, 115, 119],
  [119, 115, 80, 84],
  [84, 80, 57, 61],
  [61, 57, 41, 49],
  [173, 174, 113, 115],
  [115, 113, 78, 80],
  [80, 78, 52, 57],
  [57, 52, 38, 41],
  [174, 176, 108, 113],
  [113, 108, 75, 78],
  [78, 75, 46, 52],
  [52, 46, 35, 38],
  [42, 49, 62, 60],
  [60, 62, 85, 83],
  [83, 85, 120, 118],
  [118, 120, 192, 193],
  [49, 41, 58, 62],
  [62, 58, 81, 85],
  [85, 81, 116, 120],
  [120, 116, 194, 192],
  [41, 38, 53, 58],
  [58, 53, 79, 81],
  [81, 79, 114, 116],
  [116, 114, 195, 194],
  [38, 35, 48, 53],
  [53, 48, 77, 79],
  [79, 77, 110, 114],
  [114, 110, 197, 195],
  [193, 192, 247, 249],
  [249, 247, 282, 284],
  [284, 282, 305, 307],
  [307, 305, 317, 324],
  [192, 194, 251, 247],
  [247, 251, 286, 282],
  [282, 286, 309, 305],
  [305, 309, 325, 317],
  [194, 195, 253, 251],
  [251, 253, 288, 286],
  [286, 288, 314, 309],
  [309, 314, 328, 325],
  [195, 197, 259, 253],
  [253, 259, 292, 288],
  [288, 292, 321, 314],
  [314, 321, 332, 328],
  [332, 338, 333, 319],
  [319, 333, 298, 290],
  [290, 298, 262, 257],
  [257, 262, 178, 176],
  [338, 354, 347, 333],
  [333, 347, 311, 298],
  [298, 311, 266, 262],
  [262, 266, 180, 178],
  [354, 358, 352, 347],
  [347, 352, 322, 311],
  [311, 322, 272, 266],
  [266, 272, 182, 180],
  [358, 359, 355, 352],
  [352, 355, 326, 322],
  [322, 326, 274, 272],
  [272, 274, 183, 182],
  [176, 178, 103, 108],
  [108, 103, 67, 75],
  [75, 67, 27, 46],
  [46, 27, 20, 35],
  [178, 180, 99, 103],
  [103, 99, 54, 67],
  [67, 54, 18, 27],
  [27, 18, 12, 20],
  [180, 182, 93, 99],
  [99, 93, 43, 54],
  [54, 43, 13, 18],
  [18, 13, 3, 12],
  [182, 183, 91, 93],
  [93, 91, 39, 43],
  [43, 39, 10, 13],
  [13, 10, 0, 3],
  [35, 20, 28, 48],
  [48, 28, 68, 77],
  [77, 68, 104, 110],
  [110, 104, 199, 197],
  [20, 12, 19, 28],
  [28, 19, 55, 68],
  [68, 55, 100, 104],
  [104, 100, 201, 199],
  [12, 3, 14, 19],
  [19, 14, 44, 55],
  [55, 44, 94, 100],
  [100, 94, 203, 201],
  [3, 0, 11, 14],
  [14, 11, 40, 44],
  [44, 40, 92, 94],
  [94, 92, 204, 203],
  [197, 199, 263, 259],
  [259, 263, 299, 292],
  [292, 299, 334, 321],
  [321, 334, 338, 332],
  [199, 201, 267, 263],
  [263, 267, 312, 299],
  [299, 312, 348, 334],
  [334, 348, 354, 338],
  [201, 203, 273, 267],
  [267, 273, 323, 312],
  [312, 323, 353, 348],
  [348, 353, 358, 354],
  [203, 204, 275, 273],
  [273, 275, 327, 323],
  [323, 327, 356, 353],
  [353, 356, 359, 358],
  [359, 357, 350, 355],
  [355, 350, 315, 326],
  [326, 315, 268, 274],
  [274, 268, 181, 183],
  [357, 349, 336, 350],
  [350, 336, 302, 315],
  [315, 302, 264, 268],
  [268, 264, 179, 181],
  [349, 335, 329, 336],
  [336, 329, 295, 302],
  [302, 295, 260, 264],
  [264, 260, 177, 179],
  [335, 331, 318, 329],
  [329, 318, 289, 295],
  [295, 289, 256, 260],
  [260, 256, 175, 177],
  [183, 181, 97, 91],
  [91, 97, 50, 39],
  [39, 50, 15, 10],
  [10, 15, 6, 0],
  [181, 179, 101, 97],
  [97, 101, 63, 50],
  [50, 63, 21, 15],
  [15, 21, 17, 6],
  [179, 177, 105, 101],
  [101, 105, 70, 63],
  [63, 70, 36, 21],
  [21, 36, 26, 17],
  [177, 175, 107, 105],
  [105, 107, 74, 70],
  [70, 74, 45, 36],
  [36, 45, 33, 26],
  [0, 6, 16, 11],
  [11, 16, 51, 40],
  [40, 51, 98, 92],
  [92, 98, 202, 204],
  [6, 17, 22, 16],
  [16, 22, 64, 51],
  [51, 64, 102, 98],
  [98, 102, 200, 202],
  [17, 26, 37, 22],
  [22, 37, 71, 64],
  [64, 71, 106, 102],
  [102, 106, 198, 200],
  [26, 33, 47, 37],
  [37, 47, 76, 71],
  [71, 76, 109, 106],
  [106, 109, 196, 198],
  [204, 202, 269, 275],
  [275, 269, 316, 327],
  [327, 316, 351, 356],
  [356, 351, 357, 359],
  [202, 200, 265, 269],
  [269, 265, 303, 316],
  [316, 303, 337, 351],
  [351, 337, 349, 357],
  [200, 198, 261, 265],
  [265, 261, 296, 303],
  [303, 296, 330, 337],
  [337, 330, 335, 349],
  [198, 196, 258, 261],
  [261, 258, 291, 296],
  [296, 291, 320, 330],
  [330, 320, 331, 335],
  [23, 424, 425, 24],
  [24, 425, 427, 29],
  [29, 427, 429, 31],
  [31, 429, 431, 34],
  [424, 440, 441, 425],
  [425, 441, 443, 427],
  [427, 443, 448, 429],
  [429, 448, 450, 431],
  [440, 451, 455, 441],
  [441, 455, 465, 443],
  [443, 465, 471, 448],
  [448, 471, 475, 450],
  [451, 457, 463, 455],
  [455, 463, 469, 465],
  [465, 469, 477, 471],
  [471, 477, 479, 475],
  [34, 431, 430, 32],
  [32, 430, 428, 30],
  [30, 428, 426, 25],
  [25, 426, 424, 23],
  [431, 450, 449, 430],
  [430, 449, 444, 428],
  [428, 444, 442, 426],
  [426, 442, 440, 424],
  [450, 475, 472, 449],
  [449, 472, 466, 444],
  [444, 466, 456, 442],
  [442, 456, 451, 440],
  [475, 479, 478, 472],
  [472, 478, 470, 466],
  [466, 470, 464, 456],
  [456, 464, 457, 451],
  [457, 454, 460, 463],
  [463, 460, 467, 469],
  [469, 467, 473, 477],
  [477, 473, 476, 479],
  [454, 445, 446, 460],
  [460, 446, 452, 467],
  [467, 452, 458, 473],
  [473, 458, 462, 476],
  [445, 432, 433, 446],
  [446, 433, 435, 452],
  [452, 435, 437, 458],
  [458, 437, 439, 462],
  [432, 0, 1, 433],
  [433, 1, 4, 435],
  [435, 4, 7, 437],
  [437, 7, 9, 439],
  [479, 476, 474, 478],
  [478, 474, 468, 470],
  [470, 468, 461, 464],
  [464, 461, 454, 457],
  [476, 462, 459, 474],
  [474, 459, 453, 468],
  [468, 453, 447, 461],
  [461, 447, 445, 454],
  [462, 439, 438, 459],
  [459, 438, 436, 453],
  [453, 436, 434, 447],
  [447, 434, 432, 445],
  [439, 9, 8, 438],
  [438, 8, 5, 436],
  [436, 5, 2, 434],
  [434, 2, 0, 432],
  [340, 360, 361, 342],
  [342, 361, 363, 343],
  [343, 363, 365, 341],
  [341, 365, 368, 339],
  [360, 367, 369, 361],
  [361, 369, 372, 363],
  [363, 372, 376, 365],
  [365, 376, 380, 368],
  [367, 371, 374, 369],
  [369, 374, 378, 372],
  [372, 378, 386, 376],
  [376, 386, 392, 380],
  [371, 381, 383, 374],
  [374, 383, 400, 378],
  [378, 400, 412, 386],
  [386, 412, 416, 392],
  [339, 368, 366, 344],
  [344, 366, 364, 346],
  [346, 364, 362, 345],
  [345, 362, 360, 340],
  [368, 380, 377, 366],
  [366, 377, 373, 364],
  [364, 373, 370, 362],
  [362, 370, 367, 360],
  [380, 392, 387, 377],
  [377, 387, 379, 373],
  [373, 379, 375, 370],
  [370, 375, 371, 367],
  [392, 416, 413, 387],
  [387, 413, 402, 379],
  [379, 402, 384, 375],
  [375, 384, 381, 371],
  [381, 382, 393, 383],
  [383, 393, 403, 400],
  [400, 403, 417, 412],
  [412, 417, 422, 416],
  [382, 388, 395, 393],
  [393, 395, 407, 403],
  [403, 407, 419, 417],
  [417, 419, 423, 422],
  [388, 389, 397, 395],
  [395, 397, 405, 407],
  [407, 405, 414, 419],
  [419, 414, 421, 423],
  [389, 385, 390, 397],
  [397, 390, 399, 405],
  [405, 399, 409, 414],
  [414, 409, 411, 421],
  [416, 422, 418, 413],
  [413, 418, 404, 402],
  [402, 404, 394, 384],
  [384, 394, 382, 381],
  [422, 423, 420, 418],
  [418, 420, 408, 404],
  [404, 408, 396, 394],
  [394, 396, 388, 382],
  [423, 421, 415, 420],
  [420, 415, 406, 408],
  [408, 406, 398, 396],
  [396, 398, 389, 388],
  [421, 411, 410, 415],
  [415, 410, 401, 406],
  [406, 401, 391, 398],
  [398, 391, 385, 389],
  [162, 238, 231],
  [162, 231, 227],
  [162, 227, 211],
  [162, 211, 166],
  [238, 237, 229, 231],
  [231, 229, 225, 227],
  [227, 225, 209, 211],
  [211, 209, 165, 166],
  [237, 223, 219, 229],
  [229, 219, 213, 225],
  [225, 213, 205, 209],
  [209, 205, 163, 165],
  [223, 224, 221, 219],
  [219, 221, 215, 213],
  [213, 215, 207, 205],
  [205, 207, 164, 163],
  [162, 166, 154],
  [162, 154, 138],
  [162, 138, 134],
  [162, 134, 128],
  [166, 165, 156, 154],
  [154, 156, 140, 138],
  [138, 140, 136, 134],
  [134, 136, 129, 128],
  [165, 163, 160, 156],
  [156, 160, 152, 140],
  [140, 152, 146, 136],
  [136, 146, 143, 129],
  [163, 164, 158, 160],
  [160, 158, 150, 152],
  [152, 150, 144, 146],
  [146, 144, 142, 143],
  [162, 128, 135],
  [162, 135, 139],
  [162, 139, 155],
  [162, 155, 187],
  [128, 129, 137, 135],
  [135, 137, 141, 139],
  [139, 141, 157, 155],
  [155, 157, 186, 187],
  [129, 143, 147, 137],
  [137, 147, 153, 141],
  [141, 153, 161, 157],
  [157, 161, 184, 186],
  [143, 142, 145, 147],
  [147, 145, 151, 153],
  [153, 151, 159, 161],
  [161, 159, 185, 184],
  [162, 187, 212],
  [162, 212, 228],
  [162, 228, 232],
  [162, 232, 238],
  [187, 186, 210, 212],
  [212, 210, 226, 228],
  [228, 226, 230, 232],
  [232, 230, 237, 238],
  [186, 184, 206, 210],
  [210, 206, 214, 226],
  [226, 214, 220, 230],
  [230, 220, 223, 237],
  [184, 185, 208, 206],
  [206, 208, 216, 214],
  [214, 216, 222, 220],
  [220, 222, 224, 223],
  [224, 243, 239, 221],
  [221, 239, 235, 215],
  [215, 235, 217, 207],
  [207, 217, 167, 164],
  [243, 278, 270, 239],
  [239, 270, 254, 235],
  [235, 254, 233, 217],
  [217, 233, 168, 167],
  [278, 297, 293, 270],
  [270, 293, 276, 254],
  [254, 276, 241, 233],
  [233, 241, 169, 168],
  [297, 310, 300, 293],
  [293, 300, 279, 276],
  [276, 279, 244, 241],
  [241, 244, 170, 169],
  [164, 167, 148, 158],
  [158, 148, 130, 150],
  [150, 130, 126, 144],
  [144, 126, 123, 142],
  [167, 168, 132, 148],
  [148, 132, 111, 130],
  [130, 111, 95, 126],
  [126, 95, 88, 123],
  [168, 169, 124, 132],
  [132, 124, 89, 111],
  [111, 89, 72, 95],
  [95, 72, 69, 88],
  [169, 170, 121, 124],
  [124, 121, 86, 89],
  [89, 86, 65, 72],
  [72, 65, 56, 69],
  [142, 123, 127, 145],
  [145, 127, 131, 151],
  [151, 131, 149, 159],
  [159, 149, 188, 185],
  [123, 88, 96, 127],
  [127, 96, 112, 131],
  [131, 112, 133, 149],
  [149, 133, 189, 188],
  [88, 69, 73, 96],
  [96, 73, 90, 112],
  [112, 90, 125, 133],
  [133, 125, 190, 189],
  [69, 56, 66, 73],
  [73, 66, 87, 90],
  [90, 87, 122, 125],
  [125, 122, 191, 190],
  [185, 188, 218, 208],
  [208, 218, 236, 216],
  [216, 236, 240, 222],
  [222, 240, 243, 224],
  [188, 189, 234, 218],
  [218, 234, 255, 236],
  [236, 255, 271, 240],
  [240, 271, 278, 243],
  [189, 190, 242, 234],
  [234, 242, 277, 255],
  [255, 277, 294, 271],
  [271, 294, 297, 278],
  [190, 191, 245, 242],
  [242, 245, 280, 277],
  [277, 280, 301, 294],
  [294, 301, 310, 297],
];

export const model = { positions, cells };