import * as React from 'react';
import { Select, List, Input } from 'antd';

import { pubData, PubType, searchKeywords, searchConferences, searchYears, pubIndex } from './pub';

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
};

function filterPubByCondition(pubs: PubType[], keyword: string, year: string, conference: string, searchText: string): PubType[] {
  let indexedPubs: PubType[] = pubs;
  if (searchText.length > 0) {
    indexedPubs = pubIndex.search(searchText).map((result: any) => {
      return indexedPubs.find((pub: PubType) => pub.title === result.ref);
    });
    // sort by year
    indexedPubs.sort((a: PubType, b: PubType) => b.year - a.year);
  }
  return indexedPubs.filter((pub: PubType) => {
    if (keyword !== "all" && !pub.keywords.includes(keyword)) {
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
      keyword: "all",
      year: "all",
      conference: "all",
      searchText: "",
    };
  }

  onKeywordChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, value, this.state.year, this.state.conference, this.state.searchText);
    this.setState({ ...this.state, keyword: value, filteredPubs: newFilteredPubs });
  }

  onYearChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, value, this.state.conference, this.state.searchText);
    this.setState({ ...this.state, year: value, filteredPubs: newFilteredPubs });
  }

  onConferenceChange = (value: string) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, this.state.year, value, this.state.searchText);
    this.setState({ ...this.state, conference: value, filteredPubs: newFilteredPubs });
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilteredPubs = filterPubByCondition(this.state.allPubs, this.state.keyword, this.state.year, this.state.conference, e.target.value);
    this.setState({ ...this.state, searchText: e.target.value, filteredPubs: newFilteredPubs });
  }

  render(){
    return (
      <div style={{ marginTop: "64px", textAlign: "left", marginBottom: '64px' }}>
        <div style={{ fontSize: '2rem', padding: '1.5rem', fontFamily: "'Cardo'", fontWeight: 'bold' }}>
          Selected Publication
        </div>
        <div style={{ padding: '1rem' }}>
          <span style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            Keyword: 
            <Select onChange={this.onKeywordChange} defaultValue="all" style={{ marginLeft: '0.5rem', width: '10rem', textAlign: 'center' }}>
              <Select.Option value="all" style={{textAlign: 'center'}}>all</Select.Option>
              {
                searchKeywords.map((keyword) => (
                  <Select.Option value={keyword} style={{textAlign: 'center'}}>{keyword}</Select.Option>
                ))
              }
            </Select>
          </span>
          <span style={{ marginRight: '1rem' }}>
            Conference: 
            <Select onChange={this.onConferenceChange} defaultValue="all" style={{ marginLeft: '0.5rem', width: '10rem', textAlign: 'center' }}>
              <Select.Option value="all" style={{textAlign: 'center'}}>all</Select.Option>
              {
                searchConferences.map((keyword) => (
                  <Select.Option value={keyword} style={{textAlign: 'center'}}>{keyword}</Select.Option>
                ))
              }
            </Select>
          </span>
          <span style={{ marginRight: '1rem' }}>
            Time: 
            <Select onChange={this.onYearChange}  defaultValue="all" style={{ marginLeft: '0.5rem', width: '5rem', textAlign: 'center' }}>
              <Select.Option value="all" style={{textAlign: 'center'}}>all</Select.Option>
              {
                searchYears.map((keyword) => (
                  <Select.Option value={keyword} style={{textAlign: 'center'}}>{keyword}</Select.Option>
                ))
              }
            </Select>
          </span>
          <span>
            Search: <Input placeholder="input search text" onChange={this.onSearchChange} style={{ width: '20rem' }} />
          </span>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 25,
          }}
          dataSource={this.state.filteredPubs}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
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
                {item.video.length > 0 ? <a href={item.video}>[video]</a>: "" }
                {item.href.length > 0 ? <a href={item.href}>[paper]</a>: "" }
              </p>
            </List.Item>
          )}
        />
      </div>
    );
  }
};

export default PublicationList;