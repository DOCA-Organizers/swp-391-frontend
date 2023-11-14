export interface PostResponse {
  id: string;
  content: string;
  createTime: Date;
  pet_Breed: PetBreed;
  pets: Pet[];
  petItems: PetItem[];
  postImgs: PostImg[];
  active: boolean;
  exchange: boolean;
  sold: boolean;
}

export interface PetItem {
  id: string;
  pet_item: string;
  pet_type: string;
  img: string;
  description: string;
  price: string;
}

export interface PetBreed {
  id: string;
  breedname: string;
  pet_type: string;
}

export interface Pet {
  id: string;
  type: string;
  name: string;
  gender: boolean;
  age: number;
  img: string;
  price: string;
  description: string;
}

export interface PostImg {
  id: string;
  img: string;
  description: string;
}

export interface PostComponent {
  id: string;
  content: string;
  createTime: Date;
  pet_Breed: PetBreed;
  pets: Pet[];
  petItems: PetItem[];
  postImgs: PostImg[];
  active: boolean;
  exchange: boolean;
  sold: boolean;
}
