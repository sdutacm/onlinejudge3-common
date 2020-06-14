/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetTagFullListReq {
  _scope?: 'available' | null;
}

export interface IGetTagFullListResp {
  count: number;
  rows: {
    tagId: number;
    nameEn: string;
    nameZhHans: string;
    nameZhHant: string;
    hidden: boolean;
    createdAt: string;
  }[];
}

export interface ICreateTagReq {
  nameEn: string;
  nameZhHans: string;
  nameZhHant: string;
  hidden?: boolean;
}

export interface ICreateTagResp {
  tagId: number;
}

export interface IUpdateTagDetailReq {
  tagId: number;
  nameEn: string;
  nameZhHans: string;
  nameZhHant: string;
  hidden?: boolean;
}
