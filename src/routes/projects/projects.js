import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import ProjectsList from "../../components/projectsList/projectsList";
import "./projects.css";
const Projects=({theme})=>{
    const [webProjects,setWebProjects]=useState([]);
    const [dataScienceProjects,setDataScienceProjects]=useState([]);
    useEffect(() => {
        setWebProjects([
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
        setDataScienceProjects([
            {
                id:1,
                projectName:"Portfolio3",
                projectDetails:"This is my portfolio3.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio",
                imgName:"portfolio.png"
            }
        ]);
    },[])
    return(
        <>
        <div className="projects">
            <ProjectsList projectList={webProjects} theme={theme} heading="Web Projects"/>
            <ProjectsList projectList={dataScienceProjects} theme={theme} heading="Data Science Projects"/>
        </div>
        <Footer theme={theme}/>
        </>

    )
} 

export default Projects;