import Image from "next/image"
import style from "./Hero.module.css"

export default function Hero() {
    return (
        <header className={style.header}>
            <Image 
                src="/MountainBackground.jpg"
                alt="Black and White Moutain with Serrounding Fog"
                width={5472}
                height={3648}
                className={style.bgImg}
            />
            <div className={style.overlay}></div>
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

