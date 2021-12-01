import React from 'react';
import TableRow from './TableRow';
import { v4 as uuidv4 } from 'uuid';

function RepTable({remixed}) {
  return(
    <div>
      <table style={{margin:"1rem auto", maxWidth:"80%"}}>
        <tbody>
          {remixed.map((e) => {
            return(
              <TableRow key={uuidv4()} firstCell={e.name} secondCell={e.length} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RepTable;