export interface UserResponse {
    user:  User;
    role:  Role;
    token: Token;
}

export interface Role {
    id:   number;
    name: Name;
    type: Type;
}

export enum Name {
    Ad = "AD",
    Staff = "Staff",
    User = "User",
}

export enum Type {
    All = "All",
}

export enum Token {
    Null = "",
}

export interface User {
    id:                    string;
    password:              string;
    fullName:              string;
    email:                 string;
    dob:                   Date | null;
    gender:                boolean;
    avt:                   null;
    enabled:               boolean;
    isActive:              boolean;
    ban:                   boolean;
    accountNonLocked:      boolean;
    credentialsNonExpired: boolean;
    accountNonExpired:     boolean;
    username:              string;
    authorities:           AuthorityElement[];
}

export interface AuthorityElement {
    authority: AuthorityEnum;
}

export enum AuthorityEnum {
    RoleAd = "ROLE_AD",
    RoleStaff = "ROLE_STAFF",
    RoleUser = "ROLE_USER",
}
