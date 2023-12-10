"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";

type Props = {};

const Intro = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div className="flex content-center">
            <h1 className="text-xl">{state.fullName}</h1>
            <div className="">{state.introduction}</div>
        </div>
    );
};

export default Intro;
