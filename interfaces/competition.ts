import { IUserCommonRelative } from './user';
import { ECompetitionUserRole, ECompetitionUserStatus } from '../enums';

export interface ICompetition {
  competitionId: number;
  title: string;
  introduction: string;
  announcement?: string;
  startAt: Date;
  endAt: Date;
  ended: boolean;
  rule: 'ICPC' | 'ICPCWithScore';
  isTeam: boolean;
  isRating: boolean;
  registerStartAt: Date | null;
  registerEndAt: Date | null;
  createdByUser: IUserCommonRelative;
  hidden: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompetitionProblemMeta {
  balloonAlias: string;
  balloonColor: string;
  score: number | null;
  varScoreExpression: string;
}

export interface ICompetitionUser {
  competitionId: number;
  userId: number;
  role: ECompetitionUserRole;
  status: ECompetitionUserStatus;
  info: ICompetitionUserInfo;
  password: string | null;
  fieldShortName: string | null;
  seatNo: number | null;
  banned: boolean;
  unofficialParticipation: boolean;
  createdAt: Date | null;
}

export interface ICompetitionUserInfo {
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
}

export interface ICompetitionSelfParticipant {
  competitionId: number;
  userId: number;
  status: number;
  unofficialParticipation: boolean;
  createdAt: string;
  info: ICompetitionUserInfo;
}

export interface ICompetitionSelfParticipantForm {
  competitionId: number;
  unofficialParticipation: boolean;
  info: ICompetitionUserInfo;
}

export interface ICompetitionSettings {
  frozenLength: number;
  allowedJoinMethods: Array<'register' | 'public' | 'password'>;
  allowedAuthMethods: Array<'session' | 'password' | 'ip' | 'assistant'>;
  allowedSolutionLanguages: string[];
  allowAnyObservation: boolean;
  useOnetimePassword: boolean;
  joinPassword?: string;
  externalRanklistUrl: string;
}

export interface ICompetitionNotification {
  competitionNotificationId: number;
  competitionId: number;
  userId: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICompetitionQuestion {
  competitionQuestionId: number;
  competitionId: number;
  status: number;
  userId: string[];
  content: string;
  reply: string;
  repliedUserId: number | null;
  repliedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ICompetitionProblemVarScoreExpressionContext {
  score: number;
  problemIndex: number;
  elapsedTime: {
    h: number;
    min: number;
    s: number;
  };
  tries: number;
}
