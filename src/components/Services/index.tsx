import * as React from "react";
import serviceDatabase from "./services.json";

interface ServiceType {
  name: string;
  keyword: string;
  years: {
    role: string;
    year: string;
  }[];
  category: string;
}

function highlightRole(role: string): React.ReactNode {
  return (
    role.toLowerCase().includes("chair") || role.toLowerCase().includes("editor") ? 
    <span style={{ color: '#F65353', fontWeight: 'bold' }}>{role}</span> :
    <span>{role}</span>
  );
}

function formatRoleAndYears(service: ServiceType): React.ReactNode {
  return (
    <span>
    {service.years.map(
      (val, idx) => (
        <span>
          {highlightRole(val.role)} for {val.year === "0" ? "" : val.year}{idx === service.years.length - 1 ? "" : ", "}
        </span>
      )
    )}
    </span>
  );
}

const serviceData: ServiceType[] = serviceDatabase;

export class Services extends React.Component {
  public render() {
    return (
      <div style={{ marginBottom: "10px", marginTop: "10px", fontFamily: "'Cardo'" }}>
        <div style={{ height: "53px" }}></div>
        <div style={{
          backgroundImage: "url(service_gray.jpg)", height: "100px",
          backgroundSize: "cover", marginBottom: "60px",
          textAlign: "left", fontSize: "45px", color: "white",
          display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "40px" }}>Professional Services</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-align-center" style={{ width: "80%" }}>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Conference Services</div>
              <ul>
                {serviceData.filter((item) => item.category === "Conference Services").map((item) => (
                  <li style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    <span>{item.name}</span>
                    {
                      item.keyword.length > 0 && <span style={{ fontWeight: "bold" }}>
                        ({item.keyword} {formatRoleAndYears(item)})
                      </span>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Journal Services (selected)</div>
              <ul>
                {serviceData.filter((item) => item.category === "Journal Services").map((item) => (
                  <li style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    {formatRoleAndYears(item)}{item.name}
                    {item.keyword.length > 0 && <span style={{ fontWeight: "bold" }}>{` (${item.keyword})`}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{textAlign: "left", marginBottom: "20px" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>Teaching</div>
              <ul>
                {serviceData.filter((item) => item.category === "Teaching").map((item) => (
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
}

export default Services;
