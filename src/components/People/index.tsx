import * as React from "react";

import { Col, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";

import { phds, postdocs } from "./data";

export class PeopleList extends React.Component {
  public render() {
    const phdGroups = [];
    for (let i = 0; i < phds.length; i += 3) {
      phdGroups.push(phds.slice(i, i + 3));
    }
    const postDocsGroup = [];
    for (let i = 0; i < postdocs.length; i += 3) {
      postDocsGroup.push(postdocs.slice(i, i + 3));
    }
    return (
      <Content className="people" style={{ marginTop: "1rem", padding: "1rem", fontFamily: "Droid Serif" }}>
        <div style={{ fontSize: "30px" }}>People</div>
        <Row justify="center">
          <Col span={5} style={{ padding: "20px"}}>
            <a href="/">
            <img src="avatar/SiqiangLuo.jpg" style={{ width: "150px", height: "150px", borderRadius: "50%" }}/>
            </a>
            <div style={{ fontSize: "20px", marginTop: "10px" }}>Siqiang LUO</div>
            <div style={{ fontSize: "15px", color: "#7d7d7d" }}> Assistant Professor</div>
          </Col>
        </Row>
        <div style={{ fontSize: "30px", marginTop: "10px" }}>PhD Students</div>
        {phdGroups.map((phdGroup, _) => (
            <Row justify="center">
              {phdGroup.map((phd, _) => (
                <Col span={5} style={{ padding: "20px"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href={phd.web}>
                      <div style={{ width: "150px", height: "150px", overflow: "hidden", borderRadius: "50%", backgroundImage: `url(${phd.img ? "avatar/" + phd.img : "anonymous.png"})`, backgroundSize: "cover" }}/>
                    </a>
                  </div>
                  <div style={{ fontSize: "20px", marginTop: "10px" }}>{phd.name}</div>
                  <div style={{ fontSize: "15px", color: "#7d7d7d", lineHeight: "1.5" }}>{phd.date}</div>
                  <div style={{ fontSize: "15px" }}>{phd.bg}</div>
                </Col>
              ))}
            </Row>
        ))}
        <div style={{ fontSize: "30px", marginTop: "10px", marginBottom: "10px" }}>Postdoctoral Researchers</div>
        {postDocsGroup.map((postDocGroup, _) => (
            <Row justify="center">
              {postDocGroup.map((postDoc, _) => (
                <Col span={5} style={{ padding: "20px"}}>
                  {/* <img src={postDoc.img ? `avatar/${postDoc.img}` : 'logo192.png'} style={{ width: '150px', height: '150px', borderRadius: '50%' }}/> */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href={postDoc.web}>
                      <div style={{ width: "150px", height: "150px", overflow: "hidden", borderRadius: "50%", backgroundImage: `url(${postDoc.img ? "avatar/" + postDoc.img : "anonymous.png"})`, backgroundSize: "cover" }}/>
                    </a>
                  </div>
                  <div style={{ fontSize: "20px" }}>{postDoc.name}</div>
                  <div style={{ fontSize: "15px", color: "#7d7d7d" }}>{postDoc.date}</div>
                  <div style={{ fontSize: "15px" }}>{postDoc.bg}</div>
                </Col>
              ))}
            </Row>
        ))}
      </Content>
    );
  }
}

export default PeopleList;
