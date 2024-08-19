import * as React from 'react';

import { List } from 'antd';

import newsData from './news.json';

interface NewsType {
  title: string;
  description: string;
  img: string;
};

const newsList: NewsType[] = newsData;

class NewsPage extends React.Component {
  render() {
    const midIdx = Math.ceil(newsList.length / 2);
    const newsRenderList: NewsType[][] = [newsList.slice(0, midIdx), newsList.slice(midIdx)];
    return (
      <div>
        <div style={{ height: "64px" }}></div>
        <h1 style={{ fontSize: "40px", fontFamily: "'Cardo'"  }}>News</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%' }}>
            <div id="list-wrapper" style={{ display: "flex", justifyContent: 'center' }}>
              {
                newsRenderList.map((newsColumn, idx) => (
                  <div key={idx} style={{ flex: "1", textAlign: 'left' }}>
                    {
                      newsColumn.map((news, _) => (
                        <List>
                          <List.Item>
                            <List.Item.Meta title={
                              <span style={{ fontSize: '1.2rem' }}>{news.title}</span>
                            } 
                              description={news.description} 
                              avatar={<img src={news.img} style={{ width: '10rem', height: 'auto' }} />}
                            />
                          </List.Item>
                        </List>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsPage;