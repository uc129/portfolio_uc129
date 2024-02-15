import './Scroll.css'
import { animate, motion } from 'framer-motion';
const ScrollSidebar = ({ text, lineHeightEm = 6, length, animationDuration }) => {

    const textArray = Array.from({ length: length }, () => text);

    return <div

        className={` text-7xl sidebar-${animationDuration} font-rubik  w-[124px]  px-[14px] flex flex-col justify-center
     items-center font-bold  uppercase pointer-events-none
      text-pink-400`}
        style={{ lineHeight: lineHeightEm + 'em' }}>

        {textArray.map((text, index) => {
            return <p className=" -rotate-90 " key={index}>{text}</p>
        })}
    </div>
};

export default ScrollSidebar;