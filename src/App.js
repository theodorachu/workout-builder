import './App.css';
import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function App() {
  const [body, setBody] = useState("");
  const handleBody = (event) => {
    setBody(event.target.value);
  }
  
  return (
    <div className="App">
      <header>
        <ToggleButtonGroup
          value={body}
          exclusive
          onChange={handleBody}>
          <ToggleButton value="upper">Upper Body</ToggleButton>
          <ToggleButton value="lower">Lower Body</ToggleButton>
        </ToggleButtonGroup>
      </header>
      <footer>
        <p>made with luv © {(new Date().getFullYear())}</p>
        <p>favicon made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </footer>
    </div>
  );

}

export default App;
