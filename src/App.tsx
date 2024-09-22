import * as React from "react";
import "./App.css";

import { Layout } from "antd";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import PeopleList from "./components/People";
import ProjectPage from "./components/ProjectPage";
import PublicationList from "./components/Publication";
import ResearchInterest from "./components/ResearchInterest";
import SelfIntro from "./components/self";
import Services from "./components/Services";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <a href="/">Home</a>,
    key: "home",
  },
  {
    label: <a href="/lab">Lab</a>,
    key: "lab",
  },
  {
    label: <a href="/publication">Publication</a>,
    key: "pub",
  },
  {
    label: <a href="/services">Services</a>,
    key: "service",
  },
  {
    label: <a href="/project">Projects</a>,
    key: "project",
  }
];

class LabHome extends React.Component {
  public render() {
    return (
      <div>
        <Banner />
        <ResearchInterest />
        <PeopleList />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Layout>
        <Header style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}>
          <div className="ntulogo">
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false} items={items} style={{justifyContent: "right", fontSize: "18px", width: "90%" }} />
        </Header>
        <Content>
          <BrowserRouter>
          <Routes>
            <Route path="/lab" element={<LabHome />} />
            <Route path="/" element={<SelfIntro />} />
            <Route path="/publication" element={<PublicationList />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
        </Content>
        <Footer style={{ height: "15vh", backgroundColor: "black", color: "white" }}>
          <p>
            <span>Address: 50 Nanyang Ave, #32 block N4 #02a, Singapore, 639798</span>
          </p>
          <p>Copyright © 2022 – 2024 – All Rights Reserved</p>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
