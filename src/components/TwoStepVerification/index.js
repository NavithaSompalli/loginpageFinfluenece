import { FaArrowLeft } from "react-icons/fa";

import './index.css'

const TwoStepVerification = () =>(
    <div className="verification-container">
        <div>
        <div className='back-container'>
            <button type="button" className='back-button'><FaArrowLeft/></button> 
            <h1 className='security-heading'>Security</h1>
        </div>
        <div className='options-auth-container'>
            <div className='element'>
            <input type="radio" name="auth" id="two-step-verification" value="Two Step Verification"/>
            <label className='label-element' htmlFor='two-step-verification'>Two Step verification</label>
            </div>
            <div>
            <input type="radio" name="auth" id="google-authorization" value="Google Authorization"/>
            <label className='label-element' htmlFor='google-authorization'>Google Authorization</label>
            </div>
        </div>
        </div>
        <div className='buttons-container'>
            <button type="button" className='skip-button'>Skip</button>
            <button type="button" className='skip-button'>Next</button>
        </div>
    </div>
)


export default TwoStepVerification