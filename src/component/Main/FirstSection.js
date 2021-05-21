import React, { Component } from 'react'
 import "../../css/FirstSection.css"
class FirstSection extends Component {
     
    constructor(props){
        super(props)
        this.state= {
            add :  "https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp"
        }
    }
    render() { 
        return ( 
        <div>
            
            <div className="row" >
            <div className="jsk" >
              <div>
           
              </div>
            </div>
          <div className="dkd">

          </div>
            </div>
        </div>
         );
    }
}
 
export default FirstSection ;