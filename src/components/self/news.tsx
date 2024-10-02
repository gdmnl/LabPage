import * as React from "react";
import rawData from './news.json';

import './index.css';

interface NewsType {
  year: number;
  month: string;
  content: string;
};

const news: NewsType[] = rawData;

export class NewsList extends React.Component {
  render() {
    return (
      <div style={{ width: '70%' }}>
        <div style={{ textAlign: 'left', display:'flex', fontSize: "20px", fontWeight: "bold", fontFamily: "Droid Serif", marginBottom: '2rem' }}>
          <img src="news_gray.png" style={{ width: '1.5rem', marginRight: '0.5rem' }} />
          <div>Recent News</div>
        </div>
        <ul style={{ textAlign: 'left', listStyleType: 'none', paddingInlineStart: '0rem', height: '15rem', overflow: "scroll"  }}>
          {
            news.map(val => (
              <li style={{ marginBottom: '1rem', fontFamily: "'Cardo'", fontSize: "16px" }}>
                <span style={{ fontWeight: 'bold' }}>{val.month} </span>
                <span style={{ fontWeight: 'bold' }}>{val.year}: </span>
                <span>{val.content}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default NewsList;