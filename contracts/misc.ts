/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IUploadMediaReq {
  [k: string]: unknown;
}

export interface IUploadMediaResp {
  url: string;
}

export interface IUploadAssetReq {
  prefix?: string;
  [k: string]: unknown;
}

export interface IUploadAssetResp {
  url: string;
}

export interface IGetStaticObjectReq {
  key: string;
}

export interface IGetStaticObjectResp {
  key: string;
  category: string;
  mime: string;
  content: unknown;
  createdAt: string;
  updatedAt: string;
}
