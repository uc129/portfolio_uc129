const ListBox = ({ date, title, description, location }) => {


    const handleMouseMove = (e) => {
        const cursor = document.getElementById('cursor-image');
        if (!cursor) return;
        const x_pos = e.clientX;
        const y_pos = e.clientY;
        cursor.style.right = `${x_pos}`;
        cursor.style.bottom = `${y_pos}`;

    }


    return (

        <div className=" bg-white p-10 px-16 text-3xl border-b-[2px] border-zinc-700 min-h-[200px] font__gothic  *:pointer-events-none"
            onMouseEnter={() => document.getElementById('cursor-image').classList.remove('hidden')}
            onMouseLeave={() => document.getElementById('cursor-image').classList.add('hidden')}
            onMouseMove={handleMouseMove}
        >

            <h3 className="text-pink-300 text-sm font-bold pb-4">{date}</h3>

            <div className="flex justify-between  leading-2">
                <p className="text-black tracking-tight text-[0.7em] leading-none">{title}</p>
                <div className="w-1/3">
                    <p className="text-gray-400 text-[0.4em] leading-none ">{description}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-gray-400"></div>
                <p className="text-gray-400 text-sm " >{location}</p>
            </div>
        </div>

    );
};


export default ListBox;