"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
type Props = {};

const Intro = (props: Props) => {
    const state = useContext(MyContext);

    return (
        <div className="flex h-full">
            {/* <Image
                src="/bg_image.png"
                alt="monitor"
                className="object-cover"
                width={100}
                height={100}
            /> */}
            <div className="gap-2 flex flex-col justify-center items-center grow w-full h-full">
                <h1 className="text-4xl">{state.fullName}</h1>
                <h2 className="text-2xl">{state.introduction}</h2>
            </div>
        </div>
    );
};

export default Intro;
