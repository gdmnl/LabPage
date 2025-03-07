import * as React from "react";

import rawData from './funding.json';

// revert the list
const fundings: string[] = rawData.reverse();

export class FundingList extends React.Component {
  render() {
    return (
      <div style={{ width: '70%' }}>
        <div style={{ textAlign: 'left', display:'flex', fontSize: "20px", fontWeight: "bold", fontFamily: "Droid Serif", marginBottom: '2rem' }}>
          
          <img src="funds.png" style={{ width: '1.5rem', marginRight: '0.5rem' }} />
          <div>Funding List</div>
        </div>
        <ul style={{ textAlign: 'left', listStyleType: 'none', paddingInlineStart: '0rem', height: '15rem', overflow: "scroll"  }}>
          {
            fundings.map(val => (
              <li style={{ marginBottom: '1rem', fontFamily: "'Cardo'", fontSize: "16px" }}>
                <span style={{ fontWeight: 'bold' }}>{val.split(', ')[0]}</span>
                <span>, {val.split(', ')[1]}, {val.split(', ')[2]}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default FundingList;