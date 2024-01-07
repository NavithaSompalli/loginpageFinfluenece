import {Component} from 'react' 

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa"; 

import { LoginSocialFacebook } from 'reactjs-social-login';

import { FaEyeSlash } from "react-icons/fa";

import { IoEyeSharp } from "react-icons/io5";

import {Link} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component{
    state = {
        isActiveContainer:false,
        errorMsgName:'',
        errorMsgEmail:'',
        errorMsgPassword:'',
        errorMsgSigninEmail:'',
        errorMsgSigninPassword:'',
        isShowPasswordSignIn: false,
        isShowPasswordSignUp:false,
    }
    
    onClickSignUp = () =>{
       this.setState({isActiveContainer:true})
    }

    onClickSignIn = () =>{
        this.setState({isActiveContainer:false})
    }

    onBlurUsername = (event) =>{
        if(event.target.value === ''){
        this.setState({errorMsgName: "Required"})
        }else{
            this.setState({errorMsgName: ''})   
        }
    }

    onBlurEmail = (event) =>{
        if(event.target.value === ''){
        this.setState({errorMsgEmail: "Required"})
        }else{
            this.setState({errorMsgEmail: ''})   
        }
    }

    onBlurPassword = (event) =>{
        if(event.target.value === ''){
        this.setState({errorMsgPassword: "Required"})
        }else{
            this.setState({errorMsgPassword: ''})   
        }
    }

    onBlurEmailSignin = (event) =>{
        if(event.target.value === ''){
        this.setState({errorMsgSigninEmail: "Required"})
        }else{
            this.setState({errorMsgSigninEmail: ''})   
        }
    }

    onBlurPasswordSignin = (event) =>{
        if(event.target.value === ''){
        this.setState({errorMsgSigninPassword: "Required"})
        }else{
            this.setState({errorMsgSigninPassword: ''})   
        }
    }

    onClickEyeIcon = () =>{
        this.setState(prevState =>({isShowPasswordSignIn: !prevState.isShowPasswordSignIn}))
    }

     handleSocialLogin = (user) => {
        console.log('Facebook login successfull:', user);
        // Handle your login success logic here
      };
    
     handleSocialLoginFailure = (err) => {
        console.error('Facebook login error:', err);
        // Handle your login error logic here
      };

      onClickEyeIconSignUp = () =>{
        this.setState(prevState =>({isShowPasswordSignUp: !prevState.isShowPasswordSignUp}))
      }
 
    render(){
        const {isActiveContainer,errorMsgName,errorMsgEmail,errorMsgPassword,errorMsgSigninPassword,errorMsgSigninEmail,isShowPasswordSignIn,isShowPasswordSignUp} = this.state 
        const className = isActiveContainer ? 'container active' : 'container ';
        return(
            <div className={className} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <button className="icon" onClick={() => this.login}><FcGoogle/></button>
                            <LoginSocialFacebook 
                                appId="254067524193195"
                                callback={this.handleSocialLogin}
                                onFailure={this.handleSocialLoginFailure}
                            >
                                <button className="icon"><FaFacebookF/></button>
                            </LoginSocialFacebook>

                            <button className="icon"><FaGithub/></button>
                            <button className="icon"><FaLinkedinIn/></button>
                        </div>
                        <span>or use your email for registeration</span>
                        <input type="text" placeholder="Name" onBlur={this.onBlurUsername}/> 
                        <span className='errorMsg'>{errorMsgName}</span>
                        <input type="email" placeholder="Email" onBlur={this.onBlurEmail}/>
                        <span className='errorMsg'>{errorMsgEmail}</span>
                        <div className='password-container'>
                            <input type={isShowPasswordSignUp?'text':"password"} placeholder="Password" onBlur={this.onBlurPassword}/><button type="button" onClick={this.onClickEyeIconSignUp} className='eye-icon'>{isShowPasswordSignUp?<IoEyeSharp/>:<FaEyeSlash/>}</button>
                        </div>
                        <span className='errorMsg'>{errorMsgPassword}</span>
                        <button onSubmit={this.onSubmitSignUpForm} className='sign-in-button'>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <button className="icon" onClick={() => this.login}><FcGoogle/></button>
                            <button className="icon"><FaFacebookF/></button>
                            <button className="icon"><FaGithub/></button>
                            <button className="icon"><FaLinkedinIn/></button>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" onBlur={this.onBlurEmailSignin}/>
                        <span className='errorMsg'>{errorMsgSigninEmail}</span>
                        <div className='password-container'>
                            <input type={isShowPasswordSignIn?'text':"password"} placeholder="Password" onBlur={this.onBlurPasswordSignin}/><button type="button" onClick={this.onClickEyeIcon} className='eye-icon'>{isShowPasswordSignIn?<IoEyeSharp/>:<FaEyeSlash/>}</button>
                        </div>
                        <span className='errorMsg'>{errorMsgSigninPassword}</span> 
                        <div className='check-box-container'>
                            <div className='check-box-element'>
                                <input type="checkbox" id="checkbox" className='check-box-input'/> 
                                <label htmlFor="checkbox" className='checkbox-label-element'>Remember Me</label>
                            </div>
                        <Link to="/forgot" className="forgot-passsword">Forget Your Password?</Link>
                    </div>
                    <Link to="/dashboard"><button className='sign-in-button'>Sign In</button></Link>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id="login" onClick={this.onClickSignIn}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Welcome, Friend!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id="register" onClick={this.onClickSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default LoginRoute