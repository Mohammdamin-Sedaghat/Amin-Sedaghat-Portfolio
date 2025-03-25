import React from "react"
import data from "../../public/data.json"

export default function About() {

    return (
        <div className="about" id="about">
            <h2>About Me</h2>
            <p>
                {data.aboutMe.paragraphs.map((item, index)=>(
                <React.Fragment key={index}>
                    {item}
                    <br />
                    <br />
                </React.Fragment>
                ))}
            </p>
        </div>
    )
}