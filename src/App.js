import './App.css';
import React from 'react';
import Toggles from './components/Toggles';

function App() {
  
  return (
    <div className="App">
      <header className="header">
        <Toggles category="Focus Area" toggles={["Upper Body","Lower Body"]}/>
      </header>
      <footer>
        <p>made with luv © {(new Date().getFullYear())}</p>
        <p>favicon made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </footer>
    </div>
  );

}

export default App;
