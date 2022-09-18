import { useEffect, useState } from "react";

import SkillCard from "../skillCard/skillCard";
import "./skills.css";

const Skills=({theme})=>{
    const [skillsMap,setSkillsMap]=useState([]);
    useEffect(() => {
        setSkillsMap([
            {
                id:1,
                skill:"HTML 5",
                percentage:90,
                imgName:"html.svg"
            },
            {
                id:2,
                skill:"CSS 3",
                percentage:90,
                imgName:"css.svg"
            },
            {
                id:3,
                skill:"Javascript",
                percentage:70,
                imgName:"js.svg"
            },
            {
                id:4,
                skill:"nodeJS",
                percentage:70,
                imgName:"nodejs.svg"
            },
            {
                id:5,
                skill:"Figma",
                percentage:70,
                imgName:"figma.svg"
            },
            {
                id:6,
                skill:"Git",
                percentage:90,
                imgName:"git.png"
            },
            {
                id:7,
                skill:"Bootstrap",
                percentage:70,
                imgName:"bootstrap.png"
            },
            {
                id:8,
                skill:"Python",
                percentage:90,
                imgName:"python.png"
            },
            {
                id:9,
                skill:"Flask",
                percentage:70,
                imgName:"flask.png"
            },
            {
                id:10,
                skill:"Tensorflow",
                percentage:70,
                imgName:"tensorflow.png"
            },
            {
                id:11,
                skill:"Matplotlib",
                percentage:90,
                imgName:"matplotlib.jpg"
            },
            {
                id:12,
                skill:"Si-kit-Learn",
                percentage:70,
                imgName:"sk-learn.jpg"
            },
            {
                id:13,
                skill:"OpenCV",
                percentage:70,
                imgName:"opencv.jpg"
            },
            {
                id:14,
                skill:"Pandas",
                percentage:70,
                imgName:"pandas.jpg"
            },
            {
                id:15,
                skill:"numpy",
                percentage:90,
                imgName:"numpy.jpg"
            }
        ]);
    },[]);
    return(
        <>
        <div className="skills-container">
            <h2 className="skills-heading">My <span className={`f-${theme}`}> Skills</span></h2>
            <div className="skills-cards">
                {
                    skillsMap.map((skill)=>{
                        return (
                            <SkillCard key={skill.id} {...skill} theme={theme}/>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Skills;