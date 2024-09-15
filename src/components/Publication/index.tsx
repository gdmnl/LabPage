import { Input, List, Select } from "antd";
import * as React from "react";

import { pubData, pubIndex, PubType, searchConferences, searchKeywords, searchYears } from "./pub";

function genConferenceInfo(conferenceName: string, year: number) {
  if (conferenceName.length === 0) {
    if (year !== 0) {
      return " in " + year;
    }
    return "";
  }
  return " in " + conferenceName + " " + year;
}

interface PublicationListState {
  allPubs: PubType[];
  filteredPubs: PubType[];
  keyword: string;
  year: string;
  conference: string;
  searchText: string;
}

function getExtensionHref(extensionId: number, pubs: PubType[]): string {
  return pubs.filter((val) => val.id === extensionId)[0].href;
}

function getIcon(item: PubType): React.ReactNode {
  if (item.keywords.find(val => val === 'Graph Systems')) {
    return <img style={{width: '0.9rem' }} src="graph.svg" />
  } else if (item.keywords.find(val => val === 'Data Systems')) {
    return <img style={{width: '0.9rem' }} src="database.svg"/>
  }
  return ""
}

function filterPubByCondition(pubs: PubType[], keyword: string, year: string, conference: string, searchText: string): PubType[] {
  let indexedPubs: PubType[] = pubs;
  if (searchText.length > 0) {
    indexedPubs = pubIndex.search(searchText, {expand: true}).map((result: any) => {
      return indexedPubs.find((pub: PubType) => pub.title === result.ref);
    });
  }
  return indexedPubs.filter((pub: PubType) => {
    if (keyword !== "default" && !pub.keywords.includes(keyword)) {
      return false;
    }
    if (year !== "all" && pub.year.toString() !== year) {
      return false;
    }
    if (conference !== "all" && pub.conference !== conference) {
      return false;
    }
    return true;
  });
}

export class PublicationList extends React.Component<{}, PublicationListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allPubs: pubData,
      filteredPubs: pubData,
      keyword: "default",
      year: "all",
      conference: "all",
      searchText: "",
    };
  }

  public onKeywordChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, value, this.state.year, this.state.conference, this.state.searchText);
    this.setState({ ...this.state, keyword: value, filteredPubs: newFilteredPubs });
  }

  public onYearChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, value, this.state.conference, this.state.searchText);
    this.setState({ ...this.state, year: value, filteredPubs: newFilteredPubs });
  }

  public onConferenceChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, this.state.year, value, this.state.searchText);
    this.setState({ ...this.state, conference: value, filteredPubs: newFilteredPubs });
  }

  public onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, this.state.year, this.state.conference, e.target.value);
    this.setState({ ...this.state, searchText: e.target.value, filteredPubs: newFilteredPubs });
  }

  public render() {
    return (
      <div style={{ marginTop: "64px", textAlign: "left", marginBottom: "64px" }}>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <div style={{ width: '90%' }}>
            <div style={{ fontSize: "2rem", padding: "1.5rem", fontFamily: "'Cardo'", fontWeight: "bold" }}>
              Selected Publication
            </div>
            <div style={{ padding: "1rem" }}>
              <span style={{ marginRight: "1rem", marginLeft: "1rem" }}>
                Keyword:
                <Select onChange={this.onKeywordChange} defaultValue="default" style={{ marginLeft: "0.5rem", width: "10rem", textAlign: "center" }}>
                  <Select.Option value="default" style={{textAlign: "center"}}>default</Select.Option>
                  {
                    searchKeywords.map((keyword) => (
                      <Select.Option value={keyword} style={{textAlign: "center"}}>{keyword}</Select.Option>
                    ))
                  }
                </Select>
              </span>
              <span style={{ marginRight: "1rem" }}>
                Venues:
                <Select onChange={this.onConferenceChange} defaultValue="all" style={{ marginLeft: "0.5rem", width: "10rem", textAlign: "center" }}>
                  <Select.Option value="all" style={{textAlign: "center"}}>all</Select.Option>
                  {
                    searchConferences.map((keyword) => (
                      <Select.Option value={keyword} style={{textAlign: "center"}}>{keyword}</Select.Option>
                    ))
                  }
                </Select>
              </span>
              <span style={{ marginRight: "1rem" }}>
                Year:
                <Select onChange={this.onYearChange}  defaultValue="all" style={{ marginLeft: "0.5rem", width: "5rem", textAlign: "center" }}>
                  <Select.Option value="all" style={{textAlign: "center"}}>all</Select.Option>
                  {
                    searchYears.map((keyword) => (
                      <Select.Option value={keyword} style={{textAlign: "center"}}>{keyword}</Select.Option>
                    ))
                  }
                </Select>
              </span>
              <span>
                Search: <Input placeholder="input search text" onChange={this.onSearchChange} style={{ width: "20rem" }} />
              </span>
            </div>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  pageSize: 25,
                }}
                dataSource={this.state.filteredPubs}
                renderItem={(item) => (
                  item.isVisible ? 
                  <List.Item
                    key={item.title}
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{getIcon(item)}{item.title}</a>}
                      description={
                      <span>
                        <span style={{ fontStyle: "italic" }}>
                          {item.authors.join(", ")}
                        </span>
                        <span style={{ fontWeight: "bold", color: "black" }}>
                          {genConferenceInfo(item.conference, item.year)}
                        </span>
                      </span>
                      }
                    />
                    {item.description}
                    <p>
                      {item.video.length > 0 ? <a href={item.video}>[video]</a> : "" }
                      {item.href.length > 0 ? <a href={item.href}>[paper]</a> : "" }
                      {item.hasExtension >= 0 ? <a href={getExtensionHref(item.hasExtension, this.state.allPubs)}>[extension]</a> : ""}
                    </p>
                  </List.Item> : ""
                )}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default PublicationList;
