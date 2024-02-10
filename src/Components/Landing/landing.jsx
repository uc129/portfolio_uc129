import './landing.css'

const LandingPage = () => {


    return (
        <>
            <div className=" w-[1750px]  min-h-[100vh] xl:mr-[20px]">

                <div className="absolute w-[96vw] min-w-[1540px] bg-[#282c2f] h-full -z-10 overflow-y-hidden">
                    <img src="/assets/images/fog2.webp" alt="fog2" className="   min-w-[3400px] min-h-[200vh] fog_image2 " />
                    <img src="/assets/images/fog1.webp" alt="fog1" className="fog_image1 min-w-[3400px] min-h-[200vh]" />
                    <img src="/assets/images/fog2.webp" alt="fog2" className="   min-w-[3400px] min-h-[200vh] fog_image2 " />

                    {/* <img src="/assets/images/fog2.webp" alt="fog2" className=" fog relative   fog-layer-opacity-1 " />
                    <img src="/assets/images/fog1.webp" alt="fog1" className="  fog-layer-opacity2" />
                    <img src="/assets/images/fog2.webp" alt="fog2" className=" fog relative fog-layer-opacity-3 " /> */}
                </div>



                <nav className=' flex w-full justify-between p-4 gap-8'>
                    <img src="/assets/svg/logo.svg" alt="logo" className='mx-8 w-[12em] ' />
                    <div className=' w-[400px] h-10 overflow-y-hidden ' style={{ textWrap: 'nowrap' }}>
                        <p className='skills w-full text-white  text-2xl'> Search Engine Optimization Frontend Development Responsive Websites </p>
                    </div>
                </nav>


                <div className='flex flex-col items-center mx-auto justify-center w-[96vw] h-screen -mt-24'>

                    <div className='flex flex-col justify-center items-center '>
                        <div className='border-y-2 border-white py-8'>
                            <h1 style={{ lineHeight: 0.6 }} className='uppercase text-[16rem]   text-center text-white font-cute'> Frontend <br /> developer</h1>
                        </div>
                        <h3 className='text-white text-8xl font-cute'>PORTFOLIO</h3>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LandingPage;