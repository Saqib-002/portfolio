import "./formInput.css";

const FormInput=({label,theme,...otherProps})=>{
    return(
        <div className="form-input-container">
            <label htmlFor={otherProps.id} color="red" className="form-input-label">{label}</label>
            <input {...otherProps} className={`form-input bc-f-${theme}`}/>
        </div>
    )
}
export default FormInput;