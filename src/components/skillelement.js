import React from 'react';
import ModelViewer from './modelviewer';

export default function SkillElement({ mPath, mScale, skillTxt }) {

    return (
        <li>
            <ModelViewer scale={mScale} modelPath={mPath} />
            <span>{skillTxt}</span>
        </li>
    )
}
