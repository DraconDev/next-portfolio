"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import SectionContainer from "../layout/SectionContainer";
import WorkCard from "./WorkCard";

type Props = {};

const Work = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer name="Work">
            <div className="flex flex-col">
                <WorkCard />
            </div>
        </SectionContainer>
    );
};

export default Work;
