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
  type: number;
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
  type: number;
}

export interface IRegisterReq {
  username: string;
  nickname: string;
  email: string;
  code: number;
  password: string;
  type: 1 | 2;
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
  type: 1 | 2;
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
    type: 1 | 2;
    status?: 0 | 1;
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
  type?: number;
  status?: number;
  _scope?: 'available' | null;
}

export interface IGetUserListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    userId: number;
    username?: string;
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
    type: number;
    status?: number;
    lastIp?: string;
    lastTime?: string | null;
    createdAt?: string;
    [k: string]: unknown;
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
  defaultLanguage?: string | null;
  settings?: {} | null;
  coin?: number;
  verified?: boolean;
  type: number;
  status?: number;
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

export interface IGetSelfAchievedAchievementsResp {
  count: number;
  rows: {
    achievementKey: string;
    status: number;
    createdAt: string;
  }[];
}

export interface IConfirmAchievementDeliveriedReq {
  achievementKey: string;
}

export interface IReceiveAchievementReq {
  achievementKey: string;
}

export interface IGetSelfOfficialMembersResp {
  count: number;
  rows: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
    accepted: number;
    submitted: number;
    rating: number;
    verified: boolean;
    status: number;
    createdAt: string;
    updatedAt: string;
    [k: string]: unknown;
  }[];
}

export interface IGetUserMembersReq {
  userId: number;
}

export interface IGetUserMembersResp {
  count: number;
  rows: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
    accepted: number;
    submitted: number;
    rating: number;
    verified: boolean;
    status: number;
    createdAt: string;
    updatedAt: string;
    [k: string]: unknown;
  }[];
}

export interface IAddUserMemberReq {
  memberUserId: number;
}

export interface IRemoveUserMemberReq {
  memberUserId: number;
}

export interface IGetSelfJoinedTeamsResp {
  count: number;
  rows: {
    teamUserId: number;
    selfMemberStatus: number;
    selfJoinedAt: string;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
    status: number;
    members: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
      accepted: number;
      submitted: number;
      rating: number;
      verified: boolean;
      status: number;
      createdAt: string;
      updatedAt: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }[];
}

export interface IConfirmJoinTeamReq {
  teamUserId: number;
}

export interface IGetSelfStaticObjectReq {
  key: string;
}

export interface IGetSelfStaticObjectResp {
  key: string;
  category: string;
  userId: number;
  mime: string;
  content: unknown;
  createdAt: string;
  updatedAt: string;
}
