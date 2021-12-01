import React from 'react';

function TableRow(props) {
  return(
    <tr>
      <td style={{textAlign:"left"}}>{props.firstCell}</td>
      <td style={{textAlign:"right", whiteSpace:"nowrap"}}>{props.secondCell}</td>
    </tr>
  );
}

export default TableRow;