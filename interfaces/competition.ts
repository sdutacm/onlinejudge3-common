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
  spConfig: ICompetitionSpConfig;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompetitionSpConfigMemberInfoField {
  name: string;
  field: string;
  type: 'string' | 'number' | 'boolean';
  component: 'input' | 'textarea' | 'select' | 'checkbox' | 'datetime' | 'richtext';
  initialValue: string | number | boolean | null;
  placeholder?: string;
  options?: { value: string; name: string }[]; // only for select
  rules?: any[]; // antd form rules
  private?: boolean;
  [key: string]: any;
}

export interface ICompetitionSpConfigGenhinExplorationW2KByDistributePeriodically {
  by: 'distributePeriodically';
  startAtSecond: number;
  periodSecond: number;
  num: number;
}

export interface ICompetitionSpConfigGenhinExplorationW2KByGetBySolvingProblems {
  by: 'getBySolvingProblems';
  condition: 'onceSectionCompleted';
  num: number;
}

export interface ICompetitionSpConfig {
  preset?: 'genshin';
  memberInfoFields?: ICompetitionSpConfigMemberInfoField[];
  genshinConfig?: {
    useExplorationMode?: boolean;
    explorationModeOptions?: {
      /** 初始钥匙数量 */
      initialKeyNum?: number;
      /** 最大钥匙数量 */
      maxKeyNum?: number;
      /** 获取钥匙的方式 */
      waysToGetKey?: Array<
        | ICompetitionSpConfigGenhinExplorationW2KByDistributePeriodically
        | ICompetitionSpConfigGenhinExplorationW2KByGetBySolvingProblems
      >;
      /** 区域分段设置 */
      sections?: {
        /** 区域 ID */
        id: string;
        /** 显示标题 */
        title: string;
        /** 区域内使用的题目（以比赛题目下标来关联） */
        problemIndexes: number[];
        /** 默认解锁 */
        unlockByDefault?: boolean;
        /**
         * 区域解锁花费钥匙数量
         * @default 1
         */
        unlockKeyCost?: number;
      }[];
    };
  };
}

export interface ICompetitionProblemMeta {
  alias: string;
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
  [k: string]: any;
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
