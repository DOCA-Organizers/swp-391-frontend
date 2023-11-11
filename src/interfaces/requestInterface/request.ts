export interface AccountRequest {
  username: string;
  password: string;
}

// export interface RegisRequest {
//   username: string;
//   password: string;
//   fullName: string;
//   dateOfBirth: string;
//   email: string;
// }

export interface SearchContent {
  content: string;
}

export interface CategoryRequest {
  categoryId: number;
}

export interface MyProfileRequest {
  userID: string;
  username: string;
  role: string;
  manage: string;
  dateJoined: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
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
