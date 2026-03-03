import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import ParticleField from "./ParticleField";
import HolographicEarth from "./HolographicEarth";
import NeuralGrid from "./NeuralGrid";
import FloatingRings from "./FloatingRings";

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
           <ambientLight intensity={0.08} />
           <pointLight position={[10, 10, 10]} intensity={0.3} color="#22c55e" />
           <pointLight position={[-10, -10, -10]} intensity={0.2} color="#06b6d4" />

          <ParticleField count={1500} />
          <HolographicEarth />
          <NeuralGrid />
          <FloatingRings />

          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>

          <AdaptiveDpr pixelated />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
