import * as React from "react";

import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import NewsList from "./news";

export class SelfIntro extends React.Component {
  public render()  {
    return (
      <Content style={{ marginBottom: "10px" }}>
        <div style={{ height: "64px" }}></div>
        <div style={{ backgroundColor: "#EBF4F6", paddingTop: "20px", paddingBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
          <Row justify="center" style={{ width: "70%"}}>
            <Col style={{ flex: 0.5, textAlign: "center" }}>
              <img src="avatar/SiqiangLuo.jpg" style={{ width: "8rem", height: "8rem", borderRadius: "50%" }}/>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <a href="mailto:siqiang.luo@ntu.edu.sg"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="email.svg"/></a>
                <a href="https://dblp.org/pid/117/5965.html"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="dblp.svg"/></a>
                <a href="https://scholar.google.com/citations?user=ZDwbMg4AAAAJ"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="googlescholar.svg"/></a>
              </div>
            </Col>
            <Col style={{ flex: 1.65, fontFamily: "'Cardo'" }}>
              <div style={{ fontSize: "30px", textAlign: "left",  lineHeight: "1.5" }}>
                Siqiang Luo
              </div>
              <div style={{ fontSize: "20px", textAlign: "left", lineHeight: "2.5" }}>
                Nanyang Assistant Professor
              </div>
              <div style={{ fontSize: "15px", textAlign: "left", lineHeight: "1.7" }}>
                College of Computing and Data Science, Nanyang Technological University
              </div>
            </Col>
            <Col style={{ display: "flex", alignItems: "center", flex: "1", justifyContent: "right" }}>
              <img src="ntu_logo.webp" style={{ width: "250px" }}/>
            </Col>
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center", fontFamily: "'Cardo'", textAlign: "left", fontSize: "16px", lineHeight: "2" }}>
          <div style={{ width: "70%" }}>
            <p>
              I am a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University.
              I am also affiliated with <a href="https://www3.ntu.edu.sg/computing/DMAL/Dante/member.html">DANTE</a>. I have broad interest in efficient and effective big data analytics, queries and learning, particularly about:
              <p>
                1. Graph analytics and learning <br/>
                2. Scalable data structures and systems <br/>
                3. Machine-learning enhanced data management
              </p>
              <p>
                Please refer to his <a href="/lab">lab website</a> for more details.
              </p>
            </p>
            <p>
              <p style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Droid Serif" }}>Recruitment (Updated in July 2024):</p>
              A few opennings for Research Assistant (remote or physical) <br/>
              
              Interested candidates are welcome to submit CVs by email (<a href="mailto:siqiang.luo@ntu.edu.sg">siqiang.luo@ntu.edu.sg</a>).
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <NewsList />
        </div>
      </Content>
    );
  }
}

export default SelfIntro;
