import './landing.css'

const LandingPage = () => {


    return (
        <>
            <div className=" w-screen  min-h-[100vh]">

                <div className="absolute w-[200vw] bg-[#282c2f] h-full -z-10 overflow-y-hidden pointer-events-none">
                    <img src="/assets/images/fog2.webp" alt="fog2" className=" w-[200vw] fog_image2 " />
                    <img src="/assets/images/fog1.webp" alt="fog1" className="fog_image1 w-[200vw] " />
                    <img src="/assets/images/fog2.webp" alt="fog2" className="   w-[200vw]  fog_image2 " />
                </div>



                <nav className=' flex w-full justify-between p-4 gap-8'>
                    {/* logo */}
                    <img src="/assets/svg/logo.svg" alt="logo" className='mx-8 w-[6em] ' />

                    {/*  */}
                    <div className=' w-[400px] h-10 overflow-y-hidden ' style={{ textWrap: 'nowrap' }}>
                        <p className='skills w-full text-white font-bold font-mono text-xl'> Search Engine Optimization | Frontend Development | API Development | Responsive Websites </p>
                    </div>
                </nav>


                <div className='flex flex-col items-center mx-auto justify-center w-[96vw] h-screen -mt-24'>

                    <div className='flex flex-col justify-center items-center '>
                        <div className='border-y-2 border-white py-8'>
                            {/* <h1 style={{ lineHeight: 1 }} className='uppercase text-[8rem]  font-bold  text-center text-white'> Fullstack <br /> developer</h1> */}
                            <img src="/assets/svg/fullstack.svg" alt="fullstack" className='w-[24em] md:w-[42em] pointer-events-none' />
                        </div>
                        {/* <h3 className='uppercase text-white text-8xl font-black-ops'>PORTFOLIO</h3>  */}
                        <img src="/assets/svg/portfolio.svg" alt="fullstack" className='mt-4 p-4 w-[22em]  pointer-events-none ' />


                        <div className='text-center text-white pt-12 w-[80%]  lg:w-[70%] mx-auto *:py-4'>
                            <p>Enthusiastic web developer skilled in HTML/CSS, PHP, and the MERN Stack, with expertise in React, TypeScript, and NodeJS.</p>
                            <p> Dedicated to creating innovative and scalable solutions, from dynamic React apps to advanced projects using Express and MongoDB.</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}


export default LandingPage;