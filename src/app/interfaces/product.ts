import { Guid } from "guid-typescript";
export interface Product {
  Id: Guid;
  Name: string;
  Description?: string;
  Price: number;
  ImageUrl: string;
  CategoryId?: Guid;
  IsFavorite?: boolean;
}
