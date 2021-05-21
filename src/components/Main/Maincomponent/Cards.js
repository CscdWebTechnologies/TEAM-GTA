import React, { Component } from 'react';
import "../../../css/Main.css"
class  Card extends Component {

    render() { 
        return ( 
            <div className="container-fluid second">
                <div className="row">   
                    <div className=" col-md-4 earn" style={{width:"1000px" ,marginTop:"95px", marginRight:"150px"}}>
      <h2>
         Earn up to $28 worth of crypto
      </h2>
      <p style={{marginTop:"20px"}}>
      Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
      </p>
      <div>
          <button className="btn btn-primary">Start Earning</button>
      </div>
                </div>
                <div className="col-md-6">
                <a href="#"  className="carda">
                <div className="cardss">
  <div class="card-body">
 
  <h4 style={{float:"left"}}>  <img  style={{width:"38px"}} src="https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg" alt="logo"/> SKALE <span>SKL</span> <span></span> </h4>

  <h5 className="sdq">Earn $3 SKL</h5>
  </div>
</div>
                </a>
                <a href="#" className="carda">
                <div className="cardss">
  <div class="card-body">
  <h4 style={{float:"left" }} >  <img style={{width:"38px"}} src="https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg" alt="logo"/> 
  
  Ampleforth Governance 
          <span>Forth</span> </h4>
  <h5 className="sdq">Earn $3 Forth</h5>

  </div>
</div>
                </a>
                <a href="#" className="carda">
                <div className="cardss">
  <div class="card-body">
  <h4  style={{float:"left"}}>  <img  style={{width:"38px"}} src="https://static-assets.coinbase.com/earn/campaigns/the-graph/asset-logo.svg" alt="logo"/> The Graph  <span>GRT</span> </h4>
  <h5 className="sdq">Earn $3 GRT</h5>
  </div>
</div>
                </a>
                <a href="#" className="carda">
                <div className="cardss">
  <div class="card-body">
  <h4  style={{float:"left"}}>  <img src="https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg"  style={{width:"38px"}}alt="logo"/> Stellar Lumens  <span>XLM</span></h4>
  <h5 className="sdq">Earn $3 XLM</h5>
  </div>
</div>
                </a>
             
             <div className="cardss">
             <a href="#">
                  view More >
               </a>
                    
             </div>
                </div>
                </div>

            </div>
         );
    }
}
 
export default Card;