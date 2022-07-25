import React, { useState } from 'react';
import SkillModelViewer from './SkillModelViewer';

export default function SkillElement({ SkillModel, scale, skillTxt, clickEvent, index, width, height }) {

    const [animateParams, setAnimateParams] = useState({
        scale: {
            initialScale: scale,
            growActive: false,
            shrinkActive: false,
            growScale: scale.map(axis => axis + .5),
            shrinkScale: scale
        },
        animateMode: 1
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
            <SkillModelViewer width={width} height={height}>
                <SkillModel animateProps={animateParams} />
            </SkillModelViewer>
            <span>{skillTxt}</span>
        </li>
    )
}
