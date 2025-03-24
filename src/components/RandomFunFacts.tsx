import { GiMountainClimbing } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

export default function RandomFunFacts() {
    return (
        <section className="rff">
            <h2>Random Fun Facts About Me</h2>
            <ul className="facts-cont bg-zinc-800 shadow-[0px_0px_1px_1px_#404040]">
                <li> 
                    <IoMdCheckmark /> Your Mom
                </li>
                <li><GiMountainClimbing /> Your Dad</li>
                <li><HiOutlineRocketLaunch /> Your Dad</li>
                <li><HiOutlineRocketLaunch /> Your Dad</li>
                <li><HiOutlineRocketLaunch /> Your are very sucky long</li>
                <li><HiOutlineRocketLaunch /> Hi I am not intrested</li>
                <li><HiOutlineRocketLaunch /> Your Mom</li>
            </ul>
        </section>
    )
}