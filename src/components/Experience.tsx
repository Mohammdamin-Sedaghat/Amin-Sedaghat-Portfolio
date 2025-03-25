import { TracingBeam } from "./ui/tracing-beam"
import FadeIndiv from "./motion-comp/FadeIndiv"
import data from "../../public/data.json"

export default function Experience() {
    return (
        <section className="experiences" id="experiences">
            <h2>Experiences</h2>
            <TracingBeam>
                <div className="experience-cont">
                    {data.experiences.data.map((item, index)=> (
                        <FadeIndiv className="experience" key={index}>
                            <div className="top">
                                <h6 className="position">
                                    {item.title}
                                </h6>
                                <div className="midsection">
                                    <span className="loc">{item.location}</span>
                                    <span className="date">{item.date}</span>
                                </div>
                            </div>
                            
                            <ul className="description list-disc">
                                {item.bulletPoints.map((point,i)=>(
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </FadeIndiv>
                    ))}
                    
                </div>
            </TracingBeam>
            
        </section>
    )
}