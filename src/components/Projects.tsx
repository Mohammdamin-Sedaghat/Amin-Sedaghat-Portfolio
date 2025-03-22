import Image from "next/image";
import { FaPython, FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="card-cont">
                <div className="card ring ring-gray-600">
                    <div className="links">
                        <a href="https://github.com/uwdbc/uwdbc-prismic" target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                        <a href="https://uwdbc.com/" target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                    </div>
                    <Image src="/projects/uwdbc.png" alt="UWDBC website Photo" width={398} height={289} />
                    <div className="project-details">
                        <h6>UWDBC</h6>
                        <p>UWDBC is the perfect website for you family to plan happy vaction to your mom</p>
                        <div className="tech-stack">
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                        </div>
                    </div>
                </div>

                <div className="card ring ring-gray-600">
                    <div className="links">
                        <a href="https://github.com/uwdbc/uwdbc-prismic" target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                        <a href="https://uwdbc.com/" target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                    </div>
                    <Image src="/projects/uwdbc.png" alt="UWDBC website Photo" width={398} height={289} />
                    <div className="project-details">
                        <h6>UWDBC</h6>
                        <p>UWDBC is the perfect website for you family to plan happy vaction to your mom</p>
                        <div className="tech-stack">
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                        </div>
                    </div>
                </div>

                <div className="card ring ring-gray-600">
                    <div className="links">
                        <a href="https://github.com/uwdbc/uwdbc-prismic" target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                        <a href="https://uwdbc.com/" target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                    </div>
                    <Image src="/projects/uwdbc.png" alt="UWDBC website Photo" width={398} height={289} />
                    <div className="project-details">
                        <h6>UWDBC</h6>
                        <p>UWDBC is the perfect website for you family to plan happy vaction to your mom</p>
                        <div className="tech-stack">
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                        </div>
                    </div>
                </div>

                <div className="card ring ring-gray-600">
                    <div className="links">
                        <a href="https://github.com/uwdbc/uwdbc-prismic" target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                        <a href="https://uwdbc.com/" target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                    </div>
                    <Image src="/projects/uwdbc.png" alt="UWDBC website Photo" width={398} height={289} />
                    <div className="project-details">
                        <h6>UWDBC</h6>
                        <p>UWDBC is the perfect website for you family to plan happy vaction to your mom</p>
                        <div className="tech-stack">
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                        </div>
                    </div>
                </div>

                <div className="card ring ring-gray-600">
                    <div className="links">
                        <a href="https://github.com/uwdbc/uwdbc-prismic" target="blank"><FaGithub style={{ height: "1.3rem", width: "auto" }} /></a>
                        <a href="https://uwdbc.com/" target="blank"><IoMdOpen style={{ height: "1.3rem", width: "auto" }} /></a>
                    </div>
                    <Image src="/projects/uwdbc.png" alt="UWDBC website Photo" width={398} height={289} />
                    <div className="project-details">
                        <h6>UWDBC</h6>
                        <p>UWDBC is the perfect website for you family to plan happy vaction to your mom</p>
                        <div className="tech-stack">
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                            <FaPython style={{ height: "2rem", width: "auto" }}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}