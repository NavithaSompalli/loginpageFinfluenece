import React, { useState } from 'react';

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

 
  return (
    <div className='password-bg-container'>
      
      <h2 className='create-password-main-heading'>Create New Password</h2>
      <p className='description'>Your password must be different from previous used passwords.</p>
      <form className='form-password-container'>
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
  );
};

export default ResetPassword;
