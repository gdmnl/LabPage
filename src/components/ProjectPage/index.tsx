import * as React from 'react';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Project from './project';
import * as projectData from './data';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Key-Value Storage System',
    children: <Project {...projectData.keyValueProject} />,
  },
  {
    key: '2',
    label: 'Scalable Graph Computation',
    children: <Project {...projectData.graphProject} />,
  }
];

class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: "64px" }}></div>
        <h1 style={{ fontSize: "40px", fontFamily: "'Cardo'"  }}>Featured Projects</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%' }}>
            <Tabs indicator={{ align: "center" }} defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectPage;