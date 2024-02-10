import Card from "../Cards/Card";
import ScrollSidebar from "../ScrollSidebar/ScrollSidebar"
import { CertificationData } from "../../utils/certificationData";

const Certifications = () => {


    const CardDetails = {
        title: 'Web3 Developer',
        description: 'Alchemy University',
        tag: 'Alchemy',
        image: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1707549187/Screenshot_2024-02-10_at_6.12.04_pm_mwef2e.png'
    }
    const handleMouseMove = (e) => {

        const certificationCard = document.querySelector('.certification-card');
        const { clientX, clientY } = e;
        const xAxis = (window.innerWidth / 2 - clientX) / 25;
        const yAxis = (window.innerHeight / 2 - clientY) / 25;

        certificationCard.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale3d(1, 1, 1)`;


    }


    return (

        <div className="min-w-screen flex h-screen  " style={{ backgroundImage: `url('/assets/images/gif/noise.gif')` }}>

            <div className="h-full w-full flex bg-opacity-[98%] bg-white z-10">

                <div className="border-r-[2px] border-gray-300">
                    <ScrollSidebar text='Certifications' lineHeightEm='9' length={4} />
                </div>

                <div className="mt-12 p-12">

                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={(e) => { e.target.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)` }}
                        className="certification-card h-[550px] w-[550px]  bg-center bg-no-repeat bg-contain"
                    >
                        <div
                            className=" h-[530px] w-[530px]  bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${CardDetails.image})` }} >
                        </div>
                    </div>

                    <div className="-mt-24"><Card tag={CardDetails.tag} title={CardDetails.title} /> </div>

                </div>



                <ul className="h-full px-14 py-24 w-[40vw] min-w-[500px] flex flex-col gap-44">

                    {CertificationData.map((certification, index) => {
                        return (
                            <li key={index} className="flex flex-col gap-3">
                                <p className="text-sm font-bold text-pink-300">{certification.id}</p>
                                <h1 className="text-5xl tracking-tight font-cute">{certification.title}</h1>

                                <div className="flex gap-2 items-center">
                                    <div className="h-[2px] w-4 bg-gray-300"></div>
                                    <p className="text-sm text-gray-400">{certification.tag}</p>

                                </div>
                            </li>
                        )
                    })}

                </ul>



                <div className="w-40 h-[2px] bg-black absolute top-[30%] right-[8.72%]"></div>





            </div>


        </div>
    )


}

export default Certifications;