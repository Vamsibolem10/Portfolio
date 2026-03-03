import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingRings = () => {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.1;
    }
    if (ring2.current) {
      ring2.current.rotation.y = t * 0.25;
      ring2.current.rotation.x = t * 0.15;
    }
    if (ring3.current) {
      ring3.current.rotation.z = t * 0.2;
      ring3.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group position={[3, 0, -2]}>
      <mesh ref={ring1}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

export default FloatingRings;
