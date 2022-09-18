import "./customBtn.css";

const CustomBtn = ({label,theme})=>{
    return(
        <div className="custom-btn-container">
            <button className={`custom-btn bc-${theme} f-${theme}`} label={label}>
                {label}
                <div className={`custom-btn-style ${theme}`}></div>
            </button>
        </div>
    )
}
export default CustomBtn;