import { Component } from "react";

import './index.css'

const tabsList = [
    {tabId: 'FAQS', displayText: 'Access FAQs'},
    {tabId: 'ARTICLES', displayText: 'support articles'},
    {tabId: 'TROUBLESHOOT', displayText: 'troubleshooting guides'},
  ]

class HelpCenter extends Component{
    state = {
        isActiveTab: tabsList[0].tabId,
    }

    onSelectCategory = (tabItem) =>{
        this.setState({isActiveTab: tabItem})
    }


    getSelectedCategory = () =>{
        const {isActiveTab} = this.state 
        console.log(tabsList[isActiveTab])
            switch (isActiveTab) {
              case 'FAQS':
                return (<div className="active-tab-container">
                    <h1>Access FAQs</h1> 
                    
                    </div>)
              case 'ARTICLES':
                return <div className="active-tab-container"><p>Support Articles</p></div>
              case 'TROUBLESHOOT':
                return <div className="active-tab-container"><p>Details information about troubleshoot guideline</p></div>
              default:
                return null
            }
          
        
    }

    

    render(){
       
        const {isActiveTab} = this.state
        return(
            <div className='learning-res-container'>
                    <div className="learning-options-container">
                        {tabsList.map(tabItem => 
                        <li key={tabItem.tabId}>
                            <button className={tabItem.tabId === isActiveTab ? 'active-help-tab-item' : 'help-tab-item'} type="button" onClick={() => this.onSelectCategory(tabItem.tabId)}>{tabItem.displayText}</button>
                            </li>
                        )}
                    </div>
                    <div>
                        {this.getSelectedCategory()}
                    </div>    
                </div>
        )
    }
}


export default HelpCenter