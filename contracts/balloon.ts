/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetCompetitionBalloonsReq {
  competitionId: number;
}

export interface IGetCompetitionBalloonsResp {
  count: number;
  rows: {
    balloonId: number;
    solutionId: number;
    competitionId: number;
    userId: number;
    problemId: number;
    problemIndex: number;
    balloonAlias: string;
    balloonColor: string;
    nickname: string;
    subname?: string;
    fieldShortName: string | null;
    seatNo: number | null;
    type: number;
    status: number;
    assignedUserId: number | null;
    isFb: boolean;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    createdAt: string;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    updatedAt: string;
  }[];
}

export interface IUpdateCompetitionBalloonStatusReq {
  balloonId: number;
  competitionId: number;
  status?: number;
  assignedUserId?: number;
}
