import * as React from "react";

import { alumni } from "./data";

class AlumnusCard extends React.Component<{ name: string, date: string, pos: string, nxt: string }> {
  constructor(props: { name: string, date: string, pos: string, nxt: string }) {
    super(props);
  }
  public render() {
    return (
      <div style={{ 
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '1.5rem', border: 'solid',
        width: '20rem', margin: '1rem', borderColor: '#E0E0E0',
        borderRadius: '1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{this.props.name}</div>
        {this.props.date.length > 0 ? <div style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'gray' }}>{this.props.date}</div> : ""}
        {this.props.pos.length > 0 ? <div style={{ fontSize: "1rem", color: "gray", marginTop: "0.5rem", marginBottom: "0.5rem" }}>{this.props.pos}</div>: ""}
        <div style={{
          fontSize: '0.8rem',
          color: 'gray'
        }}>
          {this.props.nxt.length > 0 ? `Next: ${this.props.nxt}` : ""}
        </div>
      </div>
    );
  }
}

const rowNum = 3;
const graduatedPhds = alumni.filter((a) => a.position === "Graduated PhD");
const postDocs = alumni.filter((a) => a.position === "PostDoc");
const others = alumni.filter((a) => a.position !== "Graduated PhD" && a.position !== "PostDoc");

export class Alumni extends React.Component<{ isVisible: boolean }> {
  constructor(props: { isVisible: boolean }) {
    super(props);
  }
  public render() {
    const phdsGroups = [];
    const postDocGroups = [];
    const otherGroups = [];
    for (let i = 0; i < graduatedPhds.length; i += rowNum) {
      phdsGroups.push(graduatedPhds.slice(i, i + rowNum));
    }
    for (let i = 0; i < postDocs.length; i += rowNum) {
      postDocGroups.push(postDocs.slice(i, i + rowNum));
    }
    for (let i = 0; i < others.length; i += rowNum) {
      otherGroups.push(others.slice(i, i + rowNum));
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {
          this.props.isVisible ?
          <div>
            <div style={{ fontSize: "1.5rem" }}>Graduated PhDs</div>
            <div>
            {
              phdsGroups.map((alumniGroup, _) => (
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  {
                    alumniGroup.map((alumnus, _) => (
                      alumnus.web.length > 0 ?
                      <a href={alumnus.web}>
                        <AlumnusCard name={alumnus.name} pos="" date={alumnus.date} nxt={alumnus.next ?? ""} />
                      </a> :
                      <AlumnusCard name={alumnus.name} pos="" date={alumnus.date} nxt={alumnus.next ?? ""} />
                    ))
                  }
                </div>
              ))
            }
            </div>
            <div style={{ fontSize: "1.5rem" }}>Postdoctoral Researchers</div>
            <div>
            {
              postDocGroups.map((alumniGroup, _) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    alumniGroup.map((alumnus, _) => (
                      alumnus.web.length > 0 ?
                      <a href={alumnus.web}>
                        <AlumnusCard name={alumnus.name} pos="" date={alumnus.date} nxt={alumnus.next ?? ""} />
                      </a> :
                      <AlumnusCard name={alumnus.name} pos="" date={alumnus.date} nxt={alumnus.next ?? ""} />
                    ))
                  }
                </div>
              ))
            }
            </div>
            <div style={{ fontSize: "1.5rem" }}>Others</div>
            <div>
            {
              otherGroups.map((alumniGroup, _) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    alumniGroup.map((alumnus, _) => (
                      alumnus.web.length > 0 ?
                      <a href={alumnus.web}>
                        <AlumnusCard name={alumnus.name} pos={alumnus.position} date={alumnus.date} nxt={alumnus.next ?? ""} />
                      </a> :
                      <AlumnusCard name={alumnus.name} pos={alumnus.position} date={alumnus.date} nxt={alumnus.next ?? ""} />
                    ))
                  }
                </div>
              ))
            }
            </div>
          </div> :
          ""
        }
      </div>
    );
  }
}

export default Alumni;
