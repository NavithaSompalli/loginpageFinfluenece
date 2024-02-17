import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';

import LoginRoute from './components/LoginRoute'
import ForgotPassword from './components/ForgotPassword'
import ResetPasswordRoute from './components/ResetPasswordRoute';
 import DashBoardRoute from './components/DashBoardRoute';
 import TwoStepVerification from './components/TwoStepVerification';
 import ProfilePage from './components/ProfilePage';
import OtpGenerator from './components/OtpGenerator';
import ProtectedRoute from './components/ProtectedRoute'

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Switch>
    <ProtectedRoute exact path='/' component={DashBoardRoute}/>
    <Route path='/login' component = {LoginRoute}/>
    <ProtectedRoute path='/forgot' component = {ForgotPassword}/>
    <ProtectedRoute path='/reset' component={ResetPasswordRoute}/>
    <ProtectedRoute path="/verification" component={TwoStepVerification}/>
    <ProtectedRoute path='/profile' component={ProfilePage}/> 
    <ProtectedRoute path='/otp' component={OtpGenerator}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
