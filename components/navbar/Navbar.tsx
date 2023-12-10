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
        <div
            className="z-10   bg-secondary w-full p-2 px-4  border-b-2 border-accent sm:text-base md:text-xl lg:text-2xl flex justify-center  mb-6"
            id="home"
        >
            <div className="flex justify-between  max-w-5xl grow ">
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

            <NavbarIcon
                name="Email"
                link={state.contact.email}
            >
                <CiMail className="w-10 h-10 gap-2 text-" />
            </NavbarIcon>
            <NavbarIcon
                name="Github"
                link={state.contact.github}
            >
                <FaGithub className="w-8 h-8 gap-2 text-" />
            </NavbarIcon>
            <NavbarIcon
                name="LinkedIn"
                link={state.contact.linkedin}
            >
                <FaLinkedin className="w-10 h-10 gap-2 text-" />
            </NavbarIcon>
        </div>
    );
};

export default Navbar;
