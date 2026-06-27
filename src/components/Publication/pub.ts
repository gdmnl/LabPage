import pubDatabase from "./pub_data.json";

const elasticlunr = require("elasticlunr");

export interface PubType {
  id: number;
  title: string;
  keywords: string[];
  year: number;
  authors: string[];
  href: string;
  description: string;
  imgSrc: string;
  video: string;
  conference: string;
  subKeywords: string[];
  isExtension: boolean;
  hasExtension: number;
  isVisible: boolean;
  confExtra: string;
  code: string;
}

export const searchKeywords: string[] = ["Graph Algorithms", "Data Systems"];


export const searchYears: string[] = [... new Set(pubDatabase.map((pub) => pub.year))].sort((a, b) => b - a).map(
  (year) => year.toString(),
).filter((year) => year !== "0");

export const searchConferences: string[] =["SIGMOD", "PVLDB", "ICDE", "SIGKDD"];

export const pubData: PubType[] = pubDatabase.sort((a, b) => {
  if (a.year !== b.year) {
    return b.year - a.year;
  }
  // SIGMOD > PVLDB > IsJournal
  if (a.conference === "SIGMOD" && b.conference !== "SIGMOD") {
    return -1;
  }
  if (a.conference !== "SIGMOD" && b.conference === "SIGMOD") {
    return 1;
  }
  if (a.conference === "PVLDB" && b.conference !== "PVLDB") {
    return -1;
  }
  if (a.conference !== "PVLDB" && b.conference === "PVLDB") {
    return 1;
  }
  if (a.conference === "PODS" && b.conference !== "PODS") {
    return -1;
  }
  if (a.conference !== "PODS" && b.conference === "PODS") {
    return 1;
  }
  if (a.conference === "ICDE" && b.conference !== "ICDE") {
    return -1;
  }
  if (a.conference !== "ICDE" && b.conference === "ICDE") {
    return 1;
  }
  if (a.conference === "SIGKDD" && b.conference !== "SIGKDD") {
    return -1;
  }
  if (a.conference !== "SIGKDD" && b.conference === "SIGKDD") {
    return 1;
  }
  if (a.conference === "ICML" && b.conference !== "ICML") {
    return -1;
  }
  if (a.conference !== "ICML" && b.conference === "ICML") {
    return 1;
  }
  if (a.conference === "ICLR" && b.conference !== "ICLR") {
    return -1;
  }
  if (a.conference !== "ICLR" && b.conference === "ICLR") {
    return 1;
  }
  if (a.conference === "NeurIPS" && b.conference !== "NeurIPS") {
    return -1;
  }
  if (a.conference !== "NeurIPS" && b.conference === "NeurIPS") {
    return 1;
  }
  if (a.conference === "IsJournal" && b.conference !== "IsJournal") {
    return -1;
  }
  if (a.conference !== "IsJournal" && b.conference === "IsJournal") {
    return 1;
  }
  return b.id - a.id;
});

export const pubIndex = elasticlunr(function(this: any) {
  this.addField("title");
  this.addField("keywords");
  this.addField("authors");
  this.addField("description");
  this.addField("conference");
  this.setRef("title");
  pubData.forEach((pub) => {
    this.addDoc(pub);
  });
});
