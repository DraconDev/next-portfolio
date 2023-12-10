"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import SectionContainer from "../layout/SectionContainer";
import SkillCard from "./SkillCard";

type Props = {};

const Skills = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer
            name="Skills"
            id="skills"
        >
            <div className="w-full flex flex-wrap justify-center gap-2">
                {Object.entries(state.skills).map(
                    ([category, skill], index) => (
                        <SkillCard
                            key={index}
                            name={category}
                            items={skill}
                        />
                    )
                )}
            </div>
        </SectionContainer>
    );
};

export default Skills;
