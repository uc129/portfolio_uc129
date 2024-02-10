import { RxHamburgerMenu } from "react-icons/rx";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SidebarNav = () => {

    return (

        <div className="sticky left-0 wrapper z-20 w-[4vw] min-w-[60px] bg-black text-white" >

            <div className="body flex flex-col py-8 items-center justify-between min-h-screen gap-8">

                <button><RxHamburgerMenu size={'2em'} /></button>

                <img src="/logo192.png" alt="logo" className=" w-14" />

                <div className="flex flex-col gap-8 ">
                    <FaSquareXTwitter size={'1.2em'} />
                    <FaInstagram size={'1.2em'} />
                    <FaLinkedin size={'1.2em'} />
                    <FaGithub size={'1.2em'} />
                </div>

            </div>
        </div>

    )



}

export default SidebarNav;