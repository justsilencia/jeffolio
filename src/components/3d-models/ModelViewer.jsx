import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';

export default function ModelViewer({children, width, height}) {

    

    return (
        <div style={{ width: "250px", height: "250px" }}>
            <Canvas>
                <ambientLight intensity={0.3} />
                <spotLight position={[20, 15, 10]} angle={0.55} penumbra={1} />
                <pointLight position={[30, 30, 10]} />
                <Suspense fallback={null}>
                    { children }
                </Suspense>
            </Canvas>
        </div>
    )
}