import React, { JSX } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

//importing the icons
import {
    FaPython, FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs,
    FaDocker
} from "react-icons/fa";
import {
    SiC, SiCplusplus, SiTypescript, SiGnubash, SiRacket, SiNextdotjs, SiExpress, SiVite, SiPandas, SiNumpy, SiScikitlearn, SiScrapy, SiHaskell, SiMongodb, SiJupyter, SiVercel, SiFigma, SiPrismic,
    SiFlask,
    SiPostgresql,
    SiSqlalchemy
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skills: {
    icon: JSX.Element;
    name: string;
}[] = [
        { icon: <FaPython style={{ height: "2.1rem", width: "auto" }} />, name: "Python" },
        { icon: <SiC style={{ height: "2.1rem", width: "auto" }} />, name: "C" },
        { icon: <SiCplusplus style={{ height: "2.1rem", width: "auto" }} />, name: "C++" },
        { icon: <FaJava style={{ height: "2.1rem", width: "auto" }} />, name: "Java" },
        { icon: <VscAzure style={{ height: "2.1rem", width: "auto" }} />, name: "Azure" },
        { icon: <FaJs style={{ height: "2.1rem", width: "auto" }} />, name: "JavaScript" },
        { icon: <FaDocker style={{ height: "2.1rem", width: "auto" }} />, name: "Docker" },
        { icon: <SiTypescript style={{ height: "2.1rem", width: "auto" }} />, name: "TypeScript" },
        { icon: <FaHtml5 style={{ height: "2.1rem", width: "auto" }} />, name: "HTML" },
        { icon: <FaCss3Alt style={{ height: "2.1rem", width: "auto" }} />, name: "CSS" },
        { icon: <SiGnubash style={{ height: "2.1rem", width: "auto" }} />, name: "Bash" },
        { icon: <SiHaskell style={{ height: "2.1rem", width: "auto" }} />, name: "Haskell" },
        { icon: <SiRacket style={{ height: "2.1rem", width: "auto" }} />, name: "Racket" },
        { icon: <SiFlask style={{ height: "2.1rem", width: "auto" }} />, name: "Flask" },
        { icon: <SiPostgresql style={{ height: "2.1rem", width: "auto" }} />, name: "Postgres" },
        { icon: <SiSqlalchemy style={{ height: "2.1rem", width: "auto" }} />, name: "SQLAlchemy" },
        { icon: <SiPandas style={{ height: "2.1rem", width: "auto" }} />, name: "Pandas" },
        { icon: <FaReact style={{ height: "2.1rem", width: "auto" }} />, name: "React" },
        { icon: <SiNextdotjs style={{ height: "2.1rem", width: "auto" }} />, name: "Next.js" },
        { icon: <SiNumpy style={{ height: "2.1rem", width: "auto" }} />, name: "NumPy" },
        { icon: <SiScikitlearn style={{ height: "2.1rem", width: "auto" }} />, name: "Scikit-Learn" },
        { icon: <FaNodeJs style={{ height: "2.1rem", width: "auto" }} />, name: "Node.js" },
        { icon: <SiExpress style={{ height: "2.1rem", width: "auto" }} />, name: "Express.js" },
        { icon: <SiVite style={{ height: "2.1rem", width: "auto" }} />, name: "Vite" },
        { icon: <SiScrapy style={{ height: "2.1rem", width: "auto" }} />, name: "Scrapy" },
        { icon: <FaGitAlt style={{ height: "2.1rem", width: "auto" }} />, name: "Git" },
        { icon: <FaGithub style={{ height: "2.1rem", width: "auto" }} />, name: "GitHub" },
        { icon: <SiMongodb style={{ height: "2.1rem", width: "auto" }} />, name: "MongoDB" },
        { icon: <SiPrismic style={{ height: "2.1rem", width: "auto" }} />, name: "Prismic.io" },
        { icon: <SiFigma style={{ height: "2.1rem", width: "auto" }} />, name: "Figma" },
        { icon: <SiJupyter style={{ height: "2.1rem", width: "auto" }} />, name: "Jupyter Notebook" },
        { icon: <SiVercel style={{ height: "2.1rem", width: "auto" }} />, name: "Vercel" }
    ];

export default function Skills() {
    return (
        <section className="flex flex-col items-center text-center mt-20 gap-8 justify-center md:mx-[12vw]">
            <h2>Skills</h2>
            <div className="w-full rounded-md flex flex-col antialiased bg-[#121212] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={skills}
                    direction="right"
                    speed="slow"
                    pauseOnHover={false}
                />
            </div>
            <div className="w-full rounded-md flex flex-col antialiased bg-[#121212] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={skills}
                    direction="left"
                    speed="slow"
                    pauseOnHover={false}
                />
            </div>
        </section>


    );
}