export interface User {
  username: string;
  email: string;
  password: string;
  adminCode?: number;
}

export interface ICurrentUser {
  username: string;
  password: string;
}

