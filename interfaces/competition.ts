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
  user: IUserCommonRelative;
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
  schoolNo?: string;
  school?: string;
  college?: string;
  major?: string;
  class?: string;
  tel?: string;
  clothing?: string;
  birthDate?: Date;
  slogan?: string;
}
