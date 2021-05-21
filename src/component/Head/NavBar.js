import React, { Component } from 'react';
import "../../css/Navbar.css"

class NavBAr extends Component {
     
  constructor(props){
    super(props)
     this.state  = {
        add:  "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
     }
  }
    
    render() { 
        return ( 
 
<nav className="navbar totalnav navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src =  {this.state.add}  className="img" alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav firstul me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <a className="nav-link nav2 active" aria-current="page" href="#">Prices</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav2 active" href="#">Learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav2 active" href="#">Individuals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav2 active" href="#" >
               Businness
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link nav2 active" href="#" >
             Developers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav2 active" href="#" >
              
          </a>
        </li>



      </ul>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link nav2 active" href="#" tabIndex="-1" aria-disabled="true">Sign in</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary ">
           Get Started
          </button>
        </li>
        </ul>
    </div>
  </div>
</nav>

         )
        
        ;
    }
}
 
export default NavBAr;