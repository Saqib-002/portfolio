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
                imgName:"html.svg"
            },
            {
                id:2,
                skill:"CSS 3",
                imgName:"css.svg"
            },
            {
                id:3,
                skill:"Javascript",
                imgName:"js.svg"
            },
            {
                id:4,
                skill:"nodeJS",
                imgName:"nodejs.svg"
            },
            {
                id:5,
                skill:"Figma",
                imgName:"figma.svg"
            },
            {
                id:6,
                skill:"Git",
                imgName:"git.png"
            },
            {
                id:7,
                skill:"Bootstrap",
                imgName:"bootstrap.png"
            },
            {
                id:8,
                skill:"Python",
                imgName:"python.png"
            },
            {
                id:9,
                skill:"Flask",
                imgName:"flask.png"
            },
            {
                id:10,
                skill:"Tensorflow",
                imgName:"tensorflow.png"
            },
            {
                id:11,
                skill:"Matplotlib",
                imgName:"matplotlib.jpg"
            },
            {
                id:12,
                skill:"Si-kit-Learn",
                imgName:"sk-learn.jpg"
            },
            {
                id:13,
                skill:"OpenCV",
                imgName:"opencv.jpg"
            },
            {
                id:14,
                skill:"Pandas",
                imgName:"pandas.jpg"
            },
            {
                id:15,
                skill:"numpy",
                imgName:"numpy.jpg"
            }
        ]);
    },[]);
    return(
        <div className="skills-container">
            <div className="skills-heading">My <span className={`f-${theme}`}> Skills</span></div>
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
    )
}
export default Skills;