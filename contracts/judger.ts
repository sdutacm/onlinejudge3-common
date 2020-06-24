/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetJudgerDataFileReq {
  path: string;
}

export type IGetJudgerDataFileResp = {
  type: 'file' | 'directory';
  filename: string;
  path: string;
  size: number;
  createTime: string;
  modifyTime: string;
  isBinary?: boolean;
  content?:
    | string
    | {
        type: 'Buffer';
        data: number[];
      };
  files?: {
    type: 'file' | 'directory' | 'N/A';
    filename: string;
    path: string;
    size: number;
    createTime: string;
    modifyTime: string;
  }[];
} | null;

export interface IGetJudgerDataArchiveReq {
  problemId: number;
}

export interface IUploadJudgerDataReq {
  problemId: number | string;
  name: string;
  email: string;
  commitMessage: string;
  [k: string]: unknown;
}
