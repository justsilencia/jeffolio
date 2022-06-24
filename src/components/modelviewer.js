import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf-model";



export default function ModelViewer({ modelPath, scale }) {


  return (
    <div style={{ width: "200px", height: "200px" }}>
        <Canvas>
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
                <GltfModel scale={scale} modelPath={modelPath} />
            </Suspense>
        </Canvas>
    </div>
  );
};

