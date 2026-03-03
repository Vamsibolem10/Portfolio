import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NeuralGrid = () => {
  const gridRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[80, 80, 60, 60]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 0.5 + uTime) * cos(pos.y * 0.5 + uTime * 0.7) * 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            vec2 grid = abs(fract(vUv * 40.0 - 0.5) - 0.5) / fwidth(vUv * 40.0);
            float line = min(grid.x, grid.y);
            float gridLine = 1.0 - min(line, 1.0);
            vec3 blue = vec3(0.2, 0.4, 1.0);
            vec3 purple = vec3(0.5, 0.2, 0.8);
            vec3 color = mix(blue, purple, vUv.y);
            float fade = 1.0 - smoothstep(0.0, 0.5, length(vUv - 0.5));
            float alpha = gridLine * 0.12 * fade;
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
};

export default NeuralGrid;
