import React from 'react';
import TableRow from './TableRow';
import { v4 as uuidv4 } from 'uuid';

function TimeTable({ex}) {
  //prints one full set of cardio-time exercises
  let rows = [];
  for(let i = 0; i < ex.sets; i++) {
    rows.push(
      <TableRow key={uuidv4()} firstCell={ex.name} secondCell={ex.time} />
    );
    rows.push(
      <TableRow key={uuidv4()} firstCell="Rest" secondCell={ex.rest} />
    );
  }
  return(
    <table style={{margin:"1rem auto", maxWidth:"80%"}}>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default TimeTable;