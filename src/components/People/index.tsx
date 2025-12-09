import * as React from "react";

import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { phds, postdocs, masters, alumni } from "./data";

import Alumni from "./alumni";

const elementInRow = 4;

export class PeopleList extends React.Component<{}, { alumniVisible: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      alumniVisible: false
    };
  }
  public render() {
    const phdGroups = [];
    for (let i = 0; i < phds.length; i += elementInRow) {
      phdGroups.push(phds.slice(i, i + elementInRow));
    }
    const postDocsGroup = [];
    for (let i = 0; i < postdocs.length; i += elementInRow) {
      postDocsGroup.push(postdocs.slice(i, i + elementInRow));
    }
    const mastersGroups = [];
    for (let i = 0; i < masters.length; i += elementInRow) {
      mastersGroups.push(masters.slice(i, i + elementInRow));
    }
    return (
      <Content className="people" style={{ marginTop: "1rem", padding: "1rem", fontFamily: "Droid Serif" }}>
        <div style={{ fontSize: "3rem" }}>Members</div>
        <Row justify="center">
          <Col span={5} style={{ padding: "20px"}}>
            <a href="/">
            <img src="avatar/SiqiangLuo.jpg" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}/>
            </a>
            <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Siqiang LUO</div>
            <div style={{ fontSize: "1rem", color: "#7d7d7d" }}> Assistant Professor</div>
          </Col>
        </Row>
        <div style={{ fontSize: "30px", marginTop: "1rem" }}>PhD Students</div>
        {phdGroups.map((phdGroup, _) => (
            <Row justify="center">
              {phdGroup.map((phd, _) => (
                <Col span={5} style={{ padding: "1rem"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {phd.web.length > 0 ? 
                      <a href={phd.web} target="_blank">
                      <div style={{ width: "8rem", height: "8rem", overflow: "hidden", borderRadius: "50%", 
                        backgroundImage: `url(${phd.img ? "avatar/" + phd.img : "hubot.png"})`, backgroundSize: "cover" }}/>
                      </a> :
                      <div style={{ width: "8rem", height: "8rem", overflow: "hidden", borderRadius: "50%", 
                        backgroundImage: `url(${phd.img ? "avatar/" + phd.img : "hubot.png"})`, backgroundSize: "cover" }}/>
                    }
                  </div>
                  <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                    {phd.web.length > 0 ? <a href={phd.web} target="_blank">{phd.name}</a> : phd.name}
                  </div>
                  <div style={{ fontSize: "1rem", color: "#7d7d7d", lineHeight: "1.5" }}>{phd.date}</div>
                  <div style={{ fontSize: "1rem", color: "#7d7d7d", lineHeight: "1.5" }}>Research Area: {phd.area}</div>
                </Col>
              ))}
            </Row>
        ))}
        <div style={{ fontSize: "30px", marginTop: "10px", marginBottom: "10px" }}>Postdoctoral Researchers</div>
        {postDocsGroup.map((postDocGroup, _) => (
            <Row justify="center">
              {postDocGroup.map((postDoc, _) => (
                <Col span={5} style={{ padding: "1rem"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href={postDoc.web} target="_blank">
                      <div style={{ width: "8rem", height: "8rem", overflow: "hidden", borderRadius: "50%", 
                        backgroundImage: `url(${postDoc.img ? "avatar/" + postDoc.img : "hubot.png"})`, backgroundSize: "cover" }}/>
                    </a>
                  </div>
                  <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                    {postDoc.web.length > 0 ? <a href={postDoc.web} target="_blank">{postDoc.name}</a> : postDoc.name}
                  </div>
                  <div style={{ fontSize: "1rem", color: "#7d7d7d", lineHeight: "1.5" }}>{postDoc.date}</div>
                  <div style={{ fontSize: "1rem", color: "#7d7d7d", lineHeight: "1.5" }}>Research Area: {postDoc.area}</div>
                </Col>
              ))}
            </Row>
        ))}
        <div style={{ fontSize: "30px", marginTop: "10px", marginBottom: "10px" }}>
          Master Students
        </div>
        {mastersGroups.map((masterGroup, _) => (
            <Row justify="center">
              {masterGroup.map((master, _) => (
                <Col span={5} style={{ padding: "1rem"}}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {master.web.length > 0 ? 
                      <a href={master.web} target="_blank">
                      <div style={{ width: "8rem", height: "8rem", overflow: "hidden", borderRadius: "50%", 
                        backgroundImage: `url(${master.img ? "avatar/" + master.img : "hubot.png"})`, backgroundSize: "cover" }}/>
                      </a> :
                      <div style={{ width: "8rem", height: "8rem", overflow: "hidden", borderRadius: "50%", 
                        backgroundImage: `url(${master.img ? "avatar/" + master.img : "hubot.png"})`, backgroundSize: "cover" }}/>
                    }
                  </div>
                  <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                    {master.web.length > 0 ? <a href={master.web} target="_blank">{master.name}</a> : master.name}
                  </div>
                  <div style={{ fontSize: "1rem", color: "#7d7d7d", lineHeight: "1.5" }}>{master.date}</div>
                </Col>
              ))}
            </Row>
        ))}
        <div style={{ fontSize: "30px", marginTop: "10px", marginBottom: "10px", display: 'flex', justifyContent: 'center' }}>
          <span style={{ marginRight: '0.5rem' }}>Alumni</span>
          {
            this.state.alumniVisible ?
            <MinusCircleOutlined style={{ width: '1.5rem' }} onClick={() => this.setState({ alumniVisible: false })} />:
            <PlusCircleOutlined style={{ width: '1.5rem' }} onClick={() => this.setState({ alumniVisible: true })}/>
          }
          </div>
        <Alumni isVisible={this.state.alumniVisible} />
      </Content>
    );
  }
}

export default PeopleList;
