/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetGroupListReq {
  page?: number;
  limit?: number;
  order?: ['groupId', 'ASC' | 'DESC'][];
  groupId?: number;
  name?: string;
  verified?: boolean;
  private?: boolean;
  _scope?: 'available' | null;
}

export interface IGetGroupListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    groupId: number;
    name: string;
    avatar: string;
    intro: string;
    verified: boolean;
    private: boolean;
    joinChannel: number;
    membersCount: number;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
  }[];
}

export interface IGetGroupDetailReq {
  groupId: number;
  _scope?: 'available' | null;
}

export interface IGetGroupDetailResp {
  groupId: number;
  name: string;
  avatar: string;
  intro: string;
  verified: boolean;
  private: boolean;
  joinChannel: number;
  membersCount: number;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}
