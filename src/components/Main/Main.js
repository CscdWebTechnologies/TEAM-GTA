import React, { Component } from 'react';
import FirstSection from "./FirstSection"
import Table from "./Maincomponent/TAble"
import Card from './Maincomponent/Cards';

import Secondsection from './Maincomponent/SecondSection';
class Main extends Component {
 
    render() { 
        return (
            <div>
      <FirstSection/>
      <Table/>
            <Card/>
            <Secondsection/>
            </div>
          );
    }
}
 
export default Main ;