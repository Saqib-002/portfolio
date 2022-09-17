import ProjectCard from "../projectCard/projectCard";
import "./projectsList.css";

const ProjectsList=()=>{
    return(
        <div className="projects">
            <div className="web-projects">
                <p className="projects-heading">WEB PROJECTS</p>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <div className="data-projects">
                <p className="projects-heading">DATA SCIENCE PROJECTS</p>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default ProjectsList;