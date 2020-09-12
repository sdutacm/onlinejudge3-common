/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetTopicListReq {
  page?: number;
  limit?: number;
  order?: ['topicId' | 'createdAt', 'ASC' | 'DESC'][];
  topicId?: number;
  userId?: number;
  problemId?: number;
  title?: string;
  _scope?: 'available' | null;
}

export interface IGetTopicListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    topicId: number;
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    problem?: {
      problemId: number;
      title: string;
    };
    title: string;
    replyCount: number;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    createdAt: string;
    deleted: boolean;
  }[];
}

export interface IGetTopicDetailReq {
  topicId: number;
  _scope?: 'available' | null;
}

export interface IGetTopicDetailResp {
  topicId: number;
  user: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
  };
  problem?: {
    problemId: number;
    title: string;
  };
  title: string;
  content: string;
  replyCount: number;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  createdAt: string;
  deleted: boolean;
}

export interface ICreateTopicReq {
  title: string;
  content: string;
  problemId?: number;
}

export interface ICreateTopicResp {
  topicId: number;
}

export interface IUpdateTopicDetailReq {
  topicId: number;
  title: string;
  content: string;
}

export interface IDeleteTopicReq {
  topicId: number;
}
