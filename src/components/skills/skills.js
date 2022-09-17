import SkillCard from "../skillCard/skillCard";
import "./skills.css";

const Skills=()=>{
    return(
        <>
        <div class="skills-container">
            <h2 class="skills-heading">My Skills</h2>
            <div class="skills-cards">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
        </>
    )
}
export default Skills;