import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';

import LoginRoute from './components/LoginRoute'
import ForgotPassword from './components/ForgotPassword'
import ResetPasswordRoute from './components/ResetPasswordRoute';

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Switch>
    <Route path='/login' component = {LoginRoute}/>
    <Route path='/forgot' component = {ForgotPassword}/>
    <Route path='/reset' component={ResetPasswordRoute}/>
    </Switch>
    
   </BrowserRouter>
  );
}

export default App;
