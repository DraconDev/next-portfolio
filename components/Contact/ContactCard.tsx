import { default as Link } from "next/link";
import { CiMail } from "react-icons/ci";

type Props = {
    name: string;
    link: string;
    text?: boolean;
    children?: React.ReactNode;
};

const ContactCard = (props: Props) => {
    return (
        <Link
            href={props.name === "Email" ? `mailto:${props.link}` : props.link}
            className="flex justify-center items-center w-full"
        >
            <div className="flex flex-col">
                <div className="text-4xl flex justify-center gap-2 items-center">
                    {props.name}
                    {props.children}
                </div>
                {props.text && <p className="text-2xl">{props.link} </p>}
            </div>
        </Link>
    );
};

export default ContactCard;
