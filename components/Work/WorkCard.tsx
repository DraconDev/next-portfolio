"use client";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/state/Context";
import Image from "next/image";
import Link from "next/link";

type Props = {
    project: Project;
};

const WorkCard = (props: Props) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-center gap-3 items-center p-1">
                <div className="text-xl md:text-3xl">{props.project.name}</div>
                <Link
                    href={props.project.github_link}
                    className=" "
                >
                    <FaGithub className="w-8 h-8" />
                </Link>
            </div>
            <Link href={props.project.host_link}>
                <Image
                    src={`${props.project.image_path}`}
                    alt={`${props.project.name}`}
                    width={1200}
                    height={800}
                    className="object-cover border-2 border-secondary"
                />
            </Link>
            <div className="sm:text-sm md:text-xl gap-1 flex justify-center p-2 pb-6 flex-wrap">
                {props.project.description.split(" ").map((item, index) => (
                    <div
                        key={index}
                        className="bg-secondary rounded-md p-1 text px-2"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkCard;
