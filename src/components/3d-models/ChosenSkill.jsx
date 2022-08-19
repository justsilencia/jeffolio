import React, { useState, useEffect } from "react";
import SkillModelViewer from "./SkillModelViewer";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

export default function ChosenSkill({SkillModel, modScale}) {

    const ref = React.useRef();
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1 : .15,
        config: config.wobbly
    });

    useEffect(() => {
        setActive(!active);
    }, []);
    
    return (
        <SkillModelViewer width="250px" height="250px">
            <OrbitControls enableZoom={false} />
            <animated.mesh scale={scale} ref={ref}>
                <SkillModel animateProps={{animateMode: 0}} scale={modScale} />
            </animated.mesh>
        </SkillModelViewer>
    )
}