import * as React from 'react';

import { Content } from 'antd/es/layout/layout';

export class SelfIntro extends React.Component {
  render()  {
    return (
      <Content>
        <div style={{ height: '64px' }}></div>
        <div>
          Siqiang Luo is a Nanyang Assistant Professor at the College of Computing and Data Science, Nanyang Technological University.
          He is also affiliated with DANTE. He received his B.S. and M.S. degrees in computer science from Fudan University, and a Ph.D. degree in computer science from
          the University of Hong Kong (co-supervised by Prof. Ben Kao and Prof. Reynold Cheng).
          He was a postdoc researcher at Harvard University working with Prof. Stratos Idreos. His research interest lies in efficient and effective designs for big data.
          His recent research topics can be found here.
        </div>
      </Content>
    );
  }
};

export default SelfIntro;