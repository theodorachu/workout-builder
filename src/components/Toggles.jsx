import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Toggles(props) {
  const [btnVal, setBtnVal] = useState("");
  const handleChange = (event) => {
    setBtnVal(event.target.value);
    props.onChange(props.category, event.target.value);
  }

  return (
    <div>
      <label style={{margin: "1rem"}}>{props.category}</label>
      <ToggleButtonGroup
        value={btnVal}
        exclusive
        onChange={handleChange}
      >
        {props.toggles.map((e, index) => {
          return <ToggleButton key={index} value={e}>{e}</ToggleButton>;
        })}
      </ToggleButtonGroup>      
    </div>
  );
}

export default Toggles;