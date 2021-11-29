import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Toggles(props) {
  const [btnVal, setBtnVal] = useState("");
  const handleChange = (event, targets) => {
    setBtnVal(targets);
    props.onChange(props.category, targets);
  }
  return (
    <div style={{margin: "1rem"}}>
      <label style={{margin: "1rem"}}>{props.category}</label>
      <ToggleButtonGroup
        value={btnVal}
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