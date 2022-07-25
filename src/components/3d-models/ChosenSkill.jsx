import React from "react";
import SkillModelViewer from "./SkillModelViewer";

export default function ChosenSkill({SkillModel, scale}) {

    return (
        <SkillModelViewer>
            <SkillModel animateProps={{animateMode: 0}} scale={scale} />
        </SkillModelViewer>
    )
}