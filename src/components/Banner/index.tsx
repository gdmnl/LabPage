import * as React from "react";

import { Content } from "antd/es/layout/layout";
import "./banner.css";

class Banner extends React.Component {
  public render() {
    return (
    <div className="banner">
      <Content>
        <img src="banner_title.png" />
      </Content>
    </div>
    );
  }
}

export default Banner;
