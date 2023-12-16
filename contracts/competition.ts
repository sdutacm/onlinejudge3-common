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
  rule?: string;
  isTeam?: boolean;
  isRating?: boolean;
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
    rule: string;
    ended: boolean;
    isTeam: boolean;
    isRating: boolean;
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
  subname: string;
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
  subname: string;
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
  announcement?: string;
  startAt: string;
  endAt: string;
  registerStartAt: string | null;
  registerEndAt: string | null;
  ended: boolean;
  rule: string;
  isTeam: boolean;
  isRating: boolean;
  hidden: boolean;
  createdBy: number;
}

export interface ICreateCompetitionReq {
  title: string;
  introduction: string;
  announcement?: string;
  startAt: string;
  endAt: string;
  registerStartAt: string | null;
  registerEndAt: string | null;
  rule: string;
  isTeam: boolean;
  isRating: boolean;
  hidden: boolean;
}

export interface ICreateCompetitionResp {
  competitionId: number;
}

export interface IUpdateCompetitionDetailReq {
  competitionId: number;
  title?: string;
  introduction?: string;
  announcement?: string;
  startAt?: string;
  endAt?: string;
  registerStartAt?: string | null;
  registerEndAt?: string | null;
  rule?: string;
  isTeam?: boolean;
  isRating?: boolean;
  hidden?: boolean;
}

export interface IGetCompetitionProblemsReq {
  competitionId: number;
}

export interface IGetCompetitionProblemsResp {
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
    createdAt: string;
    updatedAt: string | null;
    balloonAlias?: string;
    balloonColor?: string;
    score?: number | null;
    varScoreExpression?: string;
  }[];
}

export interface IGetCompetitionProblemConfigReq {
  competitionId: number;
}

export interface IGetCompetitionProblemConfigResp {
  count: number;
  rows: {
    problemId: number;
    title: string;
    balloonAlias: string;
    balloonColor: string;
    score: number | null;
    varScoreExpression: string;
  }[];
}

export interface ISetCompetitionProblemConfigReq {
  competitionId: number;
  problems: {
    problemId: number;
    balloonAlias: string;
    balloonColor: string;
    score: number | null;
    varScoreExpression: string;
  }[];
}

export interface IBatchCreateCompetitionUsersReq {
  competitionId: number;
  users: {
    userId: number;
    role: number;
    status: number;
    password: string | null;
    fieldShortName: string | null;
    seatNo: number | null;
    banned: boolean;
    unofficialParticipation: boolean;
    info: {
      nickname: string;
      subname?: string;
      realName?: string;
      organization?: string;
      company?: string;
      studentNo?: string;
      school?: string;
      college?: string;
      major?: string;
      class?: string;
      tel?: string;
      qq?: string;
      weChat?: string;
      clothing?: string;
      slogan?: string;
      group?: string;
      [k: string]: unknown;
    };
  }[];
  conflict: 'insert' | 'upsert';
}

export interface ICreateCompetitionUserReq {
  competitionId: number;
  userId: number;
  role: number;
  status: number;
  password?: string | null;
  fieldShortName?: string | null;
  seatNo?: number | null;
  banned?: boolean;
  unofficialParticipation?: boolean;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
    group?: string;
    [k: string]: unknown;
  };
}

export interface IUpdateCompetitionUserReq {
  competitionId: number;
  userId: number;
  role?: number;
  status?: number;
  password?: string | null;
  fieldShortName?: string | null;
  seatNo?: number | null;
  banned?: boolean;
  unofficialParticipation?: boolean;
  info?: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
    group?: string;
    [k: string]: unknown;
  };
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
    password?: string | null;
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
      studentNo?: string;
      school?: string;
      college?: string;
      major?: string;
      class?: string;
      tel?: string;
      qq?: string;
      weChat?: string;
      clothing?: string;
      slogan?: string;
      group?: string;
      [k: string]: unknown;
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
  password?: string | null;
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
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
    group?: string;
    [k: string]: unknown;
  };
}

export interface IGetSelfCompetitionUserDetailReq {
  competitionId: number;
}

export interface IGetSelfCompetitionUserDetailResp {
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
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
    group?: string;
    [k: string]: unknown;
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
      group?: string;
      [k: string]: unknown;
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
    group?: string;
    [k: string]: unknown;
  };
}

export interface IRequestCompetitionParticipantPasswordReq {
  competitionId: number;
  userId: number;
}

export interface IRequestCompetitionParticipantPasswordResp {
  password: string;
}

export interface IRandomAllCompetitionUserPasswordsReq {
  competitionId: number;
}

export interface IGetSignedUpCompetitionParticipantReq {
  competitionId: number;
}

export type IGetSignedUpCompetitionParticipantResp = {
  competitionId: number;
  userId: number;
  status: number;
  unofficialParticipation: boolean;
  createdAt: string;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
    group?: string;
    [k: string]: unknown;
  };
} | null;

export interface ISignUpCompetitionParticipantReq {
  competitionId: number;
  unofficialParticipation: boolean;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
  };
}

export interface IModifySignedUpCompetitionParticipantReq {
  competitionId: number;
  unofficialParticipation: boolean;
  info: {
    nickname: string;
    subname?: string;
    realName?: string;
    organization?: string;
    company?: string;
    studentNo?: string;
    school?: string;
    college?: string;
    major?: string;
    class?: string;
    tel?: string;
    qq?: string;
    weChat?: string;
    clothing?: string;
    slogan?: string;
  };
}

export interface IAuditCompetitionParticipantReq {
  competitionId: number;
  userId: number;
  status: number;
  reason?: string;
}

export interface IConfirmEnterCompetitionReq {
  competitionId: number;
}

export interface IConfirmQuitCompetitionReq {
  competitionId: number;
}

export interface IGetCompetitionProblemSolutionStatsReq {
  competitionId: number;
}

export interface IGetCompetitionProblemSolutionStatsResp {
  [k: string]: {
    accepted: number;
    submitted: number;
    selfTries: number;
    selfAccepted: boolean;
    selfAcceptedTime: string | null;
  };
}

export interface IGetCompetitionSettingsReq {
  competitionId: number;
}

export interface IGetCompetitionSettingsResp {
  frozenLength: number;
  allowedJoinMethods: string[];
  allowedAuthMethods: string[];
  allowedSolutionLanguages: string[];
  allowAnyObservation: boolean;
  useOnetimePassword: boolean;
  joinPassword?: string;
  externalRanklistUrl: string;
}

export interface IUpdateCompetitionSettingsReq {
  competitionId: number;
  frozenLength?: number;
  allowedJoinMethods?: string[];
  allowedAuthMethods?: string[];
  allowedSolutionLanguages?: string[];
  allowAnyObservation?: boolean;
  useOnetimePassword?: boolean;
  joinPassword?: string;
  externalRanklistUrl?: string;
}

export interface IGetCompetitionNotificationsReq {
  competitionId: number;
}

export interface IGetCompetitionNotificationsResp {
  count: number;
  rows: {
    competitionNotificationId: number;
    competitionId: number;
    userId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface ICreateCompetitionNotificationReq {
  competitionId: number;
  content: string;
}

export interface IDeleteCompetitionNotificationReq {
  competitionNotificationId: number;
  competitionId: number;
}

export interface IGetCompetitionQuestionsReq {
  competitionId: number;
}

export interface IGetCompetitionQuestionsResp {
  count: number;
  rows: {
    competitionQuestionId: number;
    competitionId: number;
    status: number;
    userId: number;
    content: string;
    reply: string;
    repliedUserId: number | null;
    repliedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface IGetSelfCompetitionQuestionsReq {
  competitionId: number;
}

export interface IGetSelfCompetitionQuestionsResp {
  count: number;
  rows: {
    competitionQuestionId: number;
    competitionId: number;
    status: number;
    userId: number;
    content: string;
    reply: string;
    repliedUserId: number | null;
    repliedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface ICreateCompetitionQuestionReq {
  competitionId: number;
  content: string;
}

export interface IReplyCompetitionQuestionReq {
  competitionQuestionId: number;
  competitionId: number;
  reply: string;
}

export interface IEndCompetitionReq {
  competitionId: number;
}

export interface IGetCompetitionRanklistReq {
  competitionId: number;
  god?: boolean;
}

export interface IGetCompetitionRanklistResp {
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
      score?: number;
    }[];
  }[];
}

export interface IGetCompetitionRatingStatusReq {
  competitionId: number;
}

export type IGetCompetitionRatingStatusResp = {
  status: number;
  progress?: number;
  used?: number;
} | null;
