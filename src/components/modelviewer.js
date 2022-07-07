import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./gltf-model";



export default function ModelViewer({ modelPath, scale }) {


  return (
    <div style={{ width: "150px", height: "150px" }}>
        <Canvas>
            <ambientLight intensity={0.3} />
            <spotLight position={[20, 15, 10]} angle={0.55} penumbra={1} />
            <pointLight position={[30, 30, 10]} />
            <Suspense fallback={null}>
                <GltfModel scale={scale} modelPath={modelPath} />
            </Suspense>
        </Canvas>
    </div>
  );
};

