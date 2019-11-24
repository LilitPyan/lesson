import React from 'react';
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent/MainContent";
import RESTCountries from "./components/MainContent/Dashboard/RESTCountries/RESTCountries";
import Layout_Options from "./components/MainContent/Layout_Options/Layout_Options";
import YoutubeAPI from './components/MainContent/Dashboard/YoutubeAPI/YoutubeAPI'
import Widgets from "./components/MainContent/Widgets/Widgets";
import Charts from "./components/MainContent/Charts/Charts";
import UI_Elements from "./components/MainContent/UI_Elements/UI_Elements";
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
          <div className="app_container">
            <Header/>
            <Aside/>
            <div className='app_router'>
              <Route exact path='/' component={MainContent}/>
              <Route path='/rest_countries' component={RESTCountries}/>
              <Route path='/youtube_api' component={YoutubeAPI}/>
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

export default App;
