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
        <div style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'gray' }}>{this.props.date}</div>
        <div style={{ fontSize: "1rem", color: "gray", marginTop: "0.5rem", marginBottom: "0.5rem" }}>{this.props.pos}</div>
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

export class Alumni extends React.Component<{ isVisible: boolean }> {
  constructor(props: { isVisible: boolean }) {
    super(props);
  }
  public render() {
    const alumniGroups = [];
    for (let i = 0; i < alumni.length; i += 3) {
      alumniGroups.push(alumni.slice(i, i + 3));
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {
          this.props.isVisible ?
          <div>
            {
              alumniGroups.map((alumniGroup, _) => (
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  {
                    alumniGroup.map((alumnus, _) => (
                      alumnus.web.length > 0 ?
                      <a href={alumnus.web}>
                        <AlumnusCard name={alumnus.name} pos={alumnus.position} date={alumnus.date} nxt={alumnus.next} />
                      </a> :
                      <AlumnusCard name={alumnus.name} pos={alumnus.position} date={alumnus.date} nxt={alumnus.next} />
                    ))
                  }
                </div>
              ))
            }
          </div>:
          ""
        }
      </div>
    );
  }
}

export default Alumni;