import {ICarsWithAuthModel} from "./ICarsWithAuthModel";

export interface ICarsPaginatedModel{
    total_items: number,
    total_pages: number,
    prev: string,
    next: string,
    items: ICarsWithAuthModel[]
}