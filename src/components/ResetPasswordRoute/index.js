import React, { useState } from 'react';

// import {Link} from 'react-router-dom'

import { FaEyeSlash } from "react-icons/fa";

import { IoEyeSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import './index.css'

const ResetPassword = () => {
  const [password, setNewPassword] = useState('');
   const [newmessage, setMessage] = useState('');
   const [confirmMessgae, setConfirmMessgae] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [eyeIconStatus, setEyeIconStatus] = useState(false)

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if(e.target.value.length < 8){
        setMessage('Must be at least 8 characters')
    }else{
        setMessage('')
    }
    
  };



  const handleConfirmPasswordChange = (e) =>{
    setConfirmPassword(e.target.value)
    if(e.target.value !== password){
        setConfirmMessgae("both password should match")
    }else{
        setConfirmMessgae('')
    }
  }

  const onClickEyeIcon = () =>{
    if(eyeIconStatus){
        setEyeIconStatus(false)
    }else{
       setEyeIconStatus(true)
    }
    
  }

 const onSubmitResetPassword = async(event) =>{
    event.preventDefault()
    console.log(password,confirmPassword)
    const data = {password,confirmPassword}
    const forgotApi = 'http://127.0.0.1:8001/forgot-password';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    }
    try{
        const response = await fetch(forgotApi, options) 
        if(response.status === 200){
            console.log("Password Updated successful. Redirecting in 2 seconds...");
            setTimeout(function () {
                window.location.href = "onboard.html";
            }, 2000); 
        }else{
            throw new Error('Password Update failed'); 
        }
        }catch(error){
        console.log("wrong credentials");
    }   
    }


 
  return (
    <section className='section-bg-container'>
    <div className='password-bg-container'>
      <h2 className='create-password-main-heading'>Create New Password</h2>
      <p className='description'>Your password must be different from previous used passwords.</p>
      <form className='form-password-container' onSubmit={onSubmitResetPassword}>
        <div className='password-input-container'>
            <label className='label-input-element'>New Password:</label>
            <div className='reset-password-input-element-container'>
                <input type={eyeIconStatus?"text":"password"} value={password} onChange={handleNewPasswordChange} className='reset-password-input-element' placeholder='New password'/>
                <button type="button" className="eyeIcon" onClick={onClickEyeIcon}>{eyeIconStatus?<IoEyeSharp />:<FaEyeSlash/>}</button>
            </div>
            
            <p className='errorMsg'>{newmessage}</p>
      </div>
      <div className='password-input-container'>
            <label className='label-input-element'>Confirm Password:</label>
            <div className='reset-password-input-element-container'>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className='reset-password-input-element' placeholder='Confirm password'/>
            </div>
            <p className='errorMsg'>{confirmMessgae}</p>
      </div>
      <button type="submit" className='reset-button-password'>Reset password</button>
      </form>
      <button type="button" className='back-btn'> <FaArrowLeft className='arrow'/>Back to Login</button>
    </div>
    </section>
  );
};

export default ResetPassword;
