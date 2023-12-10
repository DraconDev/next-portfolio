"use client";
import Navbar from "@/components/navbar";
import MyContext from "@/state/Context";
import { useContext } from "react";

export default function Home() {
    const state = useContext(MyContext);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono  text-white">
                <Navbar />
                {state.fullName}
            </div>
        </main>
    );
}
