import * as React from 'react';

import './banner.css';
import { Content } from 'antd/es/layout/layout';

class Banner extends React.Component {
  render() {
    return (
    <div className="banner">
      <Content>
        <img src='banner_title.png' />
      </Content>
    </div>
    );
  }
}

export default Banner;