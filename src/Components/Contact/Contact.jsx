const Contact = () => {


    return (
        <div className="contact w-[70vw] h-screen min-w-[900px] text-white" style={{ backgroundImage: `url('/assets/images/gif/noise.gif')` }}>

            <div className="bg-[#202428] bg-opacity-95 h-screen min-w-[400px] ">
                <div className="w-40 h-[2px] bg-white absolute top-[30%] right-[7.8%]"></div>

                <div className="h-full flex flex-col justify-center items-center gap-44 pt-14 ">

                    <h1 className="text-[10em] tracking-tight leading-[0.8em] text-center px-18 mx-auto font-cute font-bold">
                        Let's build <br />something   <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > cool</span> <br /> together
                    </h1>

                    <div className="flex flex-col justify-center items-center gap-12 -mt-24">
                        <div className="">
                            <a href="mailto:utkarshchaudhary2049@outlook.com" >
                                <img src="/assets/svg/contact.svg" alt="contact-me" className="w-44 animate-rotate" />
                            </a>
                        </div>

                        <div className=" text-center">
                            <p>© 2024 Created by Utkarsh Chaudhary</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}


export default Contact;