import SkillCard from "../skillCard/skillCard";
import "./skills.css";

const Skills=({theme})=>{
    return(
        <>
        <div class="skills-container">
            <h2 class="skills-heading">My <span className={`f-${theme}`}> Skills</span></h2>
            <div class="skills-cards">
                <SkillCard theme={theme}/>
                <SkillCard theme={theme}/>
                <SkillCard theme={theme}/>
                <SkillCard theme={theme}/>
            </div>
        </div>
        </>
    )
}
export default Skills;