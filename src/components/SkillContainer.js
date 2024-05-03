const SkillContainer = ({ skill, image }) => {
    return(
        <div className="SkillContainer">
            <img src={image} alt={skill}/>
            <h3>{skill}</h3>
        </div>
    )
}

export default SkillContainer;