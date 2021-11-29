import './App.css';
import React, {useState} from 'react';
import Toggles from './components/Toggles';
import Workout from './components/Workout';
import ExclusiveSwitch from './components/ExclusiveSwitch';

function App() {
  const [options, setOptions] = useState({"Focus Area": [],"Uses Equipment": []});
  function changeOption(category, option) {
    setOptions({...options, [category]: option});
  }
  return (
    <div className="App">
      <header className="header">
        <Toggles category="Focus Area" toggles={["Arms","Abs","Lower Body"]} onChange={changeOption}/>
        <ExclusiveSwitch category="Uses Equipment" onChange={changeOption}/>
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

// todo: add descriptions / links / pics -- how do i know what this workout is?
// todo: instead of saying set repeats, actually visually repeat the set & put a break in between for the breaks
// todo: people keep thinking the toggle should only be single select, how to make sure it can actually be multiselect
