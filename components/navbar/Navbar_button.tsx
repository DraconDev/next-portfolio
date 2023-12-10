"use client";

import Link from "next/link";

type Props = {
    name: string;
    href: string;
};

const NavbarButton = ({ name, href }: Props) => {
    return (
        <div className="flex ">
            <Link href={href}>{name}</Link>
        </div>
    );
};

export default NavbarButton;
