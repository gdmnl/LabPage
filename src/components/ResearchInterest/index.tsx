import * as React from 'react';

import { Content } from 'antd/es/layout/layout';

const topcis = [
  {
    logo: 'graph.svg',
    title: 'Graph Algorithms',
  },
  {
    logo: 'database.svg',
    title: 'Database Technologies',
  },
  {
    logo: 'datascience.svg',
    title: 'Machine Learning',
  },
  {
    logo: 'AI.svg',
    title: 'Autonomous Systems',
  },
  {
    logo: 'infra.svg',
    title: 'Hardware Specific Optimization',
  },
]

export class ResearchInterest extends React.Component {
  render() {
    return (
      <Content className="research-interest" style={{ backgroundColor: '#E0E0E0', marginTop: '1rem', padding: '1rem', fontFamily: 'Droid Serif'}}>
        <div style={{ fontSize: '40px', fontFamily: 'Montserrat', fontWeight: 500 }}>Research Areas</div>
        <div style={{ fontSize: '20px', color: '#777'}}>graph algorithms, graph learning, database systems</div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ width: '60%', fontSize: '25px', textAlign: 'left', fontFamily: 'Times' }}>
          The data scale and complexity have been growing rapidly in the past decade, and the need for efficient data management and analysis has never been more critical.
          Our research focuses on developing efficient graph algorithms to analyze complex graph structures, leveraging machine learning for tasks like node classification and link prediction, 
          and designing scalable database architectures and components for managing large-scale data. Our goal is to bridge theoretical advancements with practical, real-world solutions.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          {topcis.map((topic, _) => (
            <div>
              <img src={topic.logo} style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
              <div style={{ fontSize: '20px', padding: '20px', fontFamily: 'Times' }}>{topic.title}</div>
            </div>
          ))}
        </div>
      </Content>
    );
  }
};

export default ResearchInterest;