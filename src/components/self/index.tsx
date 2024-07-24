import * as React from 'react';

import { Content } from 'antd/es/layout/layout';
import { Row, Col, Space } from 'antd';

export class SelfIntro extends React.Component {
  render()  {
    return (
      <Content style={{ marginBottom: "10px" }}>
        <div style={{ height: '64px' }}></div>
        <div style={{ backgroundColor: "#EBF4F6", paddingTop: "20px", paddingBottom: "20px", display: "flex", justifyContent: "center" }}>
          <Row justify='center' style={{ width: '70%'}}>
            <Col style={{ flex: 0.5, textAlign: "left" }}>
              <img src="avatar/SiqiangLuo.jpg" style={{ width: '120px', height: '120px', borderRadius: '50%' }}/>
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
              <img src="ntu_logo.webp" style={{ width: '250px' }}/>
            </Col>
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center", fontFamily: "'Cardo'", textAlign: "left", fontSize: "16px", lineHeight: "2" }}>
          <div style={{ width:"70%" }}>
            <p>
              Siqiang Luo is a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University. 
              He is also affiliated with <a href="https://www3.ntu.edu.sg/scse/dmal/dante/">DANTE</a>. He received his B.S. and M.S. degrees in computer science from Fudan University, 
              and a Ph.D. degree in computer science from the University of Hong Kong (co-supervised by <a href="https://www.cs.hku.hk/index.php/people/academic-staff/kao">Prof. Ben Kao</a> and <a href="https://www.cs.hku.hk/people/academic-staff/ckcheng">Prof. Reynold Cheng</a>). 
              He was a postdoc researcher at Harvard University working with <a href="https://stratos.seas.harvard.edu/biocv">Prof. Stratos Idreos</a>. 
              His research interest lies in efficient and effective designs for big data.
              His recent research topics are:
              <p>
                1. Graph Data Management <br/>
                2. Key-value Data Management
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
};

export default SelfIntro;