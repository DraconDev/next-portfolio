"use client";

import { Project } from "@/state/Context";
import Image from "next/image";

type Props = {
    project: Project;
};

const WorkCard = (props: Props) => {
    return (
        <div className="w-full p-2 flex flex-col">
            <h1 className="text-2xl">{props.project.name}</h1>
            <Image
                src={`${props.project.image_path}`}
                alt={`${props.project.name}`}
                width={1200}
                height={800}
                className="object-cover "
            />

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
