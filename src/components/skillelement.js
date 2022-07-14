import React, { useState } from 'react';
import ModelViewer from './modelviewer';

export default function SkillElement({ mPath, scale, skillTxt, clickEvent, index }) {

    const [animateParams, setAnimateParams] = useState({
        scale: {
            initialScale: scale,
            growActive: false,
            shrinkActive: false,
            growScale: scale.map(axis => axis + .5),
            shrinkScale: scale
        }
    });
    
    return (
        <li onMouseOver={() => setAnimateParams(prevState => {
                prevState.scale.growActive = true;
                prevState.scale.shrinkActive = false;
                return prevState;
            })
        } onMouseLeave={ () => {
            setAnimateParams(prevState => {
                prevState.scale.shrinkActive = true;
                prevState.scale.growActive = false;
                return prevState;
            });
        }}
        onClick={() => clickEvent(index)}
        >
            <ModelViewer animate={animateParams} scale={scale} modelPath={mPath} />
            <span>{skillTxt}</span>
        </li>
    )
}
