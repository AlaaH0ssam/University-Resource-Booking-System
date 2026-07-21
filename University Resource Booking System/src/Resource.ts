export enum ResourceType {LAB = "LAB",
     LECTURE_HALL="LECTURE_HALL", 
     PROJECTOR= "PROJECTOR"}

export interface Resource{
    id:number;
    name:string;
    type:ResourceType;
    isAvailable:boolean;
}