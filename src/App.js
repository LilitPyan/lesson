import React, {Component} from 'react';
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent/MainContent";
import Dashboard from "./components/MainContent/Dashboard/Dashboard";
import Layout_Options from "./components/MainContent/Layout_Options/Layout_Options";
import Widgets from "./components/MainContent/Widgets/Widgets";
import Charts from "./components/MainContent/Charts/Charts";
import UI_Elements from "./components/MainContent/UI_Elements/UI_Elements";
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
        <BrowserRouter>
          <div className="app_container">
            <Header/>
            <Aside/>
            <div>
              <Route exact path='/' component={MainContent}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/layout_options' component={Layout_Options}/>
              <Route path='/widgets' component={Widgets}/>
              <Route path='/charts' component={Charts}/>
              <Route path='/ui_elements' component={UI_Elements}/>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
