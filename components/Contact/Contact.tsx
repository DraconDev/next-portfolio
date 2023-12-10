"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionContainer from "../layout/SectionContainer";
import ContactCard from "./ContactCard";

type Props = {};

const Contact = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <SectionContainer
            name="Contact"
            id="contact"
        >
            <ContactCard
                name="Email"
                link={state.contact.email}
                text={true}
            >
                <CiMail className="w-10 h-10 gap-2 text-" />
            </ContactCard>
            <ContactCard
                name="LinkedIn"
                link={state.contact.linkedin}
            >
                <FaLinkedin className="w-10 h-10 gap-2 text-" />
            </ContactCard>
            <ContactCard
                name="Github"
                link={state.contact.github}
            >
                <FaGithub className="w-8 h-8 gap-2 text-" />
            </ContactCard>
        </SectionContainer>
    );
};

export default Contact;
