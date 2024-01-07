import { Component } from "react";

import './index.css'

const tabsList = [
    {tabId: 'ACCESS', displayText: 'Access tutorials'},
    {tabId: 'GUIDES', displayText: 'Guidelines'},
    {tabId: 'TRADING', displayText: 'Resources on Forex trading'},
    {tabId:'APP', displayText:'Using the app'},
  ]

class LearningCenter extends Component{
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
              case 'ACCESS':
                return (<div className="active-tab-container">
                    <h1>Getting Started Guide</h1> 
                    <div>
                        <p>Create an Account</p> 
                        <p>Welcome to [Your Forex Trading Platform]! Follow these simple steps to create your trading account:</p>
                        <ol>
                            <li>
                                <h1>Visit the Platform Website:</h1>
                                <p>Open your web browser and navigate to [Platform URL].</p>
                            </li> 
                        </ol>
                    </div>
                    </div>)
              case 'GUIDES':
                return <div className="active-tab-container"><p>Guidelines To the website usage</p></div>
              case 'TRADING':
                return <div className="active-tab-container"><p>Details information about Resources on forex trading</p></div>
              case 'APP':
                return <div className="active-tab-container"><p>using the app</p></div>
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
                            <button className={tabItem.tabId === isActiveTab ? 'active-tab-item' : 'tab-item'} type="button" onClick={() => this.onSelectCategory(tabItem.tabId)}>{tabItem.displayText}</button>
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


export default LearningCenter