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
                serviceDetails: "Design beautifull, attractive and functional weebsites.",
                imgName:"web_design.png",
                "data_aos":"fade-up"
            },
            {
                id:2,
                service:"Responsive Design",
                serviceDetails: "look great on any screen size!",
                imgName:"responsive.png",
                "data_aos":"fade-up"
            },
            {
                id:3,
                service:"Redesign Websites",
                serviceDetails: "Redesign for a new acttractive design and optimal functionality.",
                imgName:"redesign.png",
                "data_aos":"fade-up"
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