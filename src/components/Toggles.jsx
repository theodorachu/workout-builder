import React, {useState} from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Toggles(props) {
  const [btnVal, setBtnVal] = useState("");
  const handleChange = (event) => {
    setBtnVal(event.target.value);
  }

  return (
    <div>
      <label>{props.label}</label>
      <ToggleButtonGroup
        value={btnVal}
        exclusive
        onChange={handleChange}>
        {props.values.map((e, index) => {
          return <ToggleButton key={index} value={e}>{e}</ToggleButton>;
        })}
      </ToggleButtonGroup>      
    </div>
  );
}

export default Toggles;