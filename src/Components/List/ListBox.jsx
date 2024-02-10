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

        <div className=" bg-white p-10 px-16 text-3xl border-b-[2px] border-zinc-700 min-h-[200px]  *:pointer-events-none"
            onMouseEnter={() => document.getElementById('cursor-image').classList.remove('hidden')}
            onMouseLeave={() => document.getElementById('cursor-image').classList.add('hidden')}
            onMouseMove={handleMouseMove}
        >

            <h3 className="text-pink-300 text-sm font-bold">{date}</h3>

            <div className="flex justify-between font-cute  ">
                <p className="text-black tracking-wide">{title}</p>
                <p className="text-gray-400">{description}</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-gray-400"></div>
                <p className="text-gray-400 text-sm " >{location}</p>
            </div>
        </div>

    );
};


export default ListBox;