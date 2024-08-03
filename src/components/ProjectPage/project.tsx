import * as React from 'react';

import { ProjectProps, peopleInfoMap } from './data';
import { PubType } from '../Publication/pub';

import { Card } from 'antd';

import './project.css';

class Project extends React.Component<ProjectProps> {
  constructor(props: ProjectProps) {
    super(props);
  }
  render() {
    const { title, description, publications } = this.props;
    const pub1 = publications.filter((_, i) => i % 3 === 0);
    const pub2 = publications.filter((_, i) => i % 3 === 1);
    const pub3 = publications.filter((_, i) => i % 3 === 2);
    const allPubs = [pub1, pub2, pub3];
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
      };
    });
    // const distinctMembers = Array.from(new Set(projectMembers));
    const distinctMembers = Array.from(new Set(projectMembers.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str));
    return (
      <div style={{ fontFamily: "'Cardo'" }}>
        <h1>{title}</h1>
        <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
          <img style={{ width: '100%' }} src="project_img/key-value.png" />
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
                  <img src={member.imgSrc.length > 0 ? "avatar/" + member.imgSrc: "anonymous.png" } style={{ width: '5rem', height: '5rem', borderRadius: '50%' }} />
                </div>
                <div>{member.name}</div>
              </div>
            ))
          }
        </div>
        <div style={{ textAlign: "left", fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: "1rem" }}>
          Publications
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            allPubs.map((pubs, i) => (
              <div key={i} style={{ flex: 1, padding: '0.5rem' }}>
                {
                  pubs.map((pub: PubType) => (
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
            ))
          }
        </div>
      </div>
    )
  }
}


export default Project;