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

export interface IGetContestSessionReq {
  contestId: number;
}

export type IGetContestSessionResp = {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  avatar: string | null;
} | null;

export interface IRequestContestSessionReq {
  contestId: number;
  username?: string;
  password?: string;
}

export interface IRequestContestSessionResp {
  userId: number;
  username: string;
  nickname: string;
  permission: number;
  avatar: string | null;
}

export interface ILogoutContestReq {
  contestId: number;
}

export interface IGetContestDetailReq {
  contestId: number;
  _scope?: 'available' | null;
}

export interface IGetContestDetailResp {
  contestId: number;
  title: string;
  type: number;
  category: number;
  mode: number;
  intro: string;
  description?: string;
  password?: string;
  startAt: string;
  endAt: string;
  frozenLength: number;
  registerStartAt: string | null;
  registerEndAt: string | null;
  team: boolean;
  ended: boolean;
  hidden: boolean;
}

export interface ICreateContestReq {
  title: string;
  type: number;
  category: number;
  mode: number;
  intro?: string;
  description: string;
  password?: string;
  startAt: string;
  endAt: string;
  frozenLength: number;
  registerStartAt: string | null;
  registerEndAt: string | null;
  team: boolean;
  hidden?: boolean;
}

export interface ICreateContestResp {
  contestId: number;
}

export interface IUpdateContestDetailReq {
  contestId: number;
  title?: string;
  type?: number;
  category?: number;
  mode?: number;
  intro?: string;
  description?: string;
  password?: string;
  startAt?: string;
  endAt?: string;
  frozenLength?: number;
  registerStartAt?: string | null;
  registerEndAt?: string | null;
  team?: boolean;
  hidden?: boolean;
}

export interface IGetContestProblemsReq {
  contestId: number;
}

export interface IGetContestProblemsResp {
  count: number;
  rows: {
    problemId: number;
    title: string;
    description: string;
    input: string;
    output: string;
    samples: {
      in: string;
      out: string;
    }[];
    hint: string;
    source: string;
    authors: string[];
    timeLimit: number;
    memoryLimit: number;
    difficulty: number;
    accepted: number;
    submitted: number;
    spj: boolean;
    display: boolean;
    spConfig: {
      [k: string]: unknown;
    };
    revision?: number;
    createdAt: string;
    updatedAt: string | null;
  }[];
}

export interface IGetContestProblemConfigReq {
  contestId: number;
}

export interface IGetContestProblemConfigResp {
  count: number;
  rows: {
    problemId: number;
    title: string;
    originalTitle?: string;
  }[];
}

export interface ISetContestProblemConfigReq {
  contestId: number;
  problems: {
    problemId: number;
    title: string;
  }[];
}

export interface IGetContestUserListReq {
  page?: number;
  limit?: number;
  order?: ['contestUserId', 'ASC' | 'DESC'][];
  contestId: number;
  contestUserId?: number;
  username?: string;
  nickname?: string;
}

export interface IGetContestUserListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    contestUserId: number;
    contestId: number;
    username: string;
    nickname: string;
    subname: string;
    avatar: string;
    status: number;
    unofficial: boolean;
    members: {
      name: string;
      school: string;
      college?: string;
      major?: string;
      class: string;
    }[];
    createdAt: string | null;
  }[];
}

export interface IGetContestUsersReq {
  contestId: number;
  status?: 0 | 1 | 2 | 3;
}

export interface IGetContestUsersResp {
  count: number;
  rows: {
    contestUserId: number;
    contestId: number;
    username: string;
    nickname: string;
    subname: string;
    avatar: string;
    status: number;
    unofficial: boolean;
    password: string;
    sitNo: string;
    members: {
      schoolNo?: string;
      name: string;
      school: string;
      college?: string;
      major?: string;
      class?: string;
      tel: string;
      email: string;
      clothing?: string;
    }[];
    createdAt: string | null;
    globalUserId?: number;
    rating?: number;
  }[];
}

export interface IGetContestUserDetailReq {
  contestUserId: number;
}

export interface IGetContestUserDetailResp {
  contestUserId: number;
  contestId: number;
  username: string;
  nickname: string;
  subname: string;
  avatar: string;
  status: number;
  unofficial: boolean;
  password: string;
  sitNo: string;
  members: {
    schoolNo?: string;
    name: string;
    school: string;
    college?: string;
    major?: string;
    class?: string;
    tel: string;
    email: string;
    clothing?: string;
  }[];
  createdAt: string | null;
  globalUserId?: number;
  rating?: number;
}

export interface ICreateContestUserReq {
  contestId: number;
  username?: string;
  nickname: string;
  subname?: string;
  status?: number;
  unofficial: boolean;
  password: string;
  members:
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ]
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ]
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ];
}

export interface IBatchCreateContestUsersReq {
  contestId: number;
  users: {
    username: string;
    nickname: string;
    subname?: string;
    status?: number;
    sitNo?: string;
    unofficial: boolean;
    password?: string;
    members:
      | [
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
        ]
      | [
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
        ]
      | [
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
          {
            schoolNo?: string;
            name: string;
            school: string;
            college?: string;
            major?: string;
            class?: string;
            tel: string;
            email: string;
            clothing?: string;
          },
        ];
  }[];
  conflict: 'insert' | 'upsert';
}

export interface ICreateContestUserResp {
  contestUserId: number;
}

export interface IUpdateContestUserReq {
  contestId: number;
  contestUserId: number;
  nickname: string;
  subname?: string;
  status?: number;
  unofficial: boolean;
  password: string;
  members:
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ]
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ]
    | [
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
        {
          schoolNo?: string;
          name: string;
          school: string;
          college?: string;
          major?: string;
          class?: string;
          tel: string;
          email: string;
          clothing?: string;
        },
      ];
}

export interface IAuditContestUserReq {
  contestId: number;
  contestUserId: number;
  status: number;
  reason?: string;
}

export interface IGetContestProblemSolutionStatsReq {
  contestId: number;
}

export interface IGetContestProblemSolutionStatsResp {
  [k: string]: {
    accepted: number;
    submitted: number;
  };
}

export interface IGetContestRanklistReq {
  contestId: number;
  god?: boolean;
}

export interface IGetContestRanklistResp {
  count: number;
  rows: {
    rank: number;
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
      rating: number;
      globalUserId?: number;
      oldRating?: number;
      newRating?: number;
    };
    score: number;
    time: number;
    stats: {
      result: ('FB' | 'AC' | 'RJ' | '?') | null;
      tries: number;
      time: number;
    }[];
  }[];
}

export interface IGetContestRatingStatusReq {
  contestId: number;
}

export type IGetContestRatingStatusResp = {
  status: number;
  progress?: number;
  used?: number;
  totalUsed?: number;
} | null;

export interface IEndContestReq {
  contestId: number;
}
