import Footer from "../../components/footer/footer";
import ProjectsList from "../../components/projects/projectsList";
import "./projects.css";
const Projects=()=>{
    return(
        <div className="home">
            <ProjectsList/>
            <Footer/>
        </div>
    )
} 

export default Projects;