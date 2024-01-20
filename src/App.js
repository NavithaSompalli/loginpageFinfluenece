import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';

import LoginRoute from './components/LoginRoute'
import ForgotPassword from './components/ForgotPassword'
import ResetPasswordRoute from './components/ResetPasswordRoute';
 import EducationalResources from './components/EducationalResources';
 import TwoStepVerification from './components/TwoStepVerification';
 import ProfilePage from './components/ProfilePage';
import OtpGenerator from './components/OtpGenerator';

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Switch>
    <Route path='/dashboard' component={EducationalResources}/>
    <Route path='/login' component = {LoginRoute}/>
    <Route path='/forgot' component = {ForgotPassword}/>
    <Route path='/reset' component={ResetPasswordRoute}/>
    <Route path="/verification" component={TwoStepVerification}/>
    <Route path='/profile' component={ProfilePage}/> 
    <Route path='/otp' component={OtpGenerator}/>
   
    </Switch>
    
   </BrowserRouter>
  );
}

export default App;
