import './App.css';
import React, {useState} from 'react';
import Toggles from './components/Toggles';
import Workout from './components/Workout';

function App() {
  const [options, setOptions] = useState({"Focus Area": []});
  function changeOption(category, option) {
    setOptions({...options, [category]: option});
  }
  return (
    <div className="App">
      <header className="header">
        <Toggles category="Focus Area" toggles={["Arms","Abs","Lower Body"]} onChange={changeOption}/>
        <Workout type={options}/>
      </header>
      <footer>
        <p>made with luv © {(new Date().getFullYear())}</p>
        <p>favicon made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </footer>
    </div>
  );

}

export default App;
