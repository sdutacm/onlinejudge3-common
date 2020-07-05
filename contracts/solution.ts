/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetSolutionListReq {
  page?: number;
  limit?: number;
  order?: ['solutionId' | 'time' | 'memory', 'ASC' | 'DESC'][];
  solutionId?: number;
  solutionIds?: number[];
  problemId?: number;
  userId?: number;
  contestId?: number;
  result?: number;
  language?: string;
}

export interface IGetSolutionListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    solutionId: number;
    problem: {
      problemId: number;
      title: string;
      timeLimit: number;
    };
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
      rating: number;
    };
    contest?: {
      contestId: number;
      title: string;
      type: number;
    };
    result: number;
    time?: number;
    memory?: number;
    language: string;
    codeLength?: number;
    shared: boolean;
    isContestUser: boolean;
    createdAt: string;
  }[];
}

export interface IGetSolutionDetailReq {
  solutionId: number;
}

export interface IGetSolutionDetailResp {
  solutionId: number;
  problem: {
    problemId: number;
    title: string;
    timeLimit: number;
  };
  user: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
    rating: number;
  };
  contest?: {
    contestId: number;
    title: string;
    type: number;
  };
  result: number;
  time: number;
  memory: number;
  language: string;
  codeLength: number;
  compileInfo: string;
  code: string;
  shared: boolean;
  isContestUser: boolean;
  createdAt: string;
}

export interface IUpdateSolutionShareReq {
  solutionId: number;
  shared: boolean;
}

export interface IGetUserProblemResultStatsReq {
  userId: number;
  contestId?: number;
}

export interface IGetUserProblemResultStatsResp {
  acceptedProblemIds: number[];
  attemptedProblemIds: number[];
}