import peopleData from "../People/people.json";
import { pubData, PubType } from "../Publication/pub";
import rawData from "./project_data.json";

export interface ProjectProps {
  title: string;
  description: string;
  publications: PubType[];
  imgSrc: string;
  imgs: string[];
}

const keyValuePublications = pubData.filter(
  (pub) => pub.keywords.includes("key-value"),
);

const graphPublications = pubData.filter((pub) =>
  pub.keywords.includes("graph"),
);

const llmPublications = pubData.filter((pub) =>
  pub.keywords.includes("llm"),
);

export const keyValueProject: ProjectProps = {
  title: "Autonomous Key-Value Storage System",
  description: rawData[0].description,
  imgSrc: rawData[0].img,
  publications: keyValuePublications,
  imgs: [
    "key-value.png",
    "oasis.png",
  ],
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
};

export const llmProject: ProjectProps = {
  title: "Large Language Model",
  description: rawData[2].description,
  imgSrc: rawData[2].img,
  publications: llmPublications,
  imgs: [],
};

const allPeople = peopleData.phds.map((person) => {
  return {
    key: person.name.toLowerCase().split(" ").join(""),
    name: person.name,
    imgSrc: person.img,
    web: person.web,
  };
}).concat(peopleData.postdocs.map((person) => {
  return {
    key: person.name.toLowerCase().split(" ").join(""),
    name: person.name,
    imgSrc: person.img,
    web: person.web,
  };
}));

export const peopleInfoMap: Record<string, { name: string; imgSrc: string | undefined, web: string }> = {};
allPeople.forEach((person) => {
  peopleInfoMap[person.key] = {
    name: person.name,
    imgSrc: person.imgSrc,
    web: person.web,
  };
});
