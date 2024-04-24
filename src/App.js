import React, { useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
 
  const [isClicked, setIsClicked] = useState(false);


  return (

    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <label onClick={()=> setIsClicked(!isClicked)}
      style={{ fontSize: isClicked ? '100px' : '16px' }}
      >
        {isClicked ? 'Lado chu radi !!! Ghata muji !!!' : 'Click Here'}
      </label>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    
  );
}

export default App;
