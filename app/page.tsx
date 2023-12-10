"use client";
import MyContext from "@/state/Context";
import { useContext } from "react";

export default function Home() {
    const state = useContext(MyContext);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-">
            <div
                className=" w-full max-w-5xl items-center justify-between  text-white"
                
            >
                {state.fullName}
                <div className="h-[4000px]">asd</div>
            </div>
        </main>
    );
}
