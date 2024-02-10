const Skill = ({ skill, index }) => {

    console.log(index);

    return (
        <div className='skill text-[14px] lg:text-sm' >{skill.name}</div>
    )

}

export default Skill