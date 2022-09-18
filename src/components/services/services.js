import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/serviceCard";

import "./services.css";

const Services=({theme})=>{
    const [servicesMap,setServicesMap]=useState([]);
    useEffect(()=>{
        setServicesMap([
            {
                id:1,
                service:"Web Design",
                serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error, at nisi alias, est rerum incidunt placeat recusandae impedit, dignissimos amet laboriosam?",
                imgName:"web_design.png",
                "data_aos":"fade-right"
            },
            {
                id:2,
                service:"Creative Design",
                serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error, at nisi alias, est rerum incidunt placeat recusandae impedit, dignissimos amet laboriosam?",
                imgName:"creative.png",
                "data_aos":"fade-up"
            },
            {
                id:3,
                service:"Responsive Design",
                serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error, at nisi alias, est rerum incidunt placeat recusandae impedit, dignissimos amet laboriosam?",
                imgName:"responsive.png",
                "data_aos":"fade-left"
            },
            {
                id:4,
                service:"Redesign Websites",
                serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error, at nisi alias, est rerum incidunt placeat recusandae impedit, dignissimos amet laboriosam?",
                imgName:"redesign.png",
                "data_aos":"fade-right"
            }
        ])
    },[])
    return(
        <div className="services-container">
            <h1 className="services-heading"> <span className={`f-${theme}`}> My </span>Services</h1>
            <div className="service-cards">
                
                {
                    servicesMap.map((service)=>{
                        return (
                            <ServiceCard key={service.id} {...service} theme={theme}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Services;