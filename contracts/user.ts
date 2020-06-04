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
  avatar: string | null;
} | null;

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
  grade?: string;
}

export interface IGetUserListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    userId: number;
    username: string;
    nickname: string;
    submitted: number;
    accepted: number;
    avatar: string | null;
    bannerImage: string;
    rating: number;
  }[];
}

export interface IGetUserDetailReq {
  userId: number;
}

export interface IGetUserDetailResp {
  userId: number;
  username: string;
  nickname: string;
  email: string;
  submitted: number;
  accepted: number;
  permission: number;
  avatar: string | null;
  bannerImage: string;
  school: string;
  college: string;
  major: string;
  class: string;
  rating: number;
  ratingHistory:
    | {
        contest: {
          contestId: number;
          title: string;
        };
        rank: number;
        rating: number;
        ratingChange: number;
        date: string;
      }[]
    | null;
  createdAt: string;
}

export interface ILoginReq {
  loginName: string;
  password: string;
}

export interface IRegisterReq {
  username: string;
  nickname: string;
  email: string;
  code: number;
  password: string;
}

export interface IUploadUserAvatarReq {
  userId: number;
  [k: string]: unknown;
}

export interface IUploadUserBannerImageReq {
  userId: number;
  [k: string]: unknown;
}
