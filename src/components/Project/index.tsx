import * as React from 'react';

import { Col, Row, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';

const projectLists = [
  {
    title: 'Moose',
    desc: 'LSM tree co-optimizing range lookup, update, and point lookup with extremely flexible structure',
    logo: 'supermoose.png',
  },
  {
    title: 'Ruskey',
    desc: 'Reinforcement learning based LSM-tree tuning for dynamic workloads',
    logo: 'ruskeyavatar.png',
  }
]

export class Project extends React.Component {
  render() {
    return (
      <Content className="project" style={{ marginTop: '1rem' }}>
        <div style={{ fontSize: '40px', fontFamily: 'Montserrat', fontWeight: 500 }}>Research Projects</div>
        <Space direction='horizontal'>
            <Row>
              {projectLists.map((project, index) => (
                <Col span={12} key={index} style={{ padding: '25px' }}>
                    <div style={{ fontSize: '30px', fontWeight: 600 }}>{project.title}</div>
                    <img src={project.logo} style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
                    <div style={{ fontSize: '25px', width: '300px', fontFamily: 'Times' }}>{project.desc}</div>
                </Col>
              ))}
            </Row>
        </Space>
      </Content>
    );
  }
};

export default Project;