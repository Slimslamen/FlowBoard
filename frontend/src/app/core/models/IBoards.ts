//Våra models i frontend följer samma struktur som våra models i backend.
//Detta för att enkelt kunna fetcha emellan
export interface IBoards
{
    id:number;
    name: string[];
    imageSrc: string;
}