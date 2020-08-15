/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetUserACRankReq {
  type: 'day' | 'week' | 'month';
}

export interface IGetUserACRankResp {
  count: number;
  rows: {
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    accepted: number;
  }[];
  truncated: number;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  startAt: string;
  /**
   * ms
   */
  _updateEvery: number;
  /**
   * timestamp ms
   */
  _updatedAt: number;
}

export interface IGetUserAcceptedProblemsReq {
  userIds: string[];
}

export interface IGetUserAcceptedProblemsResp {
  stats: {
    [k: string]: {
      accepted: number;
      problems: {
        pid: number;
        sid: number;
        at: string;
      }[];
      /**
       * timestamp ms
       */
      _updatedAt: number;
    };
  };
  truncated: number;
  /**
   * ms
   */
  _updateEvery: number;
  /**
   * timestamp ms
   */
  _updatedAt: number;
}

export interface IGetUserSubmittedProblemsReq {
  userIds: string[];
}

export interface IGetUserSubmittedProblemsResp {
  stats: {
    [k: string]: {
      accepted: number;
      submitted: number;
      problems: {
        pid: number;
        s: {
          sid: number;
          res: number;
          at: string;
        }[];
      }[];
      /**
       * timestamp ms
       */
      _updatedAt: number;
    };
  };
  truncated: number;
  /**
   * ms
   */
  _updateEvery: number;
  /**
   * timestamp ms
   */
  _updatedAt: number;
}
