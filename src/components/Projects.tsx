    import Image from "next/image";
    import Link from "next/link";
    import { FaPython, FaGithub } from "react-icons/fa";
    import { IoMdOpen } from "react-icons/io";
    import FadeIndiv from "./motion-comp/FadeIndiv";
    import { JSX } from "react";
    import data from "../../public/data.json"
import React from "react";

    const icons:Record<string, JSX.Element> = {
        "FaPython": <FaPython style={{ height: "2rem", width: "auto" }} />
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