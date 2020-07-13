/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetMessageListReq {
  page?: number;
  limit?: number;
  order?: ['messageId', 'ASC' | 'DESC'][];
  messageId?: number;
  fromUserId?: number;
  toUserId?: number;
  read?: boolean;
}

export interface IGetMessageListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    messageId: number;
    from?: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    to: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    title: string;
    content: string;
    read?: boolean;
    anonymous: boolean;
    createdAt: string;
  }[];
}

export interface ISendMessageReq {
  toUserId: number;
  title: string;
  content: string;
  anonymous: boolean;
}

export interface IBatchSendMessageReq {
  toUserIds: number[];
  title: string;
  content: string;
  anonymous: boolean;
  asSystem: boolean;
}

export interface IUpdateMessageReadReq {
  messageId: number;
  read: boolean;
}
