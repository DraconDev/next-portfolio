import Link from "next/link";

type Props = {
    name: string;
    link: string;
    children: React.ReactNode;
};

const NavbarIcon = (props: Props) => {
    return (
        <Link
            href={props.name === "Email" ? `mailto:${props.link}` : props.link}
            className="flex justify-center items-center"
        >
            {props.children}
        </Link>
    );
};

export default NavbarIcon;
