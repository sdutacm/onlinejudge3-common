/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export type IGetSessionResp = {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  permissions: string[];
  avatar: string | null;
} | null;

export interface ILoginReq {
  loginName: string;
  password: string;
}

export interface ILoginResp {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  permissions: string[];
  avatar: string | null;
}

export interface IRegisterReq {
  username: string;
  nickname: string;
  email: string;
  code: number;
  password: string;
}

export interface IRegisterResp {
  userId: number;
}

export interface ICreateUserReq {
  username: string;
  nickname: string;
  email?: string;
  password: string;
  school?: string;
  college?: string;
  major?: string;
  class?: string;
  grade?: string;
}

export interface ICreateUserResp {
  userId: number;
}

export interface IBatchCreateUsersReq {
  users: {
    username: string;
    nickname: string;
    password: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    grade?: string;
  }[];
  conflict: 'insert' | 'upsert';
}

export interface IGetUserListReq {
  page?: number;
  limit?: number;
  order?: ['userId' | 'accepted' | 'rating', 'ASC' | 'DESC'][];
  userId?: number;
  username?: string;
  nickname?: string;
  school?: string;
  college?: string;
  major?: string;
  class?: string;
  grade?: string | null;
  forbidden?: number;
  permission?: number;
  verified?: boolean;
  _scope?: 'available' | null;
}

export interface IGetUserListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    userId: number;
    nickname: string;
    submitted: number;
    accepted: number;
    avatar: string | null;
    bannerImage: string;
    rating: number;
    grade: string | null;
    forbidden: number;
    permission?: number;
    verified?: boolean;
    lastIp?: string;
    lastTime?: string | null;
    createdAt?: string;
  }[];
}

export interface IGetUserDetailReq {
  userId: number;
  _scope?: 'available' | null;
}

export interface IGetUserDetailResp {
  userId: number;
  nickname: string;
  username?: string;
  email?: string;
  submitted: number;
  accepted: number;
  permission: number;
  avatar: string | null;
  bannerImage: string;
  school: string;
  college: string;
  major: string;
  class: string;
  grade: string | null;
  forbidden: number;
  rating: number;
  ratingHistory:
    | {
        contest?: {
          contestId: number;
          title: string;
        };
        competition?: {
          competitionId: number;
          title: string;
        };
        rank: number;
        rating: number;
        ratingChange: number;
        date: string;
      }[]
    | null;
  site: string;
  defaultLanguage?: string;
  settings?: {} | null;
  coin?: number;
  verified?: boolean;
  lastIp?: string;
  lastTime?: string | null;
  createdAt?: string;
}

export interface IUpdateUserDetailReq {
  userId: number;
  nickname?: string;
  school?: string;
  college?: string;
  major?: string;
  class?: string;
  site?: string;
  defaultLanguage?: string;
  forbidden?: 0 | 1 | 2;
  permission?: 0 | 1 | 2 | 3;
}

export interface IUpdateUserPasswordReq {
  userId: number;
  oldPassword: string;
  password: string;
}

export interface IResetUserPasswordReq {
  email: string;
  code: number;
  password: string;
}

export interface IResetUserPasswordAndEmailReq {
  username: string;
  oldPassword: string;
  email: string;
  code: number;
  password: string;
}

export interface IResetUserPasswordByAdminReq {
  userId: number;
  password: string;
}

export interface IUpdateUserEmailReq {
  userId: number;
  email: string;
  code: number;
}

export interface IUploadUserAvatarReq {
  [k: string]: unknown;
}

export interface IUploadUserBannerImageReq {
  [k: string]: unknown;
}

export interface IGetUserProblemResultStatsReq {
  userId: number;
  contestId?: number;
  competitionId?: number;
}

export interface IGetUserProblemResultStatsResp {
  acceptedProblemIds: number[];
  attemptedProblemIds: number[];
}

export interface IGetUserSolutionCalendarReq {
  userId: number;
  result: number;
}

export type IGetUserSolutionCalendarResp = {
  date: string;
  count: number;
}[];

export interface IGetSessionListResp {
  count: number;
  rows: {
    sessionId: string;
    isCurrent: boolean;
    loginUa: string;
    loginIp: string;
    loginAt: string;
    lastAccessIp: string;
    lastAccessAt: string;
  }[];
}

export interface IClearSessionReq {
  sessionId: string;
}

export interface IGetActiveUserCountResp {
  count: number;
}

export interface IGetAllUserPermissionsMapResp {
  count: number;
  rows: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    permissions: string[];
  }[];
}

export interface ISetUserPermissionsReq {
  userId: number;
  permissions: string[];
}
