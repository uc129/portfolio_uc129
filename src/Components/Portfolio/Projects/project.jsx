const Project = ({ project, index }) => {

    return (

        <a href={project.link} target="_blank" rel="noreferrer"
            className={`w-[28vw] min-w-[500px] gap-6 flex  ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'} 
         [&_.image]:odd:hover:rotate-6 [&_.image]:even:hover:-rotate-6 cursor-pointer `} >

            <img src={project.image} alt={project.title} className=" image object-cover transition-transform duration-300 pointer-events-none " />

            <div className="flex flex-col gap-4 ">
                <h1 className="font-bold text-pink-400">Featured</h1>

                <div className="flex flex-col ">
                    <h1 className="text-3xl font-black-ops">{project.title}</h1>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-[2px]  bg-gray-400"></div>
                        <p className="text-gray-400 font-mono text-sm">{project.company}</p>
                    </div>
                    <h3 className="">{project.description}</h3>
                </div>

            </div>

        </a>

    )
}

export default Project;