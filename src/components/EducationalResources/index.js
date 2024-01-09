import { Component } from "react" 
import {Link} from 'react-router-dom'

// import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";



import LearningCenter from '../LearningCenter'
import CommunityInsights from '../CommunityInsights'
 import HelpCenter from '../HelpCenter'
import CustomerSupport from '../CustomerSupport'

import './index.css'

class EducationalResources extends Component{
    state = {
        isEduResActive: false,
        isLearningActive:false,
        isCommunityActive: false, 
        isSupAndAssActive:false,
        isHelpCenterActive:false,
        isCustomerSupportActive:false, 
        isAiTradingInterfaceActive:false,
        isCustomStatagyActive:false,
        isAnalyticsActive:false,
        isAdoptationActive:false,
        isAccountSettingActive:false,
        isAlertsActive:false,
        isDashboard:true,
    } 

    onClickEduResource = () =>{
        this.setState(prevState => ({isEduResActive: !prevState.isEduResActive}))
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})   
        this.setState({isSupAndAssActive:false})   
        this.setState({isAlertsActive:false}) 
        this.setState({isDashboard:false})
    }


   /* onClickLearning = () =>{
        this.setState(prevState => ({isLearningActive: !prevState.isLearningActive}))
        
    }

    onClickCommunityInsight = () =>{
        this.setState(prevState =>({isCommunityActive: !prevState.isCommunityActive}))
        
    }*/

    onClickLearning = () =>{
        this.setState({isLearningActive: true})
        this.setState({isCommunityActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
    }

    onClickCommunityInsight = () =>{
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:true})
        this.setState({isHelpCenterActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
    }

    onClickSupportAndAssistance = () =>{
        this.setState(prevState =>({isSupAndAssActive: !prevState.isSupAndAssActive}))
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})

    }

    onClickHelpCenter = () =>{
        this.setState({isHelpCenterActive: true})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isDashboard:false})
    }

    onClickCustomerSupport = () =>{
        this.setState({isCustomerSupportActive:true})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isDashboard:false})
    }

    onClickAiTradingInterface = ()=>{
        this.setState({isAiTradingInterfaceActive: true})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }

    onClickCustomStratagies = () =>{
        this.setState({isCustomStatagyActive:true})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }

    onClickAnalyticsAndReports = () =>{
        this.setState({isAnalyticsActive:true})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isAdoptationActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }

    onClickAiLearningAndAdoption = () =>{
        this.setState({isAdoptationActive:true})
        this.setState({isAnalyticsActive:false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isResearchActive: false})
        this.setState({isAccountSettingActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }
     
    onClickReseachAndTools = () =>{
        this.setState({isResearchActive: true})
        this.setState({isAdoptationActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isAccountSettingActive:false})
        this.setState({isSupAndAssActive:false}) 
        this.setState({isEduResActive:false}) 
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }

    onclickAccountAndSetting = () =>{
        this.setState({isAccountSettingActive:true}) 
        this.setState({isResearchActive: false})
        this.setState({isAdoptationActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isAlertsActive:false})
        this.setState({isDashboard:false})
    }

    onClickAlertsNotifications = () =>{
        this.setState({isAlertsActive:true})
        this.setState({isAccountSettingActive:false}) 
        this.setState({isResearchActive: false})
        this.setState({isAdoptationActive:false})
        this.setState({isAnalyticsActive:false})
        this.setState({isCustomStatagyActive:false})
        this.setState({isAiTradingInterfaceActive: false})
        this.setState({isCustomerSupportActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isSupAndAssActive:false})  
        this.setState({isEduResActive:false})
        this.setState({isDashboard:false})
    }


    render(){
        const {isEduResActive, isLearningActive,isCommunityActive,isSupAndAssActive,isDashboard,
            isCustomerSupportActive,isHelpCenterActive,isAdoptationActive,isResearchActive,isAccountSettingActive,
            isAiTradingInterfaceActive,isCustomStatagyActive,isAnalyticsActive,isAlertsActive} = this.state

        return(
            <div className="edu-bg-container">
                <div className="dash-board-container resize horizontal vertical both">
                    <p className="user-name">User Name</p>  
                    <Link to='/profile'><button className="profile-pic-container">
                        <FaUserCircle className="user-icon"/>
                    </button></Link>
                    <button className={isAiTradingInterfaceActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickAiTradingInterface}>AI Trading Interface </button>
                    
                    <button className={isCustomStatagyActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickCustomStratagies}>Custom Strategy Configuration</button>
        
                    <button className={isAnalyticsActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickAnalyticsAndReports}>Performance Analytics and Reporting</button>
                    <button className={isAdoptationActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickAiLearningAndAdoption}>AI Learning and Adoptation</button>
                    <button className={isResearchActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickReseachAndTools}>Market reasearch and Tools</button>
                    <button className={isAccountSettingActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onclickAccountAndSetting}>Accounts and Setting Managment</button>
                    <button className={isAlertsActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickAlertsNotifications}>Notifications And Alerts</button>
                    <button className={isEduResActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickEduResource}>Educational Resources</button> 
                    {isEduResActive &&<ul className="dashboard-ul-container">
                        <li className="learning" onClick={this.onClickLearning}>Learning center</li>
                        <li className="learning" onClick={this.onClickCommunityInsight}>Community Insights</li>
                    </ul>}
                    <button className={isSupAndAssActive?"edu-main-heading-active edu-main-heading":"edu-main-heading"} type="button" onClick={this.onClickSupportAndAssistance}>Support and Assistance</button>
                    {isSupAndAssActive &&<ul>
                        <li className="learning" onClick={this.onClickHelpCenter}>Help center</li>
                        <li className="learning" onClick={this.onClickCustomerSupport}>Customer Support</li>
                    </ul>} 
                    <div>
                    <button type="button" className="sign-out-btn">Sign Out</button>
                    </div>
                </div> 
                <div className="content-bg-container"> 
                    <div>{isDashboard&& <div><h1 className="dash-board-heading">Welcome to Dashboard</h1></div>}</div>  
                    <div>{isLearningActive&&<LearningCenter/>}</div> 
                    <div>{isCommunityActive&&<CommunityInsights/>}</div> 
                    <div>{isHelpCenterActive && <HelpCenter/>}</div> 
                    <div>{isCustomerSupportActive&&<CustomerSupport/>}</div>
                    <div>{isAiTradingInterfaceActive&&<div><p className="elements">AI Trading Interface</p></div>}</div>
                    <div>{isCustomStatagyActive&&<div className="elements">Custom strategies configuration</div>}</div>
                    <div>{isAnalyticsActive && <div className="elements">Analytics And Performance</div>}</div>
                    <div>{isAdoptationActive && <div className="elements">AI Learning And Adoptation</div>}</div> 
                    <div>{isResearchActive&&<div className="elements">Market Research And Tools</div>}</div>
                    <div>{isAccountSettingActive&& <div className="elements">Accounts And Settings</div>}</div> 
                    <div>{isAlertsActive&&<div className="elements">Notifications And Alerts</div>}</div>
                </div>
            </div>
        )
    }
}

export default EducationalResources 