"use client"
import { GiMountainClimbing } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export default function RandomFunFacts() {
    return (
        <section className="rff">
            <div className="relative flex h-[50rem] flex-col w-full items-center justify-center bg-white dark:bg-black gap-12">
                <div className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#484753_1px,transparent_1px),linear-gradient(to_bottom,#484753_1px,transparent_1px)]",
                    )}/>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <h2 className="z-20">Random Fun Facts About Me</h2>
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
                    <li> 
                        <IoMdCheckmark /> Your Mom
                    </li>
                    <li><GiMountainClimbing /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your Dad</li>
                    <li><HiOutlineRocketLaunch /> Your are very sucky long</li>
                    <li><HiOutlineRocketLaunch /> Hi I am not intrested</li>
                    <li><HiOutlineRocketLaunch /> Your Mom</li>
                </motion.ul>
            </div>
            
        </section>
    )
}