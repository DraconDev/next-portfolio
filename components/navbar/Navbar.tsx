"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import Navbar_button from "./Navbar_button";

type Props = {};

type Options = {
    [key: string]: string;
};

const options: Options = {
    Projects: "#projects",
    Skills: "#skills",
    Contact: "#contact",
};

const Navbar = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div
            className="z-10   bg-secondary w-full p-2 px-4  border-b-2 border-accent sm:text-sm md:text-xl lg:text-2xl flex justify-center "
            id="home"
        >
            <div className="flex justify-between  max-w-5xl grow">
                <Navbar_button
                    href="#home"
                    name={state.fullName}
                />
                <div className="flex gap-3">
                    {Object.keys(options).map((key) => (
                        <Navbar_button
                            key={key}
                            name={key}
                            href={options[key]}
                        />
                    ))}
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Navbar;
