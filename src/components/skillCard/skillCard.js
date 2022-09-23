import "./skillCard.css";

const SkillCard=({theme,imgName,skill})=>{
    return(
        <>
            <div className={`skill-card f-${theme}`} skillName={skill}>
                <img src={`/assets/skills/${imgName}`} alt="" className="skill-img"/>
            </div>
        </>
    )
}
export default SkillCard;