import React, { useState } from 'react';
import {Link} from "react-router-dom"

import { MdOutlineEmail } from "react-icons/md";

import './index.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 
  return (
    <div className='section-bg-container'>
    <div className='forgot-bg-container'>
      <h2 className='forgot-mainheading'>Forgot Password</h2>
      <p className='head-line'>No worries, we will send you reset instructions</p>
      <div className='input-element-container'>
      <label htmlFor='email-input-element' className='email-label-element'>Email:</label>
      <div className='email-input-element'>
      <input type="email" value={email} onChange={handleEmailChange} id="email-input-element" placeholder='Enter your email'/>
      <MdOutlineEmail className='emai-icon'/>
      </div>
      </div>
      <Link to="reset" className='reset-button'>Send instructions</Link>
    </div>
    </div>
  );
};


export default ForgotPassword