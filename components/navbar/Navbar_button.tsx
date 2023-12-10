"use client";

import Link from "next/link";

type Props = {
    name: string;
    href: string;
};

const Navbar_button = ({ name, href }: Props) => {
    return (
        <div className="flex w-full">
            <Link
                href={href}
                className="transition-all duration-500 cursor-pointer"
                scroll={true}
            >
                <p className="">{name}</p>
            </Link>
        </div>
    );
};

export default Navbar_button;
