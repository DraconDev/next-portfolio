import { createContext } from "react";

interface Project {
    name: string;
    github_link: string;
    description: string;
    host_link: string;
    image_path: string;
}

interface Skills {
    Languages: string[];
    FrontEnd: string[];
    BackEnd: string[];
    Design: string[];
    "Data & API": string[];
    Automation: string[];
    // Version Control: string[]; // Uncomment if needed
}

interface User {
    fullName: string;
    introduction: string;
    email: string;
    projects: Project[];
    skills: Skills;
}

const user: User = {
    fullName: "Adam Nagy",
    introduction:
        "Software engineer focused on full stack development with over 20 years of programming experience",
    email: "adamnagywork@gmail.com",
    projects: [
        {
            name: "Job Board",
            github_link: "https://github.com/DraconDev/job-board",
            description: "Next Typescript Tailwind Zustand Mongo Next-Auth",
            host_link: "https://job-board-azure.vercel.app/",
            image_path: "images/thumbs/job_board.png",
        },
        {
            name: "Movie recommendations",
            github_link: "https://github.com/DraconDev/screensaga",
            description: "Next Typescript MUI SWR",
            host_link: "https://screensaga-k8ou.vercel.app/",
            image_path: "images/thumbs/screen_saga.jpg",
        },
        {
            name: "Amazon Store",
            github_link: "https://github.com/Nadaga/amazon-clone",
            description: "React Redux Typescript SCSS Firebase",
            host_link: "https://heuristic-wing-b57de6.netlify.app/",
            image_path: "images/thumbs/amazonStore.jpg",
        },
        {
            name: "Movie Site",
            github_link: "https://github.com/Nadaga/movie-site",
            description: "React Javascript MUI Firebase",
            host_link: "https://movie-site-f90c7.web.app/",
            image_path: "images/thumbs/movieSite.jpg",
        },
        {
            name: "Amazon Filter",
            github_link:
                "https://github.com/DraconDev/Amazon-easyshop-filter-scraper",
            description: "Next Typescript Tailwind Playwright Zustand",
            host_link:
                "https://github.com/DraconDev/Amazon-easyshop-filter-scraper",
            image_path: "images/thumbs/amazon_filter.jpg",
        },
        {
            name: "This portfolio",
            github_link: "https://github.com/DraconDev/portfolio_flask",
            description: "Python Flask Jinja",
            host_link: "/",
            image_path: "images/thumbs/portfolio.jpg",
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
