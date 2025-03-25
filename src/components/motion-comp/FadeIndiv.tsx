"use client";
import * as motion from "motion/react-client"

export default function FadeIndiv({ className, children }:
    {
        className:string;
        children:React.ReactNode;
    }){
        return (
            <motion.div 
                className={className}
                initial={{opacity:0, scale:0, transform:"translateY(60%)"}}
                whileInView={{opacity:1, scale:1, transform:"translateY(0)"}}
                transition={{
                    duration: 0.4,
                    ease:"easeOut"
                }}
                viewport={{once:true}}
            >
                {children}
            </motion.div>
        )
}