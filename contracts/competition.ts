/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetCompetitionListReq {
  page?: number;
  limit?: number;
  order?: ['competitionId', 'ASC' | 'DESC'][];
  competitionId?: number;
  title?: string;
  ended?: boolean;
  isTeam?: boolean;
  hidden?: boolean;
  createdBy?: number;
  _scope?: 'available' | null;
}

export interface IGetCompetitionListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    competitionId: number;
    title: string;
    startAt: string;
    endAt: string;
    registerStartAt: string | null;
    registerEndAt: string | null;
    ended: boolean;
    isTeam: boolean;
    hidden: boolean;
    createdBy: number;
  }[];
}

export interface IGetCompetitionSessionReq {
  competitionId: number;
}

export type IGetCompetitionSessionResp = {
  userId: number;
  nickname: string;
  role: number;
} | null;

export interface ILoginCompetitionReq {
  competitionId: number;
  userId: number;
  password: string;
}

export interface ILoginCompetitionResp {
  userId: number;
  nickname: string;
  role: number;
}

export interface ILogoutCompetitionReq {
  competitionId: number;
}

export interface IGetCompetitionDetailReq {
  competitionId: number;
  _scope?: 'available' | null;
}

export interface IGetCompetitionDetailResp {
  competitionId: number;
  title: string;
  introduction: string;
  startAt: string;
  endAt: string;
  registerStartAt: string | null;
  registerEndAt: string | null;
  ended: boolean;
  isTeam: boolean;
  hidden: boolean;
  createdBy: number;
}
