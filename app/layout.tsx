import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Adam Nagy portfolio",
    description: "Check out my work",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${raleway.className} bg-primary text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
