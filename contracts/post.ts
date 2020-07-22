/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetPostListReq {
  page?: number;
  limit?: number;
  order?: ['postId' | 'createdAt', 'ASC' | 'DESC'][];
  postId?: number;
  userId?: number;
  title?: string;
  _scope?: 'available' | null;
}

export interface IGetPostListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    postId: number;
    user?: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    title: string;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    createdAt: string;
    display: boolean;
  }[];
}

export interface IGetPostDetailReq {
  postId: number;
  _scope?: 'available' | null;
}

export interface IGetPostDetailResp {
  postId: number;
  user?: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
  };
  title: string;
  content: string;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  createdAt: string;
  display: boolean;
}

export interface ICreatePostReq {
  title: string;
  content: string;
  display?: boolean;
}

export interface ICreatePostResp {
  postId: number;
}

export interface IUpdatePostReq {
  postId: number;
  title: string;
  content: string;
  display?: boolean;
}
