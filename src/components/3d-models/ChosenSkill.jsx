import React from "react";
import SkillModelViewer from "./SkillModelViewer";
import { OrbitControls } from "@react-three/drei";

export default function ChosenSkill({SkillModel, scale}) {

    return (
        <SkillModelViewer width="250px" height="250px">
            <OrbitControls />
            <SkillModel animateProps={{animateMode: 0}} scale={scale} />
        </SkillModelViewer>
    )
}