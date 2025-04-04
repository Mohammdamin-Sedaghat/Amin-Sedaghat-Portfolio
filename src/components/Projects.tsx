import { JSX } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIndiv from "./motion-comp/FadeIndiv";
import data from "../../public/data.json"

import { FaPython, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoMdOpen } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const icons:Record<string, JSX.Element> = {
    "FaPython": <FaPython style={{ height: "2rem", width: "auto" }} />,
    "FaHtml5": <FaHtml5 style={{ height: "2rem", width: "auto" }} />,
    "FaCss3Alt": <FaCss3Alt style={{ height: "2rem", width: "auto" }} />,
    "IoLogoJavascript": <IoLogoJavascript style={{ height: "2rem", width: "auto" }} />,
    "SiTypescript": <SiTypescript style={{ height: "1.4rem", width: "auto" }} />,
    "RiNextjsFill": <RiNextjsFill style={{ height: "2rem", width: "auto" }} />,
    "FaNodeJs": <FaNodeJs style={{ height: "1.8rem", width: "auto" }} />,
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
                                target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                            <a href={item["github-link"]} target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                        </div>
                        <Image src={item["image-path"]} alt={item["image-alt"]} width={398} height={289} />
                        <Link className="project-details" href={item["project-link"]}>
                            <h6>{item.Header}</h6>
                            <p>{item.description}</p>
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