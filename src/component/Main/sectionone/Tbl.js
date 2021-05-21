import React, { Component } from 'react';
import "../../../css/Main.css"

class Tbl extends Component {

 


    render(){ 
        return ( 

      <div className="container">
<div className="table-responsive">
<table className="table table-hover">
  <thead>
    <tr className="td">
      <th >#</th>
        <th   colspan="5">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Change</th>
      <th scope="col">Chart</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr className="td">
    <td >1</td>
      <td  colspan="5"> <div>
          <img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" style={{width:"36px" , float:"left"}} className="logo" alt="bitcoin"/>
          <p>Bitcoin <span className="abb">BTC</span></p>
      </div></td>
      <td >GHS 250,309.89</td>
      <td  className="number">-4.7%</td>
      <td>
           ------
     </td>
      <td ><button  className="btn btn-success">Buy</button></td>
    </tr>
    <tr className="td">
      <td >2</td>
      <td colspan="5">
          <img src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png" alt="ETH" style={{width:"36px" , float:"left"}} className="logo" />
          <p>Ethereum <span className="abb">ETH</span></p>
      </td>
      <td> GHS 18,804.23</td>
      <td className="number">-9.3%</td>
      <td >----</td>
      <td  ><button className="btn btn-success">Buy</button></td>
    </tr>
    <tr className="td">
     
      <td >3</td>
      <td colspan="5">      <img src="https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png" className="logo" alt="BCH" style={{width:"36px" , float:"left"}} />
          <p>Bitcoin Cash <span  className="abb">BCH</span></p></td>
      <td>GHS 6,096.11</td>
      <td className="number">-7.44%</td>
      <td >--------</td>
      <td> <button className="btn btn-success">Buy</button></td>
     
    
    </tr>
    <tr className="td">
     
      <td  >4</td>
      <td  colSpan="5" >      
      <img src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png" className="logo" alt="LTC" style={{width:"36px" , float:"left"}} />
          <p>Litecoin <span className="abb" >LTC</span></p></td>
      <td >GHS 1,615.11</td>
      <td className="number" >-2.88%</td>
      <td >----------</td>
      <td> <button className="btn btn-success">Buy</button></td>
     
    
    </tr>
    
    
  </tbody>
  <tfoot>
    
    </tfoot>
</table>
</div>
  </div>
      
         );
    }

    
   
    
}
 
export default Tbl;

