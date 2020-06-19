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
