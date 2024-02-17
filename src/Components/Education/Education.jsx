import { EducationData } from '../../utils/educationData';
import './Education.css';
import ListBox from '../List/ListBox';
import { useRef, useState } from 'react';
import { SkillsData } from '../../utils/skillsData';
import { motion } from 'framer-motion';



const Education = () => {

    const [cursorImage, setCursorImage] = useState('');
    const listRef = useRef(null);



    const handleMouseMove = (e, item, index) => {

        const { current } = listRef;
        if (!current) return;


        const boxWidth = current.offsetWidth;
        const boxHeight = current.offsetHeight;

        const ratio = boxWidth / boxHeight;
        setCursorImage(item.logo);
        const cursor = document.getElementById('cursor-image');
        if (!cursor) return;
        const x_pos = e.clientX;
        const y_pos = e.clientY;

        cursor.style.top = `${y_pos / 1.2}px`;
        cursor.style.transform = `translate(${x_pos - (boxWidth / (0.5 * ratio))}px, ${y_pos / 8}px)`
    }


    return (
        <div className=" text-white  " style={{ background: "url('/assets/images/gif/noise.gif')" }} >

            <div className=" w-[2420px] pr-44 flex items-center z-10 h-screen bg-[#202428] bg-opacity-95">

                <div className="w-[1200px] h-[80%] p-14 flex flex-col justify-between px-24">

                    <h1 className="font-bold font-rubik text-[3.4em] tracking-tighter">Currently based in
                        <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }} className="font-thin" > Sydney</span>
                    </h1>

                    <div className="flex  justify-between">

                        <p className="w-[35%] md:text-justify">Providing fullstack development and testing services at Certis,
                            I collaborate remotely with a team of awesome people from different corners of the world.
                        </p>
                        <p className="w-[35%] md:text-justify">
                            Writing my thesis on the dynamics of user motivation in Web3,
                            I investigate how blockchain and gamification are reshaping user engagement and incentive structures.
                        </p>
                    </div>
                </div>

                {/* Text Scroll */}
                <div className="h-full w-[30vw] min-w-[740px]  flex flex-col">

                    <div className="flex flex-col justify-between  bg-pink-300 
                    h-[30%] font-black font-rubik text-white uppercase 
                    w-full overflow-hidden pt-4 *:text-6xl *:flex *:gap-8">

                        <p className="goLeft">
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                        </p>
                        <p className="goRight">
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                        </p>

                        <p className="goLeft ">
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > Education</span>
                            Education
                        </p>

                    </div>

                    {/* Study */}
                    <div className='h-[70%]  w-full '>
                        <h1 className='text-[1.7em] font-black pt-4  '>STUDY</h1>

                        <div className='flex flex-col justify-between gap-4 bg-white'>

                            {EducationData.map((item, index) =>
                                <div ref={listRef} key={index}
                                    onMouseEnter={() => document.getElementById('cursor-image').classList.remove('hidden')}
                                    onMouseLeave={() => document.getElementById('cursor-image').classList.add('hidden')}
                                    onMouseMove={(e) => handleMouseMove(e, item, index)}
                                >
                                    <img id='cursor-image' src={cursorImage} alt="logo" className='hidden transition-transform duration-1000  absolute w-24 opacity-90 pointer-events-none' />

                                    <ListBox date={item.date} description={item.degree} title={item.school} location={item.location} image={item.logo} />
                                </div>
                            )}
                        </div>

                    </div>

                </div>

                <div className=' ml-[200px] flex justify-center items-center min-w-[300px] w-[40vw] '>
                    <div className='skills-list w-full h-full flex gap-12 flex-wrap justify-center items-center '>
                        {SkillsData.map((skill, index) =>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 5, delay: 0.5 * index, repeat: Infinity, repeatType: 'reverse' }}
                                className=''> {skill.name} </motion.div>)}
                    </div>

                </div>

            </div >
        </div >
    )

}


export default Education;