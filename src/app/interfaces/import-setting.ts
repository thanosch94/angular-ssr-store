import { Guid } from "guid-typescript";
import { ImportTypeEnum } from "../enum/import-type.enum";

export interface ImportSetting {
  Id?:Guid;
  Name:string;
  Title:string;
  Folder:string;
  GetUrl?:string;
  DbMatchProperty?:string;
  FileMatchProperty?:string;
  UpdateExistingEntities:boolean;
  ImportType:ImportTypeEnum;
}
