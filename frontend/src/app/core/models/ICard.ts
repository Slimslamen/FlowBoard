import { ITasks } from "./ITasks";

export interface ICard {
    id:string;
    state: string;
    task: ITasks[] ;
  }
  