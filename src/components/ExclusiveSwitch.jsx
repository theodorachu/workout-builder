import React, {useState} from 'react';
import Switch from '@mui/material/Switch';

function ExclusiveSwitch(props) {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(!checked);
    props.onChange(props.category, !checked);
  }

  return(
    <div>
      <label style={{margin: "1rem"}}>{props.category}</label>
      <Switch checked={checked} onChange={handleChange}/>
    </div>
  );

}

export default ExclusiveSwitch;