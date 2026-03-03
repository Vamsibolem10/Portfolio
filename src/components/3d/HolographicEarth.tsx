import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HolographicEarth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.Points>(null);

  const nodePositions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 3);
    return geo.attributes.position.array as Float32Array;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.15;
      wireRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.y = t * 0.15;
      nodesRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group position={[3, 0, -2]}>
      {/* Wireframe sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 3]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Glowing edges */}
      <lineSegments ref={wireRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(2.01, 2)]} />
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </lineSegments>

      {/* Network nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#06b6d4"
          size={0.06}
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.03}
        />
      </mesh>
    </group>
  );
};

export default HolographicEarth;
