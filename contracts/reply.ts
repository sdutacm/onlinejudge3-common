/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetReplyListReq {
  page?: number;
  limit?: number;
  order?: ['replyId' | 'createdAt', 'ASC' | 'DESC'][];
  replyId?: number;
  topicId?: number;
  userId?: number;
  _scope?: 'available' | null;
}

export interface IGetReplyListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    replyId: number;
    topic?: {
      topicId: number;
      title: string;
      replyCount: number;
    };
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    content: string;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    createdAt: string;
    deleted: boolean;
  }[];
}

export interface ICreateReplyReq {
  topicId: number;
  content: string;
}

export interface ICreateReplyResp {
  replyId: number;
}

export interface IDeleteReplyReq {
  replyId: number;
}
