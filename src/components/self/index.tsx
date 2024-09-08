import * as React from "react";

import { Col, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";

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
                College of Computing and Data Science,
                in Nanyang Technological University
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
              Siqiang Luo is a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University.
              He is also affiliated with <a href="https://www3.ntu.edu.sg/scse/dmal/dante/">DANTE</a>. He received his B.S. and M.S. degrees in computer science from Fudan University,
              and a Ph.D. degree in computer science from the University of Hong Kong (co-supervised by <a href="https://www.cs.hku.hk/index.php/people/academic-staff/kao">Prof. Ben Kao</a> and <a href="https://www.cs.hku.hk/people/academic-staff/ckcheng">Prof. Reynold Cheng</a>).
              He was a postdoc researcher at Harvard University working with <a href="https://stratos.seas.harvard.edu/biocv">Prof. Stratos Idreos</a>.
              He has broad interest in efficient and effective big data analytics, queries and learning, particularly about:
              <p>
                1. graph analytics and learning <br/>
                2. scalable data structures and systems <br/>
                3. machine-learning enhanced data management
              </p>
              <p>
                Please refer to his <a href="/">lab website</a> for more details.
              </p>
            </p>
            <p>
              <p style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Droid Serif" }}>Recruitment (updated July 2024):</p>
              1. A few opennings for Research Assistant (remote or physical) <br/>
              2. One Ph.D. openning for January 2025 batch <br/>

              Interested candidates are welcome to submit CVs by email (<a href="mailto:siqiang.luo@ntu.edu.sg">siqiang.luo@ntu.edu.sg</a>).
            </p>
          </div>
        </div>
      </Content>
    );
  }
}

export default SelfIntro;
