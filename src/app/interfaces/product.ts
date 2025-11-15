import { Guid } from "guid-typescript";
export interface Product {
  Id: Guid;
  Name: string;
  Description?: string;
  Price: number;
  DiscountPrice?: number;
  FeatureImageUrl: string;
  Images: string[];
  CategoryId?: Guid;
  IsFavorite?: boolean;
  AffiliateUrl?: string;
}
