import { createContext } from "react";

export type Project = {
    name: string;
    subtitle: string;
    github_link: string;
    description: string;
    host_link: string;
    image_path: string;
};

interface Skills {
    Languages: string[];
    FrontEnd: string[];
    BackEnd: string[];
    Design: string[];
    "Data & API": string[];
    Automation: string[];
    // Version Control: string[]; // Uncomment if needed
}

interface Contact {
    email: string;
    linkedin: string;
    github: string;
}

interface User {
    fullName: string;
    introduction: string;
    contact: Contact;
    projects: Project[];
    skills: Skills;
}

const user: User = {
    fullName: "Adam Nagy",
    introduction:
        "Results-driven software engineer, dedicated to producing effective solutions in full-stack development",
    contact: {
        github: "https://github.com/DraconDev",
        email: "adamnagywork@gmail.com",
        linkedin: "https://www.linkedin.com/in/adam-nagy-62390216b/",
    },
    projects: [
        {
            name: "Media map",
            subtitle: "User driven review and recommendation platform",
            github_link:
                "https://github.com/DraconDev/next-media-connection-map",
            description:
                "Next Typescript Tailwind React-Query Supabase SQL Auth RPC RLS",
            host_link: "https://next-media-connection-map-icwa.vercel.app/",
            image_path: "/thumbs/medconmap.png",
        },
        {
            name: "E-commerce",
            subtitle: "",

            github_link: "https://github.com/DraconDev/next-ecommerce",
            description:
                "Next Typescript Tailwind Jotai Next-Auth Stripe-Payment React-Query",
            host_link: "https://next-ecommerce-ten-sigma.vercel.app/",
            image_path: "/thumbs/estore.png",
        },
        {
            name: "Job Board",
            subtitle: "",

            github_link: "https://github.com/DraconDev/job-board",
            description:
                "Next Typescript Tailwind Zustand Mongo Next-Auth Quill React Query",
            host_link: "https://job-board-azure.vercel.app/",
            image_path: "/thumbs/job_board.png",
        },
        {
            name: "Movie recommendations",
            subtitle: "",

            github_link: "https://github.com/DraconDev/screensaga",
            description: "Next Typescript MUI SWR",
            host_link: "https://screensaga-k8ou.vercel.app/",
            image_path: "/thumbs/screen_saga.png",
        },
        // {
        //     name: "Amazon Store",
        //     github_link: "https://github.com/Nadaga/amazon-clone",
        //     description: "React Redux Typescript SCSS Firebase",
        //     host_link: "https://heuristic-wing-b57de6.netlify.app/",
        //     image_path: "/thumbs/amazonStore.jpg",
        // },
        // {
        //     name: "Movie Site",
        //     github_link: "https://github.com/Nadaga/movie-site",
        //     description: "React Javascript MUI Firebase",
        //     host_link: "https://movie-site-f90c7.web.app/",
        //     image_path: "/thumbs/movieSite.jpg",
        // },
        // {
        //     name: "Amazon Filter",
        //     github_link:
        //         "https://github.com/DraconDev/Amazon-easyshop-filter-scraper",
        //     description: "Next Typescript Tailwind Playwright Zustand",
        //     host_link:
        //         "https://github.com/DraconDev/Amazon-easyshop-filter-scraper",
        //     image_path: "/thumbs/amazon_filter.jpg",
        // },
        {
            name: "This portfolio",
            subtitle: "",
            github_link: "https://github.com/DraconDev/next-portfolio",
            description: "React Next Typescript Context Tailwind",
            host_link: "/",
            image_path: "/thumbs/portfolio.png",
        },
    ],
    skills: {
        Languages: ["Javascript", "Typescript", "Python", "Go", "Rust", "C++"],
        FrontEnd: ["React", "Next", "Redux", "Zustand", "Context"],
        BackEnd: ["Node", "Express", "Next", "Gin", "Flask", "Django"],
        Design: ["Tailwind", "CSS", "SASS", "MUI"],
        "Data & API": [
            "Mongo",
            "PostgreSQL",
            "AWS",
            "Firebase",
            "Supabase",
            "Redis",
        ],
        Automation: ["Playwright", "Selenium"],
        // Version Control: ["Git"], // Uncomment if needed
    },
};

const state = {
    ...user,
};

const MyContext = createContext(state);

export default MyContext;
