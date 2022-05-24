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
  startAt: string;
  endAt: string;
  registerStartAt: string | null;
  registerEndAt: string | null;
  ended: boolean;
  isTeam: boolean;
  hidden: boolean;
  createdBy: number;
}

export interface ICreateCompetitionReq {
  title: string;
  introduction: string;
  startAt: string;
  endAt: string;
  registerStartAt: string | null;
  registerEndAt: string | null;
  isTeam: boolean;
  hidden: boolean;
}

export interface ICreateCompetitionResp {
  competitionId: number;
}

export interface IUpdateCompetitionDetailReq {
  competitionId: number;
  title?: string;
  introduction?: string;
  startAt?: string;
  endAt?: string;
  registerStartAt?: string | null;
  registerEndAt?: string | null;
  isTeam?: boolean;
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
    sampleInput: string;
    sampleOutput: string;
    hint: string;
    source: string;
    author: number | null;
    timeLimit: number;
    memoryLimit: number;
    difficulty: number;
    accepted: number;
    submitted: number;
    spj: boolean;
    display: boolean;
    createdAt: string;
    updatedAt: string | null;
    balloonAlias?: string;
    balloonColor?: string;
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
  }[];
}

export interface ISetCompetitionProblemConfigReq {
  competitionId: number;
  problems: {
    problemId: number;
    balloonAlias: string;
    balloonColor: string;
  }[];
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
  };
}

export interface IGetCompetitionSettingsReq {
  competitionId: number;
}

export interface IGetCompetitionSettingsResp {
  frozenLength: number;
  allowedAuthMethods: string[];
  allowedSolutionLanguages: string[];
}
