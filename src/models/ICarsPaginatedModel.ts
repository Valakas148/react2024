import {ICarsWithAuthModel} from "./ICarsWithAuthModel";
import {IPaginationModel} from "./IPaginationModel";

export interface ICarsPaginatedModel{
    total_items: number,
    total_pages: number,
    prev: IPaginationModel | null,
    next: IPaginationModel | null,
    items: ICarsWithAuthModel[]
}