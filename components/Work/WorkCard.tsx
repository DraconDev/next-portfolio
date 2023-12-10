"use client";

import { Project } from "@/state/Context";

type Props = {
    project: Project;
};

const WorkCard = (props: Props) => {
    return (
        <div className="w-full p-2 flex flex-col">
            <h1 className="text-2xl">{props.project.name}</h1>
            {/* <Image /> */}
            <div className="text-xl gap-1 flex justify-center">
                {props.project.description.split(" ").map((item, index) => (
                    <div
                        key={index}
                        className="bg-secondary-light rounded-md p-2 text-ac"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkCard;
