import {Component} from 'react' 
import Cookies from 'js-cookie'

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
        email:'',
        password:'',
        username:'',
        signUpEmail:'',
        signUpPassword:'',
    }

    onChangeEmail = event =>{
        this.setState({email: event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }
    
    onClickSignUp = () =>{
       this.setState({isActiveContainer:true})
    }

    onClickSignIn = () =>{
        this.setState({isActiveContainer:false})
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

      onChangeUsername = event =>{
        this.setState({username:event.target.value})
      }

      onChangeEmailSignup = event =>{
        this.setState({signUpEmail:event.target.value})
      }
      
      onchangeSignUpPassword = event =>{
        this.setState({signUpPassword:event.target.value})
      }

      onSubmitSuccess = jwtToken => {
        const {history} = this.props
        Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
        history.replace('/')
      }

      onSubmitFailure = errorMsg => {
        alert(errorMsg)
      }
    
      
      // SignIn Api Integration
      onSubmitSignInForm = async(event) =>{
        event.preventDefault();
    
        const {email,password} = this.state 
        console.log(email,password)
        const data = {email:email, password:password}
        const signInApi = 'http://127.0.0.1:8000/api/users/login';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }
        if(email === '' && password === ''){
            this.setState({errorMsgSigninEmail: "Email is not empty"})
            this.setState({errorMsgSigninPassword: "Password is not empty"})
        }else if(email !== '' && password === ''){
            this.setState({errorMsgSigninPassword: "Password is not empty"})
            this.setState({errorMsgSigninEmail: ''})  
        }else if(email === '' && password !== ''){
            this.setState({errorMsgSigninEmail: "Email is not empty"})
            this.setState({errorMsgSigninPassword: ''})  
        }
        else{
            try{
                const response = await fetch(signInApi, options)
                const data = await response.json()
                console.log(data) 
                if(response.status === 200){
                    console.log("Authentication successful. Redirecting in 2 seconds...");
                    console.log(data.token.access_token)
                    this.onSubmitSuccess(data.token.access_token)
                }else{ 
                    this.onSubmitFailure(data.detail)
                }
                }catch(error){
                     alert("Wrong Credentials received");
            }
        }
      }

      //SignUp Api Integration 

      onSubmitSignUpForm = async(event) =>{
        event.preventDefault();
    
        const {signUpEmail,signUpPassword,username} = this.state 
        console.log(signUpEmail,signUpPassword,username)
        const data = 
        {
            "username": username,
            "email": signUpEmail,
            "password": signUpPassword
          }
        const signInApi = 'http://127.0.0.1:8000/api/users/register';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }
        if(signUpEmail === '' && signUpPassword === '' && username === ''){ 
            this.setState({errorMsgName:'username is not empty'})
            this.setState({errorMsgEmail: "Email is not empty"})
            this.setState({errorMsgPassword: "Password is not empty"})
        }else if(signUpEmail !== '' && signUpPassword === '' && username === ''){
            this.setState({errorMsgName:'username is not empty'})
            this.setState({errorMsgEmail: ""})
            this.setState({errorMsgPassword: "Password is not empty"})  
        }else if(signUpEmail === '' && signUpPassword !== '' && username === ''){
            this.setState({errorMsgName:'username is not empty'})
            this.setState({errorMsgEmail: "Email is not empty"})
            this.setState({errorMsgPassword: ""}) 
            
        }else if(signUpEmail !== '' && signUpPassword !== '' && username === ''){
            this.setState({errorMsgName:'username is not empty'})
            this.setState({errorMsgEmail: ""})
            this.setState({errorMsgPassword: ""})
        }else if(signUpEmail === '' && signUpPassword !== '' && username !== ''){
            this.setState({errorMsgName:''})
            this.setState({errorMsgEmail: "Email is not empty"})
            this.setState({errorMsgPassword: ""})
        }else if(signUpEmail !== '' && signUpPassword === '' && username !== ''){
            this.setState({errorMsgName:''})
            this.setState({errorMsgEmail: ""})
            this.setState({errorMsgPassword: "Password is not empty"})
        }else{
            try{
                const response = await fetch(signInApi, options) 
                this.setState({errorMsgName:''})
                this.setState({errorMsgEmail: ""})
                this.setState({errorMsgPassword: ""}) 
                const data = await response.json()
                const msg = await data.msg
            
                
                if(response.status === 200 && msg !== "user already exist"){
                    console.log("Autharization successful. Redirecting in 2 seconds...");
                     
                }else{
                    throw new Error('user already exist'); 
                }
                }catch(error){
                console.log("user already exist");
            }
        }
      }
    render(){
        const {isActiveContainer,errorMsgName,errorMsgEmail,errorMsgPassword,errorMsgSigninPassword,errorMsgSigninEmail,isShowPasswordSignIn,isShowPasswordSignUp,email,password} = this.state 
        const className = isActiveContainer ? 'container active' : 'container ';
        
        return(
            <section className='login-bg-container'>
            <div className={className} id="container">
                <div className="form-container sign-up">
                    <form onSubmit={this.onSubmitSignUpForm}>
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
                        <input type="text" placeholder="Name" onBlur={this.onBlurUsername} onChange={this.onChangeUsername} name="username"/> 
                        <span className='errorMsg'>{errorMsgName}</span>
                        <input type="email" placeholder="Email" onBlur={this.onBlurEmail} onChange={this.onChangeEmailSignup} name="email"/>
                        <span className='errorMsg'>{errorMsgEmail}</span>
                        <div className='password-container'>
                            <input type={isShowPasswordSignUp?'text':"password"} placeholder="Password" onBlur={this.onBlurPassword} onChange={this.onchangeSignUpPassword} name="password"/><button type="button" onClick={this.onClickEyeIconSignUp} className='eye-icon'>{isShowPasswordSignUp?<IoEyeSharp/>:<FaEyeSlash/>}</button>
                        </div>
                        <span className='errorMsg'>{errorMsgPassword}</span>
                        <button type="submit" className='sign-in-button'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={this.onSubmitSignInForm}>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <button className="icon" onClick={() => this.login}><FcGoogle/></button>
                            <button className="icon"><FaFacebookF/></button>
                            <button className="icon"><FaGithub/></button>
                            <button className="icon"><FaLinkedinIn/></button>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" onBlur={this.onBlurEmailSignin} onChange={this.onChangeEmail} value={email} name="email"/>
                        <span className='errorMsg'>{errorMsgSigninEmail}</span>
                        <div className='password-container'>
                            <input type={isShowPasswordSignIn?'text':"password"} name="password" placeholder="Password" onBlur={this.onBlurPasswordSignin} onChange={this.onChangePassword} value={password}/><button type="button" onClick={this.onClickEyeIcon} className='eye-icon'>{isShowPasswordSignIn?<IoEyeSharp/>:<FaEyeSlash/>}</button>
                        </div>
                        <span className='errorMsg'>{errorMsgSigninPassword}</span> 
                        <div className='check-box-container'>
                            <div className='check-box-element'>
                                <input type="checkbox" id="checkbox" className='check-box-input'/> 
                                <label htmlFor="checkbox" className='checkbox-label-element'>Remember Me</label>
                            </div>
                        <Link to="/forgot" className="forgot-passsword">Forget Your Password?</Link>
                    </div>
                    <button type="submit" className='sign-in-button'>Sign In</button>
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
        </div>
        </section>)
    }
}

export default LoginRoute