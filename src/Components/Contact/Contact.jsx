import './Contact.css'

const Contact = () => {


    return (
        <div className="contact w-[70vw] h-screen min-w-[900px] text-white" style={{ backgroundImage: `url('/assets/images/gif/noise.gif')` }}>

            <div className="bg-[#202428] bg-opacity-95 h-screen min-w-[400px] ">
                <div className="w-20 md:w-30 lg:w-40 h-[2px] bg-white relative top-[30%] left-[0px]"></div>

                <div className="h-full flex flex-col justify-center items-center gap-44 pt-14 ">

                    <h1 className="text-[3.6em] lg:text-[5em]  tracking-tight leading-[1em] text-center px-18 mx-auto font-rubik font-bold">
                        Let's build
                        <br />something
                        <span className="cool tracking-widest scale-150" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}  > cool</span>
                        <br /> together
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