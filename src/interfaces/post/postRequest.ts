export interface PostRequest {
  userid:      string;
  categoryid:  number;
  pet_breed:   string;
  pet_type:    string;
  content:     string;
  exchange:    boolean;
  listpostimg: Listpostimg[] | null;
  listpet:     Listpet[] | null;
  listitem:    Listitem[] | null;
}

export interface Listitem {
  pet_item:    string;
  pet_type:    string;
  img:         string;
  description: string;
  price:       string;
}

export interface Listpet {
  type:        string;
  name:        string;
  gender:      string;
  age:         string;
  img:         string;
  price:       string;
  description: string;
}

export interface Listpostimg {
  img:         string;
  description: string;
}