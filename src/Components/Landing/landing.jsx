import './landing.css'

const LandingPage = () => {


    return (
        <>
            <div className="  min-w-[96vw] min-h-[100vh] overflow-hidden ">

                <div className="absolute max-w-[96vw] w-[96vw] bg-[#282c2f] h-full -z-10 overflow-y-hidden">
                    <img src="/assets/images/fog2.webp" alt="fog2" className=" relative  min-w-[600vw] min-h-[200vh] fog_image2 " />
                    <img src="/assets/images/fog1.webp" alt="fog1" className="fog_image1 min-w-[300vw] min-h-[200vh]" />
                    <img src="/assets/images/fog2.webp" alt="fog2" className=" relative  min-w-[600vw] min-h-[200vh] fog_image2 " />

                    {/* <img src="/assets/images/fog2.webp" alt="fog2" className=" fog relative   fog-layer-opacity-1 " />
                    <img src="/assets/images/fog1.webp" alt="fog1" className="  fog-layer-opacity2" />
                    <img src="/assets/images/fog2.webp" alt="fog2" className=" fog relative fog-layer-opacity-3 " /> */}
                </div>



                <nav className=' flex w-full justify-between p-4'>
                    <img src="/assets/svg/logo.svg" alt="logo" className='ml-8 w-[12em]' />
                    <div className=' w-[400px] h-10 overflow-y-hidden ' style={{ textWrap: 'nowrap' }}>
                        <p className='skills w-full text-white  text-2xl'> Search Engine Optimization Frontend Development Responsive Websites </p>
                    </div>
                </nav>


                <div className='flex flex-col items-center mx-auto justify-center w-[96vw] h-screen -mt-24'>

                    <div className='flex flex-col justify-center items-center '>
                        <div className='border-y-2 border-white py-8'>
                            <h1 style={{ lineHeight: 0.6 }} className='uppercase text-8xl md:text-[12rem] xl:text-[16rem]   text-center text-white font-cute'> Frontend <br /> developer</h1>
                        </div>
                        <h3 className='text-white text-6xl lg:text-8xl font-cute'>PORTFOLIO</h3>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LandingPage;