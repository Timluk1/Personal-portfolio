import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    github,
    gmail,
    leetcode,
    telegram,
    pizza,
    aichat,
    starwars,
    tajam,
    admin,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "technologies",
        title: "Technologies",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        description:
            "I can build beautiful and scalable SPAs using HTML, CSS, and JavaScript.",
        icon: web,
    },
    {
        title: "Fullstack Developer",
        description:
            "I can handle the entire development process from start to finish",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        description:
            "I can develop server-side logic using Node.js and other frameworks",
        icon: backend,
    },
    {
        title: "Content Creator",
        description:
            "I can create engaging content for your website and social media",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const projects = [
    {
        name: "Pizzeria",
        description:
            "Full-stack web application for a pizzeria with JWT-based authentication and full responsiveness. Users can add pizzas to the cart, remove them, and place orders, also choise type of pizza.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "nginx",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: pizza,
        source_code_link: "https://github.com/Timluk1/Pizzeria",
    },
    {
        name: "Gemini clone",
        description:
            "Frontend application integrated with the Google Gemini API, featuring a code formatter, full responsiveness, theming, and dark mode.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "shadcn ui",
                color: "purple-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: aichat,
        source_code_link: "https://timluk1.github.io/Ai-chat/",
    },
    {
        name: "Starwars site",
        description:
            "Simple site with project and contact pages, also with responsive design.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "yellow-text-gradient",
            },
        ],
        image: starwars,
        source_code_link: "https://timluk1.github.io/Test-work/",
    },
    {
        name: "Company site",
        description:
            "Simple site with project and contact pages, also with responsive design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: tajam,
        source_code_link: "https://timluk1.github.io/Test-work-landing/",
    },
    {
        name: "Admin panel",
        description:
            "Admin panel with users page. Admin can create user, delete, and change user data. in table",
        tags: [
            {
                name: "next",
                color: "purple-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "blue-text-gradient",
            },
            {
                name: "shadcn ui",
                color: "pink-text-gradient",
            },
        ],
        image: admin,
        source_code_link: "https://admin-panel-opal-nu.vercel.app/users",
    },
];

const contacts = [
    {
        icon: github,
        link: "https://github.com/Timluk1",
    },
    {
        icon: gmail,
        link: "mailto:email929232@gmail.com",
    },
    {
        icon: leetcode,
        link: "https://leetcode.com/u/TimurLuk/",
    },
    {
        icon: telegram,
        link: "https://t.me/pastel_52",
    },
];

export { services, technologies, projects, contacts };
