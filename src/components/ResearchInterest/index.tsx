import * as React from "react";

import { Content } from "antd/es/layout/layout";

const topcis = [
  {
    logo: "graph.svg",
    title: "Advanced Data Structures",
  },
  {
    logo: "database.svg",
    title: "Big Data Systems",
  },
  {
    logo: "infra.svg",
    title: "Scalable Algorithms and Models",
  },
];

export class ResearchInterest extends React.Component {
  public render() {
    return (
      <Content className="research-interest" style={{ backgroundColor: "#E0E0E0", padding: "1rem", fontFamily: "Droid Serif"}}>
        <div style={{ fontSize: "30px", fontFamily: "Montserrat", fontWeight: 500 }}>Research Areas</div>
        <div style={{ fontSize: "20px", color: "#777"}}>graph algorithms, graph learning, database systems</div>
        <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
          <div style={{ width: "60%", fontSize: "18px", textAlign: "left", fontFamily: "Times", lineHeight: "1.7" }}>
          Today, more than 300 million terabytes of data are created each day. In such a big data era, the solution to managing data efficiently is of utter importance.
          Our vision is to scale-up “data”-based computation to at least billion-scale level. We design various scalable big data systems, advanced data structures and efficient algorithms, ranging from theory-informed studies to system-oriented research.
          We are particularly interested in foundational or complex data types, such as key-value and graph-structured data, which are central to most data-related research and applications.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          {topcis.map((topic, _) => (
            <div>
              <img src={topic.logo} style={{ width: "70px", height: "70px", borderRadius: "50%" }}/>
              <div style={{ fontSize: "18px", padding: "20px", fontFamily: "Times" }}>{topic.title}</div>
            </div>
          ))}
        </div>
      </Content>
    );
  }
}

export default ResearchInterest;
