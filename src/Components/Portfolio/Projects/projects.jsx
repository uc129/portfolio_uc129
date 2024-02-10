
import ProjectData from '../../../utils/projects.data';
import Project from './project';
import SeeMore from '../../../utils/see-more';
import ScrollSidebar from '../../ScrollSidebar/ScrollSidebar';

const Projects = () => {

    return (
        <div className="works min-w-screen h-screen flex   ">

            <div className='flex'>

                <ScrollSidebar text='Projects' lineHeightEm='6' length={6} />


                <div className="body flex   h-screen justify-center items-center border-l-2 pl-12 border-gray-300  min-w-[94vw] pr-24">
                    <div className=' h-1/2  even:translate-y-[120px] gap-12 flex'>
                        {
                            ProjectData.map((project, index) => {
                                return (
                                    <Project project={project} index={index} key={index} />
                                )
                            })
                        }

                        <a href='https://www.github.com/uc129' target='_blank' rel='noreferrer' className='pl-48'>
                            <SeeMore />
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )



};


// Path: portfolio/src/Works/Works.jsx

export default Projects;
