import React from 'react';
import { Html } from '@react-three/drei';

export default function Loader() {
    return (
        <>
        <Html
            prepend
            center>
            <div className="loader">
                Loader...
            </div>
        </Html>
        </>
    )
}