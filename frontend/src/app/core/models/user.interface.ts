export interface User {
  username: string;
  email: string;
  password: string;
  adminCode: number;
}
export interface ICurrentUser {
  username: string;
  password: string;
}
export interface ICurrentAdmin {
  username: string;
  password: string;
  admincode: number;
}

