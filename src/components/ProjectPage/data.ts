import peopleData from "../People/people.json";
import { pubData, PubType } from "../Publication/pub";
import rawData from "./project_data.json";

export interface MemberType {
  name: string,
  imgSrc: string,
  web: string,
  area: string
}

export interface ProjectProps {
  title: string;
  description: string;
  publications: PubType[];
  imgSrc: string;
  imgs: string[];
  members: MemberType[];
  codes: string[];
}

const keyValuePubsId: number[] = [
  2,3,4,5,28,37
];

const keyValuePublications = keyValuePubsId.map((id) => {
  return pubData.filter((pub) => pub.id === id)[0];
});


const graphPubsId: number[] = [
  0,1,6,7,8,9,11,12,13,14,17,18,19,20,
  22,24,25,27,29,31,32,34,35,36,38,40,42,43,
  44,45,47,48,49,50,53,54,56
];

const graphPublications = graphPubsId.map((id) => {
  return pubData.filter((pub) => pub.id === id)[0];
});


const allPeople = peopleData.phds.map((person) => {
  return {
    key: person.name.toLowerCase().split(" ").join(""),
    name: person.name,
    imgSrc: person.img ? person.img : "",
    web: person.web,
    area: person.area
  };
}).concat(peopleData.postdocs.map((person) => {
  return {
    key: person.name.toLowerCase().split(" ").join(""),
    name: person.name,
    imgSrc: person.img ? person.img : "",
    web: person.web,
    area: person.area
  };
}));


export const dataSystemMembers = allPeople.filter((person) => person.area === "Data Systems");
export const graphSystemMembers = allPeople.filter((person) => person.area === "Graph Algorithm");

export const keyValueProject: ProjectProps = {
  title: "Autonomous Key-Value Storage System",
  description: rawData[0].description,
  imgSrc: rawData[0].img,
  publications: keyValuePublications,
  imgs: [
    "key-value.png",
    "oasis.png",
  ],
  members: dataSystemMembers,
  codes: [
    "https://github.com/NTU-Siqiang-Group/MooseLSM",
    "https://github.com/Woooooow-Pro/Oasis-RangeFilter",
    "https://github.com/Eric-R-Knorr/Proteus"
  ]
};

export const graphProject: ProjectProps = {
  title: "Scalable Graph Computation",
  description: rawData[1].description,
  imgSrc: rawData[1].img,
  publications: graphPublications,
  imgs: [
    "graph.png",
    "bird.png",
  ],
  members: graphSystemMembers,
  codes: [
    "https://github.com/ZulunZhu/dynamiccontrastive-learning",
    "https://github.com/gdmnl/LD2",
    "https://github.com/gdmnl/SCARA-PPR",
    "https://github.com/algorithm-panda/CSEQ",
    "https://github.com/gdmnl/Agenda"
  ]
};

