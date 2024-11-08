export interface ICreateUser {
  username: string;
  email: string;
  password: string;
  adminCode?: number;
}

export interface ICurrentUser {
  username: string;
  password: string;
  adminRole?: string[];
}

export interface IAccessUser {
  id: string;
  username: string;
  roles?: string[];
}

