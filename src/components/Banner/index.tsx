import * as React from "react";

import "./banner.css";

import { animated, Spring, useSpring } from 'react-spring';

const title = [...'Data System and Graph Analysis Lab'];

const LineFill = () => {
  const props = useSpring({from: { width: '0%' }, to: { width: '80%' }, config: { duration: 500 } });
  return (
    <animated.div
      style={{
        height: '3px',
        backgroundColor: 'white',
        ...props
      }}
    >
    </animated.div>
  )
}

const LogoFill = () => {
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {
      duration: 700
    }
  });
  return (
    <animated.div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', ...props }}>
      <img src="ntu_logo_white.png" style={{ width: '10rem' }} />
      <div style={{ height: '4rem', width: '1px', backgroundColor: 'white', marginLeft: '1rem', marginRight: '1rem' }}/>
      <div style={{ color: 'white', fontSize: '1rem', textAlign: 'left' }}>
        College of Computing <br/> and Data Science
      </div>
    </animated.div>
  )
}

class Banner extends React.Component {
  public render() {
    return (
    <div className="banner">
      <div style={{ paddingTop: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ marginTop: '4rem' }}>
          {
            title.map((letter, idx)=>(
              <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                delay={idx * 10 + 100}
              >
                {
                  (style: any) => (
                    <animated.span
                      style={{
                        fontSize: '4rem',
                        color: 'white',
                        ...style
                      }}
                    >
                      {letter}
                    </animated.span>
                  )
                }
              </Spring>
            ))
          }
        </div>
        {
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <LineFill />
          </div>
        }
        <LogoFill />
      </div>
    </div>
    );
  }
}

export default Banner;
