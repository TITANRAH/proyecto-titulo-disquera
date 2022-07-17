import { Disco } from "./disco.interface";

export interface Pagination{
    pageSize: number;
    page: number;
    sort: string;
    sortDirection: string;
    pageQuantity: number;
    data: Disco[];
    filterValue: {};
    totalRows: number;
}