import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Recommended from './Recommended.js'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage.js';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Switch>
            <Route path ="/Search/:searchterm">
            
              <div className="app_page">
             <Sidebar/>
               </div> 
            </Route>
            <Route path="/">
              <div className="app_page">
              <Sidebar/>
             <Recommended/> 
            </div> 

            </Route>
        </Switch>
      </Router>
   
        
        
    </div>
  );
}

export default App;
