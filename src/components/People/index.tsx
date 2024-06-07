import * as React from 'react';

import { Content } from 'antd/es/layout/layout';
import { Row, Col, Space } from 'antd';

const postdocs = [
  {
    name: 'Kai WANG',
    date: 'Sep 2022 - Present',
    img: 'WangKai.png',
    bg: 'PhD from Dalian University of Technology & Macquarie University',
  },
  {
    name: 'Yow Kai Song',
    date: 'Joined in Feb 2022',
    img: 'YowKaiSiong.PNG',
    bg: 'PhD from Monash University & Awarded Southeast Asia Postdoctoral Fellowship',
  },
  {
    name: 'Tiancheng HUANG',
    date: 'Joined in Aug 2023',
    bg: 'PhD from WestLake&Zhejiang University',
  }
];

const phds = [
  {
    name: 'Dingheng MO',
    date: 'Aug 2021 - Present',
    img: 'MoDingheng.png',
    bg: 'BS from University of Science and Technology of China',
  },
  {
    name: 'Ningyi LIAO',
    date: 'Aug 2021 - Present',
    img: 'LiaoNingyi.jpeg',
    bg: 'BS from Shanghai Jiao Tong University',
  },
  {
    name: 'Zulun ZHU',
    img: 'ZhuZulun.jpg',
    date: 'Feb 2022 - Present',
    bg: 'BS from Zhejiang University',
  },
  {
    name: 'Weiping YU',
    img: 'YuWeiping.JPG',
    date: 'Feb 2022 - Present',
    bg: 'MS from Beijing Institute of Technology',
  },
  {
    name: 'Fan WANG',
    img: 'WangFan.jpg',
    date: 'Feb 2023 - Present',
    bg: 'MS from Zhejiang University',
  },
  {
    name: 'Haoyu LIU',
    img: 'LiuHaoyu.jpg',
    date: 'Feb 2023 - Present',
    bg: 'BS from Renmin University of China',
  },
  {
    name: 'Junfeng LIU',
    date: 'Aug 2023 - Present',
    bg: 'MS from University of Manchester',
  },
  {
    name: 'Shurui ZHONG',
    date: 'Aug 2023 - Present',
    bg: 'BS from University of Science and Technology of China',
  },
  {
    name: 'Haoxuan XIE',
    date: 'Aug 2023 - Present',
    bg: 'BS from Chinese University of Hong Kong, Shenzhen',
  },
  {
    name: 'Zhaoqi ZHANG',
    date: 'Feb 2022 - Present',
    bg: 'co-supervised with Prof. Cong GAO'
  }
];

export class PeopleList extends React.Component {
  render() {
    const phdGroups = [];
    for (let i = 0; i < phds.length; i += 3) {
      phdGroups.push(phds.slice(i, i + 3));
    }
    const postDocsGroup = [];
    for (let i = 0; i < postdocs.length; i += 3) {
      postDocsGroup.push(postdocs.slice(i, i + 3));
    }
    return (
      <Content className="people" style={{ marginTop: '1rem', padding: '1rem', fontFamily: 'Droid Serif' }}>
        <div style={{ fontSize: '40px' }}>People</div>
        <Row justify='center'>
          <Col span={5} style={{ padding: '20px'}}>
            <img src="avatar/SiqiangLuo.jpg" style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
            <div style={{ fontSize: '25px' }}>Siqiang LUO</div>
            <div style={{ fontSize: '16px', color: '#7d7d7d' }}> Assistant Professor</div>
          </Col>
        </Row>
        <div style={{ fontSize: '30px', marginTop: '10px' }}>PhD Students</div>
        {phdGroups.map((phdGroup, _) => (
            <Row justify='center'>
              {phdGroup.map((phd, _) => (
                <Col span={5} style={{ padding: '20px'}}>
                  <img src={phd.img ? `avatar/${phd.img}` : 'logo192.png'} style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
                  <div style={{ fontSize: '25px' }}>{phd.name}</div>
                  <div style={{ fontSize: '16px', color: '#7d7d7d' }}>{phd.date}</div>
                  <div style={{ fontSize: '16px' }}>{phd.bg}</div>
                </Col>
              ))}
            </Row>
        ))}
        <div style={{ fontSize: '30px', marginTop: '10px', marginBottom: '10px' }}>Postdoctoral Researchers</div>
        {postDocsGroup.map((postDocGroup, _) => (
            <Row justify='center'>
              {postDocGroup.map((postDoc, _) => (
                <Col span={5} style={{ padding: '20px'}}>
                  <img src={postDoc.img ? `avatar/${postDoc.img}` : 'logo192.png'} style={{ width: '150px', height: '150px', borderRadius: '50%' }}/>
                  <div style={{ fontSize: '25px' }}>{postDoc.name}</div>
                  <div style={{ fontSize: '16px', color: '#7d7d7d' }}>{postDoc.date}</div>
                  <div style={{ fontSize: '16px' }}>{postDoc.bg}</div>
                </Col>
              ))}
            </Row>
        ))}
      </Content>
    );
  }
};

export default PeopleList;