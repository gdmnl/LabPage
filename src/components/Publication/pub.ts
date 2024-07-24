import pubDatabase from './pub_data.json';

interface PubType {
  title: string;
  keywords: string[];
  year: number;
  authors: string[];
  href: string;
  description: string;
  imgSrc: string;
  video: string;
  conference: string;
};

export const pubData: PubType[] = pubDatabase;