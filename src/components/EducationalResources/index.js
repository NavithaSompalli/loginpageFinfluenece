import { Component } from "react" 

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
        isAiTradingInterfaceActive:true,
        isCustomStatagyActive:false,
        isAnalyticsActive:false,
        isAdoptationActive:false,
        isAccountSettingActive:false,
    } 

    onClickEduResource = () =>{
        this.setState(prevState => ({isEduResActive: !prevState.isEduResActive}))
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
    }


    render(){
        const {isEduResActive, isLearningActive,isCommunityActive,isSupAndAssActive,
            isCustomerSupportActive,isHelpCenterActive,isAdoptationActive,isResearchActive,isAccountSettingActive,
            isAiTradingInterfaceActive,isCustomStatagyActive,isAnalyticsActive} = this.state

        return(
            <div className="edu-bg-container">
                <div className="dash-board-container resize horizontal vertical both">
                    <p className="user-name">User Name</p>  
                    <button className="profile-pic-container">
                        <FaUserCircle className="user-icon"/>
                    </button>
                    <button className="edu-main-heading" type="button" onClick={this.onClickAiTradingInterface}>AI Trading Interface </button> 
                    <button className="edu-main-heading" type="button" onClick={this.onClickCustomStratagies}>Custom Strategy Configuration</button>
                    <button className="edu-main-heading" type="button" onClick={this.onClickAnalyticsAndReports}>Performance Analytics and Reporting</button>
                    <button className="edu-main-heading" type="button" onClick={this.onClickAiLearningAndAdoption}>AI Learning and Adoptation</button>
                    <button className="edu-main-heading" type="button" onClick={this.onClickReseachAndTools}>Market reasearch and Tools</button>
                    <button className="edu-main-heading" type="button" onClick={this.onclickAccountAndSetting}>Accounts and Setting Managment</button>
                    <button className="edu-main-heading" type="button" onClick={this.onClickEduResource}>Educational Resources</button> 
                    {isEduResActive &&<ul className="dashboard-ul-container">
                        <li className="learning" onClick={this.onClickLearning}>Learning center</li>
                        <li className="learning" onClick={this.onClickCommunityInsight}>Community Insights</li>
                    </ul>}
                    <button className="edu-main-heading" type="button" onClick={this.onClickSupportAndAssistance}>Support and Assistance</button>
                    {isSupAndAssActive &&<ul>
                        <li className="learning" onClick={this.onClickHelpCenter}>Help center</li>
                        <li className="learning" onClick={this.onClickCustomerSupport}>Customer Support</li>
                    </ul>} 
                    <div>
                    <button type="button" className="sign-out-btn">Sign Out</button>
                    </div>
                </div> 
                <div className="content-bg-container"> 
                    
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
                </div>
            </div>
        )
    }
}

export default EducationalResources 