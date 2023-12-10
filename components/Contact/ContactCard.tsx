import { default as Link } from "next/link";

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
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-4xl flex justify-between gap-2 items-center w-[250px]">
                    <div className="text-accent">{props.name}</div>
                    {props.children}
                </div>
                {/* {props.text && <p className="text-2xl">{props.link} </p>} */}
            </div>
        </Link>
    );
};

export default ContactCard;
