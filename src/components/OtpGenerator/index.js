import React, { useState } from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import './index.css'// Make sure to import your CSS file


 

const OtpGenerator = () => {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  

  const handleInputChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;

    // Update state and move focus to the next input
    setDigits(newDigits);
    if (index < newDigits.length - 1 && value !== '') {
      document.getElementById(`digit-${index + 2}`).focus();
    }
  };

  return (
    <div className='otp-bg-container'>
      <div className='otp-header'>

      
      <IoShieldCheckmark className='shield-icon'/>
      </div>
        
        <h1 className='otp-main-heading'>Enter OTP Code</h1>
      <form className="digit-group" autoComplete="off">
        {digits.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              type="text"
              id={`digit-${index + 1}`}
              name={`digit-${index + 1}`}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength="1"
            />
            {index === 2 && <span className="splitter">&ndash;</span>}
          </React.Fragment>
        ))}
        <br/>

            <button className="verify-otp-btn">verify OTP</button>
            <button className="Royal">Resend OTP</button>
      </form>
    </div>
  );
};



export default OtpGenerator