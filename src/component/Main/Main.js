import React, { Component } from 'react';
import FirstSection from "./FirstSection"
import Tbl from "./sectionone/Tbl"
import Gist from  "./gist";
import Articlefirst from "./sectionone/Articlecompnent/ArticleFirst"
import ArticleSecond from "./sectionone/Articlecompnent/ArticleSecond"
import Secondsection from './sectionone/SecondSection';
class Main extends Component {
 
    render() { 
        return (
            <div>
      <FirstSection/>
      <Tbl/>
            <Gist/>
            <Secondsection/>
            <div>
                <Articlefirst/>
                <ArticleSecond/>
            </div>
            </div>
          );
    }
}
 
export default Main ;