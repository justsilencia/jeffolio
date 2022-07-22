import React, { useState } from 'react';
import SkillModelViewer from './SkillModelViewer';

export default function SkillElement2({ animateMode, SkillModel, scale, skillTxt, clickEvent, index }) {

    const [animateParams, setAnimateParams] = useState({
        scale: {
            initialScale: scale,
            growActive: false,
            shrinkActive: false,
            growScale: scale.map(axis => axis + .5),
            shrinkScale: scale
        },
        animateMode: animateMode
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
            <SkillModelViewer>
                <SkillModel animateProps={animateParams} scale={scale} />
            </SkillModelViewer>
            <span>{skillTxt}</span>
        </li>
    )
}
