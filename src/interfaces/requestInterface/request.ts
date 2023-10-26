export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisRequest {
  username: string;
  password: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
}

export interface SearchContent {
  content: string;
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

export interface ReportList {
  username: string;
}
