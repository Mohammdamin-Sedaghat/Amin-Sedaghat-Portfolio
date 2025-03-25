"use client"
import { GiMountainClimbing, GiSpikedDragonHead } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoDiamond } from "react-icons/io5";

import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import data from "../../public/data.json"
import { JSX } from "react";

const icons:Record<string, JSX.Element> = {
    "GiMountainClimbing": <GiMountainClimbing />,
    "HiOutlineTrophy": <HiOutlineTrophy />,
    "GiSpikedDragonHead": <GiSpikedDragonHead />,
    "IoDiamond": <IoDiamond />
}

export default function RandomFunFacts() {
    return (
        <section className="rff">
            <div className="relative flex h-[auto] py-36 md:py-20 flex-col w-full items-center justify-center gap-12">
                <div className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "dark:[background-image:linear-gradient(to_right,#3d3d3d_1px,transparent_1px),linear-gradient(to_bottom,#3d3d3d_1px,transparent_1px)]",
                    )}/>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#121212]"></div>
                <h2 className="z-20">Fun Facts About Me</h2>
                <motion.ul 
                    initial={{opacity:0, scale:0, transform:"translateY(60%)"}}
                    whileInView={{opacity:1, scale:1, transform:"translateY(0)"}}
                    transition={{
                        duration: 0.4,
                        ease:"easeOut"
                    }}
                    viewport={{once:true}}
                    className="facts-cont bg-zinc-800 shadow-[0px_0px_1px_1px_#404040] z-20"
                >
                    {data.RandomFunFacts.data.map((item, index)=> (
                        <li key={index}>
                           {icons[item.icon]} {item.description}
                        </li>
                    ))}
                    {/* <li><IoMdCheckmark /> Your Mom</li>
                    <li><GiMountainClimbing /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your are very sucky long</li>
                    <li><HiOutlineRocketLaunch /> Hi I am not intrested</li>
                    <li><HiOutlineRocketLaunch /> Your Mom</li> */}
                </motion.ul>
            </div>
            
        </section>
    )
}