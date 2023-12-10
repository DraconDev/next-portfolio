"use client";
import Link from "next/link";

type Props = {
    name: string;
    href: string;
};

const Navbar_button = ({ name, href }: Props) => {
    return (
        <div className="w-full">
            <Link href={href}>
                <div className="w-full">{name}</div>
            </Link>
        </div>
    );
};

export default Navbar_button;
