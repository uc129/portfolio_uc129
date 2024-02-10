const Card = ({ title, description, tag, image }) => {


    return (
        <div className='flex flex-col justify-between gap-4 bg-transparent h-[444px] w-[500px]'>

            {image && <div className="h-2/3 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}> </div>}
            <div className="meta flex flex-col gap-3 text-sm w-[90%] mx-auto">
                {title && <>
                    <h1 className="uppercase font-bold text-sm text-pink-300">Featured</h1>
                    <h1 className="title text-xl font-bold">{title}</h1>
                </>}

                {description && <p className="description text-gray-500">{description}</p>}

                {tag &&
                    <div className="flex gap-2 items-center justify-start">
                        <div className="h-[2px] w-4 bg-gray-300"></div>
                        <p className="text-gray-400">{tag}</p>
                    </div>}

            </div>




        </div>
    )


}

export default Card;