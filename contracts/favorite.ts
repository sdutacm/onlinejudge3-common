/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetFavoriteListReq {
  order?: ['favoriteId', 'ASC' | 'DESC'][];
  type?: string;
  note?: string;
}

export interface IGetFavoriteListResp {
  count: number;
  rows: (
    | {
        favoriteId: number;
        userId: number;
        type: 'problem';
        target: {
          problemId: number;
          title: string;
        };
        note: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        favoriteId: number;
        userId: number;
        type: 'contest';
        target: {
          contestId: number;
          title: string;
        };
        note: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        favoriteId: number;
        userId: number;
        type: 'set';
        target: {
          setId: number;
          title: string;
        };
        note: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        favoriteId: number;
        userId: number;
        type: 'group';
        target: {
          groupId: number;
          title: string;
          name: string;
          verified: boolean;
        };
        note: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
  )[];
}
