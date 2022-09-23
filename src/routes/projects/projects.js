import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import ProjectCard from "../../components/projectCard/projectCard"
import "./projects.css";
const Projects=({theme})=>{
    const [projects,setProjects]=useState([]);
    useEffect(() => {
        setProjects([
            {
                id:1,
                projectName:"Portfolio",
                projectDetails:"This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio",
                imgName:"portfolio.png",
                sourceUrl:"https://www.google.com",
                liveUrl:"https://www.google.com"
            },
            {
                id:2,
                projectName:"Portfolio2",
                projectDetails:"This is my portfolio2.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio",
                imgName:"portfolio.png"
            },
            {
                id:3,
                projectName:"Portfolio2",
                projectDetails:"This is my portfolio2.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio",
                imgName:"portfolio.png"
            }
        ]);
    },[])
    return(
        <>
        <div className="projects">
            <p className={`projects-heading f-${theme}`}>Projects</p>
            <div class="projects-list">
                {
                    !projects[0]?
                    <div className="no-project">
                        No Projects to show
                    </div>
                    :
                    projects && projects.map((project)=>{
                        return <ProjectCard key={project.id} project={project} theme={theme}/>
                    })
                }
            </div>
        </div>
        <Footer theme={theme}/>
        </>

    )
} 

export default Projects;