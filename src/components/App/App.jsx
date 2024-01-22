import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feeling/Feeeling';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
          <Feelings/>
          <Support/>
          <Comments/>
          <Understanding/>
      </header>
    </div>
  );
}

export default App;
