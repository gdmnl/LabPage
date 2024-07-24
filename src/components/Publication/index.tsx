import * as React from 'react';
import { Select, List, Input } from 'antd';

import { pubData } from './pub';

function genConferenceInfo(conferenceName: string, year: number) {
  if (conferenceName.length === 0) {
    if (year !== 0) {
      return " in " + year;
    }
    return "";
  }
  return " in " + conferenceName + " " + year;
}

export class PublicationList extends React.Component {
  render(){
    return (
      <div style={{ marginTop: "64px", textAlign: "left", marginBottom: '64px' }}>
        <div style={{ fontSize: '30px', padding: '30px', fontFamily: "'Cardo'" }}>
          Selected Publication
        </div>
        <div style={{ padding: '30px'}}>
          <Select defaultValue="keywords">
            <Select.Option value="sample">Sample</Select.Option>
          </Select>
          <Select defaultValue="conference">
            <Select.Option value="vldb">Sample</Select.Option>
          </Select>
          <Select defaultValue="year">
            <Select.Option value="all">Sample</Select.Option>
          </Select>
          Search: <Input placeholder="input search text" style={{ width: 200 }} />
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 25,
          }}
          dataSource={pubData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={
                <span> 
                  <span style={{ fontStyle: "italic" }}>
                    {item.authors.join(", ")}
                  </span>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    {genConferenceInfo(item.conference, item.year)}
                  </span>
                </span>
                }
              />
              {item.description}
              <p>
                {item.video.length > 0 ? <a href={item.video}>[video]</a>: "" }
                {item.href.length > 0 ? <a href={item.href}>[paper]</a>: "" }
              </p>
            </List.Item>
          )}
        />
      </div>
    );
  }
};

export default PublicationList;