/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetContestListReq {
  page?: number;
  limit?: number;
  order?: ['contestId', 'ASC' | 'DESC'][];
  contestId?: number;
  contestIds?: number[];
  title?: string;
  type?: number;
  category?: number;
  mode?: number;
  hidden?: boolean;
  joined?: boolean;
  _scope?: 'available' | null;
}

export interface IGetContestListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    contestId: number;
    title: string;
    type: number;
    category: number;
    mode: number;
    startAt: string;
    endAt: string;
    registerStartAt: string | null;
    registerEndAt: string | null;
    team: boolean;
    hidden: boolean;
  }[];
}

export interface IGetContestSessionReq {
  contestId: number;
}

export type IGetContestSessionResp = {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  avatar: string | null;
} | null;

export interface IRequestContestSessionReq {
  contestId: number;
  username?: string;
  password?: string;
}

export interface IRequestContestSessionResp {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  avatar: string | null;
}

export interface ILogoutContestReq {
  contestId: number;
}

export interface IGetContestDetailReq {
  contestId: number;
  _scope?: 'available' | null;
}

export interface IGetContestDetailResp {
  contestId: number;
  title: string;
  type: number;
  category: number;
  mode: number;
  intro: string;
  description?: string;
  password?: string;
  startAt: string;
  endAt: string;
  frozenLength: number;
  registerStartAt: string | null;
  registerEndAt: string | null;
  team: boolean;
  ended: boolean;
  hidden: boolean;
}
