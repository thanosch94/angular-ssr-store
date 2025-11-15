import { Guid } from "guid-typescript";

export interface Category {
  Id: number;
  Name: string;
  Icon?: string;
  ParentCategoryId?: Guid;
  Subcategories?: Category[];
  Expanded?: boolean;
}
