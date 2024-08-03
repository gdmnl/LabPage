import * as React from 'react';
import serviceDatabase from './services.json';

interface ServiceType {
  name: string;
  keyword: string;
  years: string[];
  category: string;
};

function ComputeYearString(years: string[]): string {
  let yearNums = years.map((year) => parseInt(year));
  // if the year is continuous
  let isContinuous = true;
  for (let i = 0; i < yearNums.length - 1; i++) {
    if (yearNums[i] + 1 !== yearNums[i + 1]) {
      isContinuous = false;
      break;
    }
  }
  if (isContinuous) {
    return `${yearNums[0]}-${yearNums[yearNums.length - 1]}`;
  } else {
    return years.join(', ');
  }
}

const serviceData: ServiceType[] = serviceDatabase;

export class Services extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "10px", marginTop: "10px", fontFamily: "'Cardo'" }}>
        <div style={{ height: '53px' }}></div>
        <div style={{ 
          backgroundImage: "url(service_gray.jpg)", height: "100px",
          backgroundSize: "cover", marginBottom: "60px",
          textAlign: "left", fontSize: "45px", color: "white",
          display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "40px" }}>Professional Services</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className='content-align-center' style={{ width: '80%' }}>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Conference Program Committee</div>
              <ul>
                {serviceData.filter((item) => item.category === 'Program Committee & Reviewer').map((item) => (
                  <li style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    <span>{item.name}</span>
                    {item.keyword.length > 0 && <span style={{ fontWeight: "bold" }}>{` (${item.keyword} ${ComputeYearString(item.years)})`}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Journal Reviewer (selected)</div>
              <ul>
                {serviceData.filter((item) => item.category === 'Journal Reviewer').map((item) => (
                  <li style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    <span>{item.name}</span>
                    {item.keyword.length > 0 && <span style={{ fontWeight: "bold" }}>{` (${item.keyword})`}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Teaching</div>
              <ul>
                {serviceData.filter((item) => item.category === 'Teaching').map((item) => (
                  <li style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    <span>{item.name}</span>
                    {item.keyword.length > 0 && <span style={{ fontWeight: "bold" }}>{` (${item.keyword})`}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Services;