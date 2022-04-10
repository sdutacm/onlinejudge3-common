/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetSolutionListReq {
  lt?: number | null;
  gt?: number;
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
  lt?: number | null;
  gt?: number;
  limit: number;
  rows: {
    solutionId: number;
    problem: {
      problemId: number;
      title: string;
      timeLimit: number;
      memoryLimit: number;
      spj: boolean;
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
      startAt: string;
      endAt: string;
    };
    result: number;
    time?: number;
    memory?: number;
    language: string;
    codeLength?: number;
    shared: boolean;
    isContestUser: boolean;
    judgeInfo?: {
      lastCase: number;
      totalCase: number;
      detail: {
        cases: {
          result: number;
          time: number;
          memory: number;
          errMsg?: string;
          outMsg?: string;
        }[];
      };
      finishedAt: string;
    };
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
    memoryLimit: number;
    spj: boolean;
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
    startAt: string;
    endAt: string;
  };
  result: number;
  time?: number;
  memory?: number;
  language: string;
  codeLength?: number;
  compileInfo?: string;
  code?: string;
  shared: boolean;
  isContestUser: boolean;
  judgeInfo?: {
    lastCase: number;
    totalCase: number;
    detail: {
      cases: {
        result: number;
        time: number;
        memory: number;
        errMsg?: string;
        outMsg?: string;
      }[];
    };
    finishedAt: string;
  };
  createdAt: string;
}

export interface IBatchGetSolutionDetailReq {
  solutionIds: number[];
}

export interface IBatchGetSolutionDetailResp {
  [k: string]: {
    solutionId: number;
    problem: {
      problemId: number;
      title: string;
      timeLimit: number;
      memoryLimit: number;
      spj: boolean;
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
      startAt: string;
      endAt: string;
    };
    result: number;
    time?: number;
    memory?: number;
    language: string;
    codeLength?: number;
    compileInfo?: string;
    code?: string;
    shared: boolean;
    isContestUser: boolean;
    judgeInfo?: {
      lastCase: number;
      totalCase: number;
      detail: {
        cases: {
          result: number;
          time: number;
          memory: number;
          errMsg?: string;
          outMsg?: string;
        }[];
      };
      finishedAt: string;
    };
    createdAt: string;
  };
}

export interface IUpdateSolutionShareReq {
  solutionId: number;
  shared: boolean;
}

export interface ISubmitSolutionReq {
  problemId: number;
  contestId?: number;
  language: string;
  codeFormat?: 'raw' | 'base64';
  code: string;
}

export interface ISubmitSolutionResp {
  solutionId: number;
}

export interface IRejudgeSolutionReq {
  solutionId?: number;
  problemId?: number;
  userId?: number;
  contestId?: number;
  result?: number;
}
