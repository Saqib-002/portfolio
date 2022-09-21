import ProjectCard from "../projectCard/projectCard";
import "./projectsList.css";

const ProjectsList=({theme,heading,projectList})=>{
    return(
        <div className="projects-list">
            <p className={`projects-heading f-${theme}`}>{heading}</p>
            {
                !projectList[0]?
                <div className="no-project">
                    No Projects to show
                </div>
                :
                projectList && projectList.map((project)=>{
                    return <ProjectCard key={project.id} project={project} theme={theme}/>
                })
            }
        </div>
    )
}

export default ProjectsList;