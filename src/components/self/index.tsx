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
                  Associate Professor
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
              {/* I am a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University, and an affiliated member of <a href="https://www3.ntu.edu.sg/computing/DMAL/Dante/member.html">DANTE</a>.
              I was a Postdoctoral Researcher at Harvard University, advised by <a href="https://stratos.seas.harvard.edu/">Prof. Stratos Idreos</a>.
              I earned my Ph.D. in Computer Science from the University of Hong Kong under the supervision of <a href="https://www.cs.hku.hk/index.php/people/academic-staff/kao">Prof. Ben Kao</a> and <a href="https://www.reynold.hku.hk/">Prof. Reynold Cheng</a>.
              Before that, I completed both my master's and bachelor's degrees in Computer Science at Fudan University (advised by <a href="https://admis.fudan.edu.cn/sgzhou/">Prof. Shuigeng Zhou</a>). My works have received multiple recognitions including ACM PODS Best Newcomer Award. group has been collaborating closely with the industry */}
              I am an Associate Professor at the College of Computing and Data Science, Nanyang Technological University, and an affiliated member of <a href="https://www3.ntu.edu.sg/computing/DMAL/Dante/member.html">DANTE</a>.
              I earned my Ph.D. in Computer Science from the University of Hong Kong and later completed my postdoc training at Harvard University. I completed both my master's and bachelor's degrees in Computer Science at Fudan University. My group has been collaborating closely with the industry to put research into practice, and my works have received multiple recognitions including ACM PODS Best Newcomer Award in 2026, PREMIA Paper Awards in 2024 and 2025. 
              <br/>
              {/* <br/>
              I have also been a visiting student/intern at the University of Cambridge (hosted by <a href="https://www.cl.cam.ac.uk/~tms41/">Prof. Thomas Sauerwald</a>), Nanyang Technological University (hosted by <a href="https://www.comp.nus.edu.sg/~xiaoxk/">Prof. Xiaokui Xiao</a>)
              and Tsinghua University (hosted by <a href="https://dbgroup.cs.tsinghua.edu.cn/ligl/">Prof. Guoliang Li</a>).
              <br/> */}
              <br/>
              Working on data management area, I have broad interest in efficient and effective data storage and data analytics over massive data, particularly about:
              <p>
                1. Scalable graph analytics and mining <br/>
                2. Scalable data storage and systems
              </p>
              Many of my works uncover new computational complexities, limits, or design spaces of data management problems.
              <p>
                Please refer to our <a href="/lab">lab website</a> and <a href="/project">representative directions</a> for more details.
              </p>
            </p>
            <p style={{ display: 'flex', justifyContent: 'start' }}>
              <div>
              <p style={{ fontSize: "20px", fontWeight: "bold", 
                fontFamily: "Droid Serif", backgroundColor: '#CCE5FF',
                border: 'solid', borderColor: '#99CCFF', padding: '0.2rem',
                color: '#2170BF', borderRadius: '0.6rem'
              }}>
                <span style={{ marginLeft: '0.2rem' }}>Recruitment (Updated in Dec 2025):</span>
                </p>
                <p> 
                  One openning for postdoc working on data systems, particularly about agentic memory management <br/>
                  Interested candidates are welcome to submit CVs by email (<a href="mailto:siqiang.luo@ntu.edu.sg">siqiang.luo@ntu.edu.sg</a>).
                </p>
              </div>
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
