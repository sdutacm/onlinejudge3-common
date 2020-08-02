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

export interface IGetUserGroupsReq {
  userId: number;
}

export interface IGetUserGroupsResp {
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

export interface ICreateGroupReq {
  name: string;
  intro: string;
  verified?: boolean;
  private: boolean;
  joinChannel: 0 | 1 | 2;
}

export interface ICreateGroupResp {
  groupId: number;
}

export interface ICreateEmptyGroupReq {
  name: string;
  intro: string;
  verified?: boolean;
  private: boolean;
}

export interface ICreateEmptyGroupResp {
  groupId: number;
}

export interface IUpdateGroupReq {
  groupId: number;
  name: string;
  intro: string;
  verified?: boolean;
  private: boolean;
  joinChannel: 0 | 1 | 2;
}

export interface IDeleteGroupReq {
  groupId: number;
}
