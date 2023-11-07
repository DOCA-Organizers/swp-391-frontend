export interface LoginResponse {
    user: User;
    role: Role;
}

export interface Role {
    id:   number;
    name: string;
    type: string;
}

export interface User { 
    id:        string;
    userName:  string;
    password:  string;
    fullName:  string;
    email:     string;
    dob:       null;
    gender:    boolean;
    avt:       null;
    bookmarks: any[];
    ban:       boolean;
    isActive:  boolean;
}
