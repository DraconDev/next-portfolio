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
    projects: Record<number, Project>;
    skills: Skills;
}

const user: User = {
    fullName: "Adam Nagy",
    introduction:
        "Software engineer focused on full stack development with over 20 years of programming experience",
    email: "adamnagywork@gmail.com",
    projects: {
        // Projects here
    },
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
