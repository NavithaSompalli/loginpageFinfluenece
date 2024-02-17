import React, { useState } from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import './index.css'; // Make sure to import your CSS file

const OtpGenerator = () => {
  const [digits, setDigits] = useState(['', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;

    // Update state and move focus to the next input
    setDigits(newDigits);
    if (index < newDigits.length - 1 && value !== '') {
      document.getElementById(`digit-${index + 2}`).focus();
    }
  };

  const onClickVerifyOtp = async () => {
    const verifyApi = 'http://127.0.0.1:8000/api/users/verify_otp';
    const digit = digits.join("");
    console.log(digit)
    const payload = { "otp": digit, "email": "navitha0295@gmail.com" };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    try {
      const response = await fetch(verifyApi, options);
      if (response.status === 200) {
        console.log("OTP verified successfully. Redirecting in 2 seconds...");
      } else {
        throw new Error('OTP verification failed');
      }
    } catch (error) {
      console.log('Error verifying OTP:', error.message);
    }
  };

  const onClickSendOtp = async () => {
    const sendApi = 'http://127.0.0.1:8000/api/users/send_otp';
    const payload = { "email": "navitha0295@gmail.com" };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    try {
      const response = await fetch(sendApi, options);
      if (response.status === 200) {
        console.log("OTP sent successfully. Redirecting in 2 seconds...");
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.log('Error sending OTP:', error.message);
    }
  };

  return (
    <div className='section-bg-container'>
      <div className='otp-bg-container'>
        <div className='otp-header'>
          <IoShieldCheckmark className='shield-icon' />
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
          <br />
          <button type="button" className="verify-otp-btn" onClick={onClickVerifyOtp}>Verify OTP</button>
          <button type="button" className="Royal" onClick={onClickSendOtp}>Resend OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpGenerator;
