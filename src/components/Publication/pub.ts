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
}

export const searchKeywords: string[] = ["Graph Systems", "Data Systems"];


export const searchYears: string[] = [... new Set(pubDatabase.map((pub) => pub.year))].sort((a, b) => b - a).map(
  (year) => year.toString(),
).filter((year) => year !== "0");

export const searchConferences: string[] =["SIGMOD", "PVLDB", "ICDE", "SIGKDD"];

export const pubData: PubType[] = pubDatabase;

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
