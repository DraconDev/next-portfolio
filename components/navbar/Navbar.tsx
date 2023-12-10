"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavbarIcon from "./NavbarIcon";
import Navbar_button from "./Navbar_button";

type Props = {};

type Options = {
    [key: string]: string;
};

const options: Options = {
    Projects: "#work",
    Skills: "#skills",
    // Contact: "#contact",
};

const Navbar = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div className="z-20 bg-secondary w-full p-2 px-4  border-b-2 border-accent sm:text-base md:text-xl lg:text-2xl flex justify-center fixed top-0 left-0 ">
            <div className="flex justify-between  max-w-5xl grow items-center ">
                <Navbar_button
                    href="#home"
                    name={state.fullName}
                />
                <div className="flex gap-2 ">
                    <NavbarIcon
                        name="Github"
                        link={state.contact.github}
                    >
                        <FaGithub className="w-7 h-7 gap-2" />
                    </NavbarIcon>
                    <NavbarIcon
                        name="LinkedIn"
                        link={state.contact.linkedin}
                    >
                        <FaLinkedin className="w-7 h-7 gap-2" />
                    </NavbarIcon>
                    <NavbarIcon
                        name="Email"
                        link={state.contact.email}
                    >
                        <CiMail className="w-8 h-8 gap-2" />
                    </NavbarIcon>
                </div>
                <div className="flex gap-2">
                    {Object.keys(options).map((key) => (
                        <Navbar_button
                            key={key}
                            name={key}
                            href={options[key]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
