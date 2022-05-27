import { EBalloonType, EBalloonStatus } from '../enums';

export interface IBalloon {
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
  type: EBalloonType;
  status: EBalloonStatus;
  assignedUserId: number | null;
  isFb: boolean;
  createdAt: string;
  updatedAt: string;
}
