"use client";
import BgImage from "@/components/BgImage";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Intro from "@/components/intro/Intro";
import MyContext from "@/state/Context";
import { useContext } from "react";

export default function Home() {
    const state = useContext(MyContext);

    // const backgroundImage = "/bg_image.png"; // Update with your image path

    // const mainDivStyle = {
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    // };
    return (
        <main
            className="flex justify-center w-full h-full relative bg-gradient-to-b from-secondary to-primary"
            // style={mainDivStyle}
        >
            <BgImage />
            <div className="max-w-5xl items-center w-full h-full">
                <Intro />
                <Skills />
                <Work />
            </div>
        </main>
    );
}
