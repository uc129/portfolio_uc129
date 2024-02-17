
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SidebarNav = () => {

    return (

        <div className="sticky left-0 wrapper z-20 w-[4vw] min-w-[60px] bg-black text-white" >

            <div className="body flex flex-col py-8 items-center justify-between min-h-screen gap-8">

                {/* <button><RxHamburgerMenu size={'2em'} /></button> */}

                <img src="./logo.svg" alt="logo" className=" mt-12 w-14 scale-[2] -rotate-90" />

                <div className="flex flex-col gap-8 ">
                    {/* <a target="_blank" rel={'noreferrer'} href="https://twitter.com/iamutkarsh12"> <FaSquareXTwitter size={'1.2em'} /></a>
                    <a target="_blank" rel={'noreferrer'} href="https://instagram.com/iamutkarsh12"> <FaInstagram size={'1.2em'} /> </a> */}
                    <a target="_blank" rel={'noreferrer'} href="https://www.linkedin.com/in/utkarsh-chaudhary-387a8a238/"> <FaLinkedin size={'1.2em'} /></a>
                    <a target="_blank" rel={'noreferrer'} href="https://github.com/uc129"> <FaGithub size={'1.2em'} /></a>
                </div>

            </div>
        </div>

    )



}

export default SidebarNav;