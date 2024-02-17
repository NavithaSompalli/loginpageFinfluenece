// Navbar.js

import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {FaUserCircle} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import './index.css'; // Import CSS for styling

class DashBoardRoute extends Component {
  state = {
    isMenuOpen:false,
    activeSection:'dashboard',
    showDashboard:true,
  }
  
  hideDashboard = () =>{
    this.setState(prevState =>({showDashboard: !prevState.showDashboard}))
  }
  

toggleMenu = () => {
    this.setState(prevState =>({isMenuOpen: !prevState.isMenuOpen}))
  };

  setActiveSection = (value) =>{
    this.setState({activeSection:value})
  }

   onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderContent = () => {
    const { activeSection } = this.state;

    switch (activeSection) {
      case 'helpCenter':
        return <div className='main-heading'> <h1 >Helpcenter</h1></div>;
      case 'customerSupport':
        return <div className='main-heading'><h1>Customer support</h1></div>;
      case 'aiTradingInterface':
        return <div className='main-heading'><h1>AI Trading Interface</h1></div>; // Replace with actual component
      case 'customStrategy':
        return <div className='main-heading'>Custom strategies And Market Research</div>; // Replace with actual component
      case 'analytics':
        return <div className='main-heading'>Analytics And Performance</div>; // Replace with actual component
      case 'accountSetting':
        return <div className='main-heading'>Accounts And Settings</div>; // Replace with actual component
      case 'alerts':
        return <div className='main-heading'>Notifications And Alerts</div>; // Replace with actual component
      default:
        return <div className='main-heading'>Welcome to the Dashboard</div>;
    }
  };

render(){
  const {activeSection,isMenuOpen,showDashboard} = this.state
  console.log(showDashboard)
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className='dashboard-sm-container'>
            <button
            className={activeSection === 'aiTradingInterface' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('aiTradingInterface')}
          >
            AI Trading Interface
          </button><br/>
          <button
            className={activeSection === 'customStrategy' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('customStrategy')}
          >
            Custom Strategy And Market
          </button>
          <button
            className={activeSection === 'analytics' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('analytics')}
          >
            Performance Analytics and Reporting
          </button>
         
          <button
            className={activeSection === 'accountSetting' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('accountSetting')}
          >
            Accounts And Settings
          </button>
          <button
            className={activeSection === 'alerts' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('alerts')}
          >
            Notifications And Alerts
          </button>
          <button
            className={activeSection === 'support' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('support')}
          >
            Support and Assistance
          </button>
          {activeSection === 'support' && (
            <ul>
              <li className="learning" onClick={() => this.setActiveSection('helpCenter')}>Help center</li>
              <li className="learning" onClick={() => this.setActiveSection('customerSupport')}>Customer Support</li>
            </ul>
          )}
          <div>
            <button type="button" className="sign-out-btn">Sign Out</button>
          </div>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={this.toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
    <div className='bg-container'>
      <div className={`dashboard ${showDashboard ? 'open' : 'closed'}`}>
          <p className="user-name">User Name</p>
          <button className="profile-pic-container">
            <FaUserCircle className="user-icon" />
          </button>
          <button
            className={activeSection === 'aiTradingInterface' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('aiTradingInterface')}
          >
            AI Trading Interface
          </button>
          <button
            className={activeSection === 'customStrategy' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('customStrategy')}
          >
            Custom Strategy And Market
          </button>
          <button
            className={activeSection === 'analytics' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('analytics')}
          >
            Performance Analytics and Reporting
          </button>
          
          <button
            className={activeSection === 'accountSetting' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('accountSetting')}
          >
            Accounts And Settings
          </button>
          <button
            className={activeSection === 'alerts' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('alerts')}
          >
            Notifications And Alerts
          </button>
          <button
            className={activeSection === 'support' ? 'edu-main-heading-active edu-main-heading' : 'edu-main-heading'}
            type="button"
            onClick={() => this.setActiveSection('support')}
          >
            Support and Assistance
          </button>
          {activeSection === 'support' && (
            <ul>
              <li className="learning" onClick={() => this.setActiveSection('helpCenter')}>Help center</li>
              <li className="learning" onClick={() => this.setActiveSection('customerSupport')}>Customer Support</li>
            </ul>
          )}
          <div>
            <button type="button" className="sign-out-btn" onClick={this.onClickLogout}>Sign Out</button>
          </div>
      </div>
      <div className={`container-content ${showDashboard ? 'dashboard-open' : 'dashboard-closed'}`} aria-live="polite" >
      <button onClick={this.hideDashboard} className='dashboard-btn' >
            {showDashboard ? <IoIosArrowBack className='arrow-mark'/> : <IoIosArrowForward className='arrow-mark'/>}
          </button>
      {this.renderContent()}
      </div>
    </div>
    <div className='content-bg-sm-container'>
      {this.renderContent()}
      </div>

    </>
  );
};
}
export default DashBoardRoute;
