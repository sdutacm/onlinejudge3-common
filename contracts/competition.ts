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

export interface IGetCompetitionUsersReq {
  competitionId: number;
  role?: number;
  status?: number;
  banned?: boolean;
  fieldShortName?: string;
  seatNo?: number;
}

export interface IGetCompetitionUsersResp {
  count: number;
  rows: {
    competitionId: number;
    userId: number;
    role: number;
    status: number;
    fieldShortName: string | null;
    seatNo: number | null;
    banned: boolean;
    unofficialParticipation: boolean;
    createdAt: string;
    info: {
      nickname: string;
      subname?: string;
      realName?: string;
      organization?: string;
      company?: string;
      schoolNo?: string;
      school?: string;
      college?: string;
      major?: string;
      class?: string;
      tel?: string;
      qq?: string;
      weChat?: string;
      clothing?: string;
      birthDate?: string;
      slogan?: string;
    };
  }[];
}

export interface IGetCompetitionUserDetailReq {
  competitionId: number;
  userId: number;
}

export interface IGetCompetitionUserDetailResp {
  competitionId: number;
  userId: number;
  role: number;
  status: number;
  fieldShortName: string | null;
  seatNo: number | null;
  banned: boolean;
  unofficialParticipation: boolean;
  createdAt: string;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    schoolNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    birthDate?: string;
    slogan?: string;
  };
}

export interface IGetPublicCompetitionParticipantsReq {
  competitionId: number;
}

export interface IGetPublicCompetitionParticipantsResp {
  count: number;
  rows: {
    competitionId: number;
    userId: number;
    role: number;
    status: number;
    fieldShortName: string | null;
    seatNo: number | null;
    banned: boolean;
    unofficialParticipation: boolean;
    createdAt: string;
    info: {
      nickname: string;
      subname?: string;
      realName?: string;
      organization?: string;
      company?: string;
      school?: string;
      college?: string;
      major?: string;
      class?: string;
      slogan?: string;
    };
  }[];
}

export interface IGetPublicCompetitionParticipantDetailReq {
  competitionId: number;
  userId: number;
}

export interface IGetPublicCompetitionParticipantDetailResp {
  competitionId: number;
  userId: number;
  role: number;
  status: number;
  fieldShortName: string | null;
  seatNo: number | null;
  banned: boolean;
  unofficialParticipation: boolean;
  createdAt: string;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    slogan?: string;
  };
}
