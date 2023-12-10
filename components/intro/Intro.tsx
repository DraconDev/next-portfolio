"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
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
            <div className="w-full h-full justify-center items-center flex ">
                <div className="gap-2 flex flex-col justify-center items-center text-center bg-primary bg-opacity-50 rounded-lg p-2 ">
                    {/* <h1 className="text-4xl">{state.fullName}</h1> */}
                    <h2 className="text-2xl">{state.introduction}</h2>
                    <button>
                        <FaChevronDown className="w-14 h-14" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intro;
