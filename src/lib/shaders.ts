export const particleVertexShader = `
  uniform float uTime;
  uniform float uSize;
  attribute float aScale;
  attribute vec3 aRandomness;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
    angle += angleOffset;
    
    modelPosition.x = cos(angle) * distanceToCenter + aRandomness.x;
    modelPosition.y += sin(uTime * 0.5 + distanceToCenter) * 0.3 + aRandomness.y;
    modelPosition.z = sin(angle) * distanceToCenter + aRandomness.z;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);
    
    vColor = color;
    vAlpha = smoothstep(0.0, 0.3, aScale);
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    if (distanceToCenter > 0.5) discard;
    
    float strength = 1.0 - (distanceToCenter * 2.0);
    strength = pow(strength, 3.0);
    
    vec3 finalColor = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(finalColor, strength * vAlpha * 0.8);
  }
`;

export const gridVertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 2.0 + uTime) * cos(pos.z * 2.0 + uTime * 0.5) * 0.15;
    pos.y += wave;
    vElevation = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const gridFragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;
  
  void main() {
    vec2 grid = abs(fract(vUv * 30.0 - 0.5) - 0.5) / fwidth(vUv * 30.0);
    float line = min(grid.x, grid.y);
    float gridLine = 1.0 - min(line, 1.0);
    
    vec3 blue = vec3(0.2, 0.5, 1.0);
    vec3 purple = vec3(0.5, 0.2, 1.0);
    vec3 color = mix(blue, purple, vUv.y + sin(uTime * 0.3) * 0.2);
    
    float alpha = gridLine * 0.15 * (1.0 - length(vUv - 0.5) * 1.5);
    alpha += vElevation * 0.5;
    alpha = clamp(alpha, 0.0, 0.3);
    
    gl_FragColor = vec4(color, alpha);
  }
`;
