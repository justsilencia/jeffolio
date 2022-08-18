import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Loader from './utils/Loader';

export default function SkillModelViewer({children, width, height }) {

    return (
        <div style={{ width: width, height: height, cursor: "pointer" }}>
            <Canvas>
                <ambientLight intensity={0.3} />
                <spotLight position={[20, 15, 10]} angle={0.55} penumbra={1} />
                <pointLight position={[30, 30, 10]} />
                <Suspense fallback={<Loader />}>
                    { children }
                </Suspense>
            </Canvas>
        </div>
    )
}