import * as React from "react";

import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import NewsList from "./news";
import FundingList from "./fundingList";

export class SelfIntro extends React.Component {
  public render()  {
    return (
      <Content style={{ marginBottom: "10px" }}>
        <div style={{ height: "64px" }}></div>
        <div style={{ backgroundColor: "#EBF4F6", paddingTop: "20px", paddingBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "70%", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <div style={{ textAlign: "center" }}>
                <img src="avatar/SiqiangLuo.jpg" style={{ width: "8rem", height: "8rem", borderRadius: "50%" }}/>
                <div style={{ display: "flex", justifyContent: "center"}}>
                  <a href="mailto:siqiang.luo@ntu.edu.sg"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="email.svg"/></a>
                  <a href="https://dblp.org/pid/117/5965.html"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="dblp.svg"/></a>
                  <a href="https://scholar.google.com/citations?user=ZDwbMg4AAAAJ"><img style={{ width: "1.2rem", height: "1.2rem", margin: "0.5rem" }} src="googlescholar.svg"/></a>
                </div>
              </div>
              <div style={{ marginLeft: '3rem' , fontFamily: "'Cardo'" }}>
                <div style={{ fontSize: "30px", textAlign: "left",  lineHeight: "1.5" }}>
                  Siqiang Luo
                </div>
                <div style={{ fontSize: "20px", textAlign: "left", lineHeight: "2.5" }}>
                  Nanyang Assistant Professor
                </div>
                <div style={{ fontSize: "15px", textAlign: "left", lineHeight: "1.7" }}>
                  College of Computing and Data Science, Nanyang Technological University
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "right" }}>
              <img src="ntu_logo.webp" style={{ width: "250px" }}/>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", fontFamily: "'Cardo'", textAlign: "left", fontSize: "16px", lineHeight: "2" }}>
          <div style={{ width: "70%" }}>
            <p>
              {/* I am a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University.
              I am also affiliated with <a href="https://www3.ntu.edu.sg/computing/DMAL/Dante/member.html">DANTE</a>. I have broad interest in efficient and effective big data analytics, queries and learning, particularly about: */}
              I am a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University, and an affiliated member of <a href="https://www3.ntu.edu.sg/computing/DMAL/Dante/member.html">DANTE</a>.
              I was a Postdoctoral Researcher at Harvard University, advised by <a href="https://stratos.seas.harvard.edu/">Prof. Stratos Idreos</a>.
              I earned my Ph.D. in Computer Science from the University of Hong Kong under the supervision of <a href="https://www.cs.hku.hk/index.php/people/academic-staff/kao">Prof. Ben Kao</a> and <a href="https://www.reynold.hku.hk/">Prof. Reynold Cheng</a>.
              Before that, I completed both my master's and bachelor's degrees in Computer Science at Fudan University (advised by <a href="https://admis.fudan.edu.cn/sgzhou/">Prof. Shuigeng Zhou</a>).
              <br/>
              <br/>
              I have also been a visiting student/intern at the University of Cambridge (hosted by <a href="https://www.cl.cam.ac.uk/~tms41/">Prof. Thomas Sauerwald</a>), Nanyang Technological University (hosted by <a href="https://www.comp.nus.edu.sg/~xiaoxk/">Prof. Xiaokui Xiao</a>)
              and Tsinghua University (hosted by <a href="https://dbgroup.cs.tsinghua.edu.cn/ligl/">Prof. Guoliang Li</a>).
              <br/>
              <br/>
              I have broad interest in efficient and effective big data analytics, queries and mining, particularly about:
              <p>
                1. Scalable graph analytics and mining <br/>
                2. Scalable data storage and systems
              </p>
              <p>
                Please refer to our <a href="/lab">lab website</a> for more details.
              </p>
            </p>
            <p style={{ display: 'flex', justifyContent: 'start' }}>
              <div>
              <p style={{ fontSize: "20px", fontWeight: "bold", 
                fontFamily: "Droid Serif", backgroundColor: '#CCE5FF',
                border: 'solid', borderColor: '#99CCFF', padding: '0.2rem',
                color: '#2170BF', borderRadius: '0.6rem'
              }}>
                <span style={{ marginLeft: '0.2rem' }}>Recruitment (Updated in Dec 2024):</span>
                </p>
                <p> 
                  A few opennings for Research Assistant (remote or physical) <br/>
                  One openning for postdoc working on data systems or graph learning <br/>
                  One openning for Ph.D. student working on data systems or graph learning <br/>
                  Interested candidates are welcome to submit CVs by email (<a href="mailto:siqiang.luo@ntu.edu.sg">siqiang.luo@ntu.edu.sg</a>).
                </p>
              </div>
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <NewsList />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FundingList />
        </div>
      </Content>
    );
  }
}

export default SelfIntro;
