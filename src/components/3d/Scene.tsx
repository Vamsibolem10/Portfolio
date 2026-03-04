import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#f8fafc"]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
        <Preload all />
        <AdaptiveDpr pixelated={false} />
      </Canvas>
    </div>
  );
};

export default Scene;
