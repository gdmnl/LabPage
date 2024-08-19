import * as React from 'react';

import { ProjectProps, peopleInfoMap } from './data';
import { PubType } from '../Publication/pub';

import { Card, Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class Project extends React.Component<ProjectProps> {
  constructor(props: ProjectProps) {
    super(props);
  }
  render() {
    const { title, description, publications } = this.props;
    const subKeywords = [...new Set(publications.flatMap((pub) => pub.subKeywords))];
    const pubInMap = new Map<string, PubType[]>();
    for (const key of subKeywords) {
      pubInMap.set(key, publications.filter((pub) => pub.subKeywords.includes(key)));
    }
    const projectMembers = publications.flatMap((pub) => pub.authors).filter((author) => {
      let mauthor = author;
      if (author[author.length - 1] === '*') {
        mauthor = author.slice(0, author.length - 1);
      }
      return mauthor.toLocaleLowerCase().split(' ').join('') in peopleInfoMap;
    }).map((author) => {
      let mauthor = author;
      if (author[author.length - 1] === '*') {
        mauthor = author.slice(0, author.length - 1);
      }
      const key: string = mauthor.toLocaleLowerCase().split(' ').join('');
      return {
        name: mauthor,
        imgSrc: peopleInfoMap[key].imgSrc ? peopleInfoMap[key].imgSrc : "",
        web: peopleInfoMap[key].web ? peopleInfoMap[key].web : "",
      };
    });
    const distinctMembers = Array.from(new Set(projectMembers.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str));
    return (
      <div style={{ fontFamily: "'Cardo'" }}>
        <h1>{title}</h1>
        <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
          <Carousel autoplay arrows>
            {
              this.props.imgs.map((img) => (
                <div>
                  <img style={{ width: '100%', height: '30rem' }} src={`project_img/${img}`} />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div style={{ textAlign: "left", fontSize: '1.1rem' }}>{description}</div>
        <div style={{ textAlign: "left", fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: "1rem" }}>
          Members
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {
            distinctMembers.map((member) => (
              <div style={{ marginLeft: '1rem', marginRight: '1rem'}}>
                <div>
                  <a href={member.web}>
                    <img src={member.imgSrc.length > 0 ? "avatar/" + member.imgSrc: "anonymous.png" } style={{ width: '5rem', height: '5rem', borderRadius: '50%' }} />
                  </a>
                </div>
                <div>{member.name}</div>
              </div>
            ))
          }
        </div>
        <div style={{ textAlign: "left", fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: "1rem" }}>
          Publications
        </div>
        {
          [...pubInMap.entries()].map(([key, pubs]) => (
            <div>
              <div style={{ textAlign: 'left', paddingLeft: '0.2rem', fontSize: '1.3rem' }}>{key}</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {[0, 1, 2].map(i => {
                  const colPubs = pubs.filter((_, j) => j % 3 === i);
                  return (
                    <div key={i} style={{ flex: 1, padding: '0.5rem' }}>
                      {
                        colPubs.map((pub: PubType) => (
                        <Card style={{ marginBottom: '0.5rem' }}>
                          <div style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
                            <a href={pub.href} style={{ outline: 'none', color: 'black', fontSize: '1rem' }}>{pub.title}</a>
                          </div>
                          <Card.Meta description={
                            <div style={{ textAlign: "left", marginBottom: '0.5rem' }}>{pub.authors.join(', ')}</div>
                          } />
                          <div style={{ textAlign: 'left', fontWeight: 'bold' }}>
                            {
                              pub.conference.length > 0 ? pub.conference : ""
                            }
                            {
                              " "
                            }
                            {
                              pub.year !== 0 ? pub.year : ""
                            }
                          </div>
                        </Card>
                      ))
                    }
                    </div>
                  )
                })}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}


export default Project;