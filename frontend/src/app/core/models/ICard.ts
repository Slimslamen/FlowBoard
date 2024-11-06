import { ITasks } from "./TasksModel";

export interface ICard {
    id:string;
    state: string;
    task: ITasks[] ;
  }
  