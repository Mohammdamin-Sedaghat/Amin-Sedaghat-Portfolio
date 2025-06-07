import { JSX } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIndiv from "./motion-comp/FadeIndiv";
import data from "../../public/data.json"

import { FaPython, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlask, SiPytorch, SiRacket, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { PiLink } from "react-icons/pi";

const icons:Record<string, JSX.Element> = {
    "FaPython": <FaPython style={{ height: "2rem", width: "auto" }} />,
    "FaHtml5": <FaHtml5 style={{ height: "2rem", width: "auto" }} />,
    "FaCss3Alt": <FaCss3Alt style={{ height: "2rem", width: "auto" }} />,
    "IoLogoJavascript": <IoLogoJavascript style={{ height: "2rem", width: "auto" }} />,
    "SiTypescript": <SiTypescript style={{ height: "1.4rem", width: "auto" }} />,
    "RiNextjsFill": <RiNextjsFill style={{ height: "2rem", width: "auto" }} />,
    "FaNodeJs": <FaNodeJs style={{ height: "1.8rem", width: "auto" }} />,
    "SiRacket": <SiRacket style={{ height: "1.8rem", width: "auto" }} />,
    "SiFlask": <SiFlask style={{ height: "1.8rem", width: "auto" }} />,
    "DiPostgresql": <DiPostgresql style={{ height: "1.8rem", width: "auto" }} />,
    "FaDocker": <FaDocker style={{ height: "1.8rem", width: "auto" }} />,
    "SiPytorch": <SiPytorch style={{ height: "1.8rem", width: "auto" }} />,
}

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="card-cont">
                {data.projects.data.map((item, index)=>(
                    <FadeIndiv key={index} className="card ring ring-gray-600">
                        <div className="links">
                            <a href={item["project-link"]}
                                target="blank"><FaGithub style={{ height: "1.3rem", width: "auto", fill: (item.col == "light" ? "#FFF" : "#000") }} /></a>
                            <a href={item["github-link"]} target="blank"><PiLink style={{ height: "1.3rem", width: "auto", fill: (item.col == "light" ? "#FFF" : "#000") }} /></a>
                        </div>
                        <Image src={item["image-path"]} alt={item["image-alt"]} width={398} height={289} />
                        <Link className="project-details" href={item["project-link"]}>
                            <div className="container">
                                <h6>{item.Header}</h6>
                                <p>{item.description}</p>
                            </div>
                            <div className="tech-stack">
                                {item["tech-stack"].map((tech, i)=> (
                                    <React.Fragment key={i}>
                                        {icons[tech]}
                                    </React.Fragment>
                                ))}
                            </div>
                        </Link>
                    </FadeIndiv>
                ))}
            </div>
        </section>
    )
}
