import { Guid } from "guid-typescript";

export class ListOptions {
  PagingEnabled :boolean =true;
  SearchText :string="";
  PageNumber?: number;
  ItemsPerPage?: number;
  CategoryId?: Guid;
  MinPrice?: number;
  MaxPrice?: number;
}
