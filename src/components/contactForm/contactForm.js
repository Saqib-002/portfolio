import CustomBtn from "../customBtn/customBtn";
import FormInput from "../formInput/formInput";
import emailjs from '@emailjs/browser';
import "./contactForm.css";
import {useRef } from "react";

const ContactForm=({theme})=>{
    const form_ref=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name: ",e.target.name.value);
        console.log("Email: ",e.target.email.value);
        console.log("Subject: ",e.target.subject.value);
        console.log("Message: ",e.target.message.value);
        emailjs.sendForm('contact_service','contact_form',form_ref.current,'z8AyekktlBiCMxwAq').then((result)=>{
            console.log(result.text);
            console.log(result);
            alert("Your message has been sent. Thank You!")
        }).catch((error)=>{
            console.log(error.text);
            alert("Error while sending message!!")
        })
        form_ref.current.reset();
    }
    return(
        <div className="contact">
            <iframe width="100%" height="900px" className="map"  title="map" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kahuta&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
            <div className="contact-form-container">
                <h2 className="contact-heading"><span className={`f-${theme}`}> Get </span> in touch.</h2>
                <p className="contact-details">Fill out the form below with some info about your project/any query and i will get back to you as soon as i can.</p>
                <form ref={form_ref} onSubmit={handleSubmit} className="contact-form">
                    <FormInput theme={theme} data-aos="fade-right" label="Name" placeholder="Enter your Name" type="text" name="name" id="name"/>
                    <FormInput theme={theme} data-aos="fade-right" label="Email" placeholder="Enter your Email" type="email" name="email" id="email"/>
                    <FormInput theme={theme} data-aos="fade-right" label="Subject" placeholder="Enter Subject" type="text" name="subject" id="subject"/>
                    <label className="msg-label" htmlFor="message" >Message</label>
                    <textarea placeholder="Write your message here." name="message" data-aos="fade-right" className={`message bc-f-${theme}`} id="message" cols="30" rows="10"></textarea>
                    <CustomBtn label="Send" theme={theme}/>
                </form> 
            </div>
        </div>
    )
}
export default ContactForm;