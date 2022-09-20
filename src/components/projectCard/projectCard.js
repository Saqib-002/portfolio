import "./projectCard.css";
const ProjectCard = ({project,theme})=>{
    const {projectName,projectDetails,imgName,liveUrl,sourceUrl}=project;
    return (
        <div className={`project-card bc-h-${theme}`}>
            <div className="workplace">
                <img src={`/assets/projects/${imgName}`} alt="" class="project-img"/>
                <img src="/assets/laptop.svg" alt="not found" className="laptop" useMap="#project"/>
                <div class={`project-link ${theme}`}>
                    {sourceUrl && <a href={sourceUrl}>
                        <img className="project-source" src="/assets/socials/github.svg" alt=""/>
                    </a>}
                    {liveUrl && <a href={liveUrl}>
                        <div class="live-preview">
                            <img className="live-img" src="/assets/eye.svg" alt="ssss"/>
                            <span>Live Preview</span>
                        </div>
                    </a>}
                    {!(liveUrl && sourceUrl) && <div className="no-source"> Sorry no souce code and url</div>}
                </div>
            </div>
            <div className="project-details">
                <div className={`project-name f-${theme}`}>{projectName}</div>
                <div className="project-discription">{projectDetails}</div>
            </div>
        </div>
    )
}

export default ProjectCard;