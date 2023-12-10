"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import SectionContainer from "../layout/SectionContainer";
import SkillCard from "./SkillCard";

type Props = {};

const Skills = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer>
            <h1 className="text-6xl">Skills</h1>
            {Object.entries(state.skills).map(([category, skill], index) => (
                <SkillCard
                    key={index}
                    name={category}
                    items={skill}
                />
            ))}
        </SectionContainer>
    );
};

export default Skills;
