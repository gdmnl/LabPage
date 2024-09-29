import * as React from "react";

import { PubType } from "../Publication/pub";
import { ProjectProps } from "./data";

import { Card } from "antd";

function getCodeBadge(code: string) {
  if (code.length > 0) {
    return (
      <a href={code}>
        <img style={{ width: '0.75rem' }} src="https://github.githubassets.com/favicons/favicon.svg" />
      </a>
    );
  }
  return (
    <img style={{ width: '0.75rem' }} src="https://github.githubassets.com/favicons/favicon.svg" />
  );
}

class Project extends React.Component<ProjectProps> {
  constructor(props: ProjectProps) {
    super(props);
  }
  public render() {
    const { title, description, publications } = this.props;
    const subKeywords = [...new Set(publications.flatMap((pub) => pub.subKeywords))];
    const pubInMap = new Map<string, PubType[]>();
    for (const key of subKeywords) {
      pubInMap.set(key, publications.filter((pub) => pub.isVisible && pub.subKeywords.includes(key)));
    }
    return (
      <div style={{ fontFamily: "'Cardo'" }}>
        <h1>{title}</h1>
        <div style={{ marginBottom: "1rem", marginTop: "1rem" }}></div>
        <div style={{ textAlign: "left", fontSize: "1.1rem" }}>{description}</div>
        <div style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem", marginBottom: "1rem" }}>
          Members
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {
            this.props.members.map((member) => (
              <div style={{ marginLeft: "1rem", marginRight: "1rem"}}>
                <div>
                  <a href={member.web}>
                    <img src={member.imgSrc.length > 0 ? "avatar/" + member.imgSrc : "anonymous.png" } style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} />
                  </a>
                </div>
                <div>{member.name}</div>
              </div>
            ))
          }
        </div>
        <div>
          <div style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.1rem" }}>Codes</div>
          <div>
            {
              this.props.codes.map((code) => (
                <div style={{ textAlign: 'start' }}>
                  <a href={code} >{getCodeBadge("")} {code}</a>
                </div>
              ))
            }
          </div>
        </div>
        <div style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.1rem" }}>
          Publications
        </div>
        <div style={{ textAlign: 'left', marginBottom: '0.1rem', 
          fontStyle: 'italic', color: '#2170BF', display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
          <span>code available </span>
          <span style={{ marginLeft: '0.3rem' }}>{getCodeBadge("")}</span>
        </div>
        {
          [...pubInMap.entries()].map(([key, pubs]) => (
            <div>
              <div style={{ textAlign: "left", paddingLeft: "0.2rem", fontSize: "1.3rem" }}>{key}</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {[0, 1, 2].map((i) => {
                  const colPubs = pubs.filter((pub, j) => pub.isVisible && j % 3 === i);
                  return (
                    <div key={i} style={{ flex: 1, padding: "0.5rem" }}>
                      {
                        colPubs.map((pub: PubType) => (
                        <Card style={{ marginBottom: "0.5rem" }}>
                          <div style={{ textAlign: "left", marginBottom: "0.5rem" }}>
                            <a href={pub.href} style={{ outline: "none", color: "black", fontSize: "1rem" }}>{pub.title}</a>
                          </div>
                          <Card.Meta description={
                            <div style={{ textAlign: "left", marginBottom: "0.5rem" }}>{pub.authors.join(", ")}</div>
                          } />
                          <div style={{ textAlign: "left", fontWeight: "bold", display: 'flex', justifyContent: 'start' }}>
                            {
                              pub.conference.length > 0 ? pub.conference : ""
                            }
                            {
                              " "
                            }
                            {
                              pub.year !== 0 ? pub.year : ""
                            }
                            {
                              pub.code.length > 0 ? 
                              <span style={{ marginLeft: '0.5rem' }}>
                                {getCodeBadge(pub.code)}
                              </span>
                              : ""
                            }
                          </div>
                        </Card>
                      ))
                    }
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Project;
