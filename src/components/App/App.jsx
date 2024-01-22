import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux"
import Feelings from '../Feeling/Feeeling';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
     
        
         
          
          <Router>
            <Route path="/" exact>
            <Feelings/>
            </Route>
            <Route path="/understanding/">
            <Understanding/>
            </Route>
            <Route path="/support/">
            <Support/>
            </Route>
            <Route path="/comments/">
            <Comments/>
            </Route>
            <Route path ="/review/">
              <Review/>
            </Route>
          </Router>
    </div>
  );
}

export default App;
