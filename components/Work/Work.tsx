"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import SectionContainer from "../layout/SectionContainer";
import WorkCard from "./WorkCard";

type Props = {};

const Work = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer
            name="Work"
            id="work"
        >
            <div
                className="flex flex-col"
                id="work"
            >
                {state.projects.map((project, index) => (
                    <WorkCard
                        project={project}
                        key={index}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Work;
