export const vertexShaderCode = `
  precision mediump float;
  attribute vec3 position, normal;
  uniform mat4 projection, view;

  varying vec3 vNormal;

  void main() {
    vNormal = normal;
    gl_Position = projection * view * vec4(position, 1.0);
  }
`;

export const fragmentShaderCode = `
  precision mediump float;
  varying vec3 vNormal;
  void main() {
    vec3 lightDirection = vec3(1.0, 0.7, 0.5);
    float brightness = max(0.0, dot(vNormal, lightDirection));

    vec3 ambient = vec3(0.05);
    vec3 meshColor = vec3(1.0, 0.7, 0.3);

    vec3 normalColoring = vNormal;
    vec3 inverseNormal = vec3(1.0) - normalColoring;
    inverseNormal = inverseNormal * 0.1;

    gl_FragColor = vec4(0.6 * (ambient + inverseNormal) + brightness * meshColor, 1.0);
  }
`;