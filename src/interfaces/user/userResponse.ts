export interface UserResponse {
    user:  User;
    role:  Role;
    token: string;
}

export interface Role {
    id:   number;
    name: string;
    type: string;
}

export interface User {
    id:                    string;
    password:              string;
    fullName:              string;
    email:                 string;
    dob:                   null;
    gender:                boolean;
    avt:                   null;
    enabled:               boolean;
    username:              string;
    authorities:           Authority[];
    isActive:              boolean;
    ban:                   boolean;
    credentialsNonExpired: boolean;
    accountNonExpired:     boolean;
    accountNonLocked:      boolean;
}

export interface Authority {
    authority: string;
}
