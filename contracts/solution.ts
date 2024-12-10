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
  competitionId?: number;
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
      title?: string;
      timeLimit: number;
      memoryLimit: number;
      spj: boolean;
      spConfig?: {
        [k: string]: unknown;
      };
      revision?: number;
    };
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
      rating: number;
      type?: number;
    };
    contest?: {
      contestId: number;
      title: string;
      type: number;
      startAt: string;
      endAt: string;
      ended: boolean;
      frozenLength: number;
    };
    competition?: {
      competitionId: number;
      title: string;
      rule: string;
      isTeam: boolean;
      isRating: boolean;
      ended: boolean;
      startAt: string;
      endAt: string;
      settings: {
        frozenLength: number;
        allowedJoinMethods: string[];
        allowedAuthMethods: string[];
        allowAnyObservation: boolean;
        useOnetimePassword: boolean;
        allowedSolutionLanguages: string[];
        externalRanklistUrl: string;
      };
    };
    result: number;
    time?: number;
    memory?: number;
    language: string;
    codeLength?: number;
    shared: boolean;
    isContestUser: boolean;
    judgeInfo?: {
      problemRevision?: number | null;
      result: number;
      time: number;
      memory: number;
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
      } | null;
      createdAt: string;
      finishedAt: string | null;
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
    title?: string;
    timeLimit: number;
    memoryLimit: number;
    spj: boolean;
    spConfig?: {
      [k: string]: unknown;
    };
    revision?: number;
  };
  user: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
    rating: number;
    type?: number;
  };
  contest?: {
    contestId: number;
    title: string;
    type: number;
    startAt: string;
    endAt: string;
    ended: boolean;
    frozenLength: number;
  };
  competition?: {
    competitionId: number;
    title: string;
    rule: string;
    isTeam: boolean;
    isRating: boolean;
    ended: boolean;
    startAt: string;
    endAt: string;
    settings: {
      frozenLength: number;
      allowedJoinMethods: string[];
      allowedAuthMethods: string[];
      allowedSolutionLanguages: string[];
      allowAnyObservation: boolean;
      useOnetimePassword: boolean;
      externalRanklistUrl: string;
    };
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
    problemRevision?: number | null;
    result: number;
    time: number;
    memory: number;
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
    } | null;
    createdAt: string;
    finishedAt: string | null;
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
      title?: string;
      timeLimit: number;
      memoryLimit: number;
      spj: boolean;
      spConfig?: {
        [k: string]: unknown;
      };
      revision?: number;
    };
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
      rating: number;
      type?: number;
    };
    contest?: {
      contestId: number;
      title: string;
      type: number;
      startAt: string;
      endAt: string;
      ended: boolean;
      frozenLength: number;
    };
    competition?: {
      competitionId: number;
      title: string;
      rule: string;
      isTeam: boolean;
      isRating: boolean;
      ended: boolean;
      startAt: string;
      endAt: string;
      settings: {
        frozenLength: number;
        allowedJoinMethods: string[];
        allowedAuthMethods: string[];
        allowedSolutionLanguages: string[];
        allowAnyObservation: boolean;
        useOnetimePassword: boolean;
        externalRanklistUrl: string;
      };
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
      problemRevision?: number | null;
      result: number;
      time: number;
      memory: number;
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
      } | null;
      createdAt: string;
      finishedAt: string | null;
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
  competitionId?: number;
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
  competitionId?: number;
  result?: number;
}

export interface IRejudgeSolutionResp {
  rejudgedCount: number;
}

export interface ICallbackJudgeReq {
  judgeInfoId: number;
  solutionId: number;
  judgerId: string;
  userId?: number;
  problemId?: number;
  contestId?: number;
  competitionId?: number;
  data?:
    | {
        type: 'start';
      }
    | {
        type: 'progress';
        current: number;
        total: number;
      }
    | {
        type: 'finish';
        resultType: 'CompileError' | 'SystemError' | 'Done';
        detail?: {
          [k: string]: unknown;
        };
      };
  eventTimestampUs?: number;
  batchData?: {
    data:
      | {
          type: 'start';
        }
      | {
          type: 'progress';
          current: number;
          total: number;
        }
      | {
          type: 'finish';
          resultType: 'CompileError' | 'SystemError' | 'Done';
          detail?: {
            [k: string]: unknown;
          };
        };
    eventTimestampUs: number;
  }[];
  [k: string]: unknown;
}
