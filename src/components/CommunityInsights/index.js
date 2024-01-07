import { Component } from "react"; 

import './index.css'

const tabsList1 = [
    {tabId: 'DISCUSSIONS', displayText: 'Engage with community discussions'},
    {tabId: 'INSIGHTS', displayText: 'insights'},
    {tabId: 'STRATEGIES', displayText: 'shared strategies'},
  ] 

class CommunityInsights extends Component{
 state = {isInightsCommActive:tabsList1[0].tabId}

 onSelectCommunityCategory = (tabItem) =>{
    this.setState({isInightsCommActive: tabItem})
}


getCommunityCategory = () =>{
    const {isInightsCommActive} = this.state 
   // console.log(tabsList1[isCommunityActive])
        switch (isInightsCommActive){
          case 'DISCUSSIONS':
            return <h1>Engage with community discussions</h1>
          case 'INSIGHTS':
            return <div className="active-tab-container"><p>insights</p></div>
          case 'STRATEGIES':
            return <div className="active-tab-container"><p>shared strategies.</p></div>
          default:
            return null
        }
}

    render(){
        const {isInightsCommActive} = this.state 
        return(
            <div className='learning-res-container'>
                    <div className="learning-options-container">
                        {tabsList1.map(tabItem => 
                        <li key={tabItem.tabId}>
                            <button className={tabItem.tabId === isInightsCommActive ? 'active-tab-item' : 'tab-item'} type="button" onClick={() => this.onSelectCommunityCategory(tabItem.tabId)}>{tabItem.displayText}</button>
                            </li>
                        )}
                    </div>
                    <div>
                        {this.getCommunityCategory()}
                    </div>    
                </div>
        )
    }
}


export default CommunityInsights