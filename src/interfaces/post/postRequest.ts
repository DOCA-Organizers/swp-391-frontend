import { ImageListType } from "react-images-uploading";

export interface PostRequest {
  userid: string;
  categoryid: number;
  pet_breed: string;
  pet_type: string;
  isCreateHag: boolean;
  content: string;
  title: string | null;
  exchange: boolean;
  listpostimg: Listpostimg[];
  listpet: Listpet[] | null;
  listitem: Listitem[] | null;
}

export interface Listitem {
  pet_item: string;
  pet_type: string;
  img: string | null;
  description: string;
  price: string;
}

export interface Listpet {
  type: string;
  name: string;
  gender: string;
  age: string;
  img: string | null;
  price: string;
  description: string;
}

export interface Listpostimg {
  img: string;
  description: string;
}
