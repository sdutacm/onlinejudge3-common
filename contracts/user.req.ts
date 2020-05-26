/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

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

export interface IGetUserDetailReq {
  userId: number;
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
