/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetSetListReq {
  page?: number;
  limit?: number;
  order?: ['setId' | 'createdAt', 'ASC' | 'DESC'][];
  setId?: number;
  userId?: number;
  title?: string;
  type?: string;
  _scope?: 'available' | null;
}

export interface IGetSetListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    setId: number;
    user: {
      userId: number;
      username: string;
      nickname: string;
      avatar: string | null;
      bannerImage: string;
    };
    title: string;
    type: string;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    createdAt: string;
    /**
     * YYYY-MM-DD HH:mm:ss
     */
    updatedAt: string;
    hidden: boolean;
  }[];
}

export interface IGetSetDetailReq {
  setId: number;
  _scope?: 'available' | null;
}

export interface IGetSetDetailResp {
  setId: number;
  user: {
    userId: number;
    username: string;
    nickname: string;
    avatar: string | null;
    bannerImage: string;
  };
  title: string;
  description: string;
  type: string;
  props: {
    sections: {
      title: string;
      description?: string;
      problems: {
        problemId: number;
        title: string;
      }[];
    }[];
  };
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  createdAt: string;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  updatedAt: string;
  hidden: boolean;
}

export interface ICreateSetReq {
  title: string;
  description: string;
  type: 'standard';
  props: {
    sections: {
      title: string;
      description?: string;
      problems: {
        problemId: number;
        title?: string;
      }[];
    }[];
  };
  hidden?: boolean;
}

export interface ICreateSetResp {
  setId: number;
}

export interface IUpdateSetDetailReq {
  setId: number;
  title: string;
  description: string;
  type: 'standard';
  props: {
    sections: {
      title: string;
      description?: string;
      problems: {
        problemId: number;
        title?: string;
      }[];
    }[];
  };
  hidden?: boolean;
}

export interface IDeleteSetReq {
  setId: number;
}
