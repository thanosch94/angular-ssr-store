import { Guid } from "guid-typescript";

export interface Category {
  Id: Guid;
  Name: string;
  Icon?: string;
  ParentCategoryId?: Guid;
  Subcategories?: Category[];
  Expanded?: boolean;
}
