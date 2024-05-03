
const ProjectContainer = ({ title, description, technologies, image }) => {
    return(
        <div className="ProjectContainer">
            <div className="project-image">
                <img src={image}/>
            </div>
            <div className="project-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Technologies used: {technologies}</p>
            </div>
        </div>
    )
}

export default ProjectContainer;