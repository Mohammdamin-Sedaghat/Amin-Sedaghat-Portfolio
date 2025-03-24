"use client";
import * as motion from "motion/react-client"

interface HeaderProps {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string;
}

export default function Header({type, children, className=""}: HeaderProps) {
    const MotionTag = motion[type] as React.ElementType;

    return (
        <MotionTag
            initial={{opacity:0, transform:"translateY(80%)", scale:0}}
            whileInView={{opacity:1,transform:"translateY(0)", scale:1}}
            transition={{duration:0.4, ease:"easeOut"}}
            viewport={{once:true}}
            className={className}
        >{children}</MotionTag>
    )
}