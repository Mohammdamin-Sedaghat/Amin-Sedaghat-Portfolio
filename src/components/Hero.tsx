import Image from "next/image"
import Link from "next/link"
import Linkedin from "./icons/Linkedin"
import Github from "./icons/Github"
import Resume from "./icons/Resume"
import Instagram from "./icons/Instagram"

export default function Hero() {
    return (
        <header>
            <Image 
                src="/MountainBackground.jpg"
                alt="Black and White Moutain with Serrounding Fog"
                width={5472}
                height={3648}
                className="bgImg"
            />
            <div className="overlay"></div>
            <Image 
                src="/tree.png"
                alt="Black and White Moutain with Serrounding Fog"
                width={1620}
                height={620}
                className="trees"
            />

            <div className="text">
                <h1>Hello, I’m Amin Sedaghat!</h1>
                <h2>I'm a <span>Software Engineer</span></h2>
                <div className="btns">
                    <Link href="#projects">Projects</Link>
                    <Link href="#experiences">Experience</Link>
                </div>
            </div>

            <div className="socials">
                <Link href="/"><Linkedin /></Link>
                <Link href="/"><Github /></Link>
                <Link href="/"><Resume /></Link>
                <Link href="/"><Instagram /></Link>
            </div>
        </header>
    )
} 

// mountain

// amin

// PROJECTS:
// snake_futuristica
// accentify
// harvest-aid

// work
// 1... 
// 2.
// 3.

// inteactive-cool buttons

// crazy background
// - selected intellectually/methodically/strategically

