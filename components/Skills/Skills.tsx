"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import SectionContainer from "../layout/SectionContainer";

type Props = {};

const Skills = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer>
            <h1 className="text-6xl">Skills</h1>
        </SectionContainer>
    );
};

export default Skills;
