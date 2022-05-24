import { IUserCommonRelative } from './user';
import { ECompetitionUserRole, ECompetitionUserStatus } from '../enums';

export interface ICompetition {
  competitionId: number;
  title: string;
  introduction: string;
  startAt: Date;
  endAt: Date;
  ended: boolean;
  isTeam: boolean;
  registerStartAt: Date | null;
  registerEndAt: Date | null;
  createdByUser: IUserCommonRelative;
  hidden: boolean;
  createdAt: Date;
  updatedAt: Date;
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
  allowedAuthMethods: string[];
  allowedSolutionLanguages: string[];
  externalRanklistUrl: string;
}
