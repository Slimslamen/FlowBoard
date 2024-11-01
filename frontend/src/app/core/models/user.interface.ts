export interface User {
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

export interface CurrentUser {
  id: string;
  name: string;
  roles?: string[];

}

