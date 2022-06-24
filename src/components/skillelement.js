import React from 'react';
import ModelViewer from './modelviewer';

export default function SkillElement({ mPath, mScale }) {

    return (
        <li>
            <ModelViewer scale={mScale} modelPath={mPath} />
            <span>Test</span>
        </li>
    )
}
