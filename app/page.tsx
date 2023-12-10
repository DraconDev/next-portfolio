"use client";
import BgImage from "@/components/BgImage";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Intro from "@/components/intro/Intro";
import MyContext from "@/state/Context";
import { useContext } from "react";

export default function Home() {
    const state = useContext(MyContext);

    return (
        <main className="flex justify-center w-full h-full relative bg-gradient-to-b from-secondary to-primary">
            <BgImage />
            <div className="max-w-5xl items-center w-full h-full">
                <Intro />
                <Skills />
                <Work />
            </div>
        </main>
    );
}
