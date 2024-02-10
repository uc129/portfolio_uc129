import './Scroll.css'
const ScrollSidebar = ({ text, lineHeightEm = 6, length }) => {

    const textArray = Array.from({ length: length }, () => text);

    return <div className={`sidebar text-7xl  w-[124px]  px-[14px] flex flex-col justify-center items-center font-bold  uppercase text-pink-400`} style={{ lineHeight: lineHeightEm + 'em' }}>
        {textArray.map((text, index) => {
            return <p className=" -rotate-90 " key={index}>{text}</p>
        })}
    </div>
};

export default ScrollSidebar;