import React, { Component } from 'react';
import { MenuItems } from "./MenuItem"
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
           <nav className="NavbarItems">
               <h4 className="navbar-logo"><strong>coinbase</strong></h4>
               <div className="menu-icon" onClick={this.handleClick}>
                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                   
               </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 
                'nav-menu'}>

                   {MenuItems.map((item, index) => {
                       return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                       )
                   })}
               </ul>
               <Button color="primary" active={true}>Get Started</Button>{' '}
           </nav>
        )
    }
}

export default Navbar