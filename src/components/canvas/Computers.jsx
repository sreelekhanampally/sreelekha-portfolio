// Adapted from Bhanu-1233/project_3D_developer_portfolio, commit 4476f079.
// Model: Gaming Desktop PC by Yolala1232, CC BY 4.0. See public/desktop_pc/license.txt.
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="scene-loader" role="status">
        <span className="loader-ring" />
        <span>{Math.round(progress)}% · loading desk</span>
      </div>
    </Html>
  );
}
function Computers({ rotation }) {
  const computer = useGLTF(`${import.meta.env.BASE_URL}desktop_pc/scene.gltf`);
  return (
    <group rotation={[0, rotation, 0]}>
      <hemisphereLight intensity={1.1} groundColor="#18251c" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.16}
        penumbra={1}
        intensity={1800}
      />
      <pointLight position={[8, 5, 4]} intensity={180} color="#d4f994" />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.1, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
}
export default function ComputersCanvas({ rotation = 0 }) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 29 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      fallback={
        <div className="scene-fallback">
          3D is unavailable here. Use the project previews instead.
        </div>
      }
      style={{ touchAction: "pan-y" }}
      aria-label="Interactive 3D desktop workstation"
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers rotation={rotation} />
      </Suspense>
    </Canvas>
  );
}
