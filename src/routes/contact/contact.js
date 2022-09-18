import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";
import "./contact.css";
const Contact=({theme})=>{
    return(
        <div className="contact-page">
            <ContactForm theme={theme}/>
            <Footer theme={theme}/>
        </div>    
    )
} 

export default Contact;