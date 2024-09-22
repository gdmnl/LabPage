import * as React from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

import * as projectData from "./data";
import Project from "./project";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Key-Value Storage System",
    children: <Project {...projectData.keyValueProject} />,
  },
  {
    key: "2",
    label: "Scalable Graph Computation",
    children: <Project {...projectData.graphProject} />,
  },
];

class ProjectPage extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ height: "64px" }}></div>
        <div style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(project_banner.webp)",
          height: "100px",
          backgroundSize: "cover", marginBottom: "1rem", opacity: '1',
          textAlign: "left", fontSize: "45px", color: "white",
          display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "40px", fontFamily: "'Cardo'" }}>Featured Projects</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <Tabs indicator={{ align: "center" }} defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
