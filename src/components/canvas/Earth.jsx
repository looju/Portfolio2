import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,Points, PointMaterial, } from "@react-three/drei";
import { Stars } from "./Stars";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        // fov: 45,
        // near: 0.1,
        // far: 200,
        position: [0,0,1],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
       <Earth/>
        <Stars />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
