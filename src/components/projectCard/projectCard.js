import "./projectCard.css";
import laptop from "../../assets/laptop.svg";
import ProjectPic from "../../assets/logo.png";
const ProjectCard = ()=>{
    return (
        <div className="project-card">
            <div className="workplace">
                <img src={laptop} alt="not found" className="laptop" useMap="#project" width="580" height="300"/>
                <map name="project">
                    <area shape="rect" coords="20,20,200,200" href="../../assets/logo.png" alt="not found"/>
                </map>
            </div>
            <div className="project-details">
                <div className="project-name">Ecommerce</div>
                <div className="project-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias suscipit vel, commodi officiis omnis minima repellat hic molestiae ratione ex necessitatibus neque sint, reiciendis recusandae laboriosam vitae non soluta praesentium! Reiciendis saepe nobis voluptates ea velit explicabo odio qui laudantium commodi </div>
            </div>
        </div>
    )
}

export default ProjectCard;