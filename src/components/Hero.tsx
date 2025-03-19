import Image from "next/image"
import Link from "next/link"
import Linkedin from "./icons/Linkedin"
import Github from "./icons/Github"
import Resume from "./icons/Resume"
import Instagram from "./icons/Instagram"
import RotatingText from "./RotatingText"

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
                <h2>I'm a <RotatingText /></h2>
                <div className="btns">
                    <Link href="#projects">Projects</Link>
                    <Link href="#experiences">Experience</Link>
                </div>
            </div>

            <div className="socials">
                <Link href="https://www.linkedin.com/in/mohammadamin-sedaghat/" target="blank">
                    <span>Linkedin</span>
                    <Linkedin />
                </Link>
                <Link href="https://github.com/Mohammdamin-Sedaghat" target="blank">
                    <span>Github</span>
                    <Github />
                </Link>
                <Link href="/">
                    <span>Resume</span>
                    <Resume />
                </Link>
                <Link href="https://www.instagram.com/amin_sed_/" target="blank">
                    <span>Instagram</span>
                    <Instagram />
                </Link>
            </div>
        </header>
    )
}