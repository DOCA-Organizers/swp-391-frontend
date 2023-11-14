export interface AccountRequest {
  username: string;
  password: string;
}

export interface SearchContent {
  content: string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CategoryRequest {
  categoryId: number;
}

export interface ReportListInterface {
  postID: string;
  numberOfPost: number;
}

export interface BookmarkList {
  id: string;
  content: string;
  title: string;
  createTime: Date;
  active: boolean;
  sold: boolean;
  exchange: boolean;
}

export interface PetList {
  postID: number;
}

export interface PetItemsList {
  postID: number;
}

//getAPIMyProfile
export interface CountResponse {
  user: UserProfile;
  role: Role;
  datestart: Date;
  numofpost: number;
  numofcomment: number;
  numofreact: number;
}

export interface Role {
  id: number;
  name: string;
  type: string;
}

export interface UserProfile {
  id: string;
  password: string;
  fullName: string;
  email: string;
  dob: null;
  gender: boolean;
  avt: null;
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  username: string;
  authorities: Authority[];
  ban: boolean;
  isActive: boolean;
  accountNonLocked: boolean;
}

export interface Authority {
  authority: string;
}
