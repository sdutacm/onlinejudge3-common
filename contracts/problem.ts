/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetProblemListReq {
  page?: number;
  limit?: number;
  order?: ['problemId', 'ASC' | 'DESC'][];
  problemId?: number;
  problemIds?: number[];
  title?: string;
  source?: string;
  authors?: string[];
  display?: boolean;
  tagIds?: number[];
  _scope?: 'available' | null;
}

export interface IGetProblemListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    problemId: number;
    title: string;
    source: string;
    authors: string[];
    difficulty: number;
    accepted: number;
    submitted: number;
    display: boolean;
    tags: {
      tagId: number;
      nameEn: string;
      nameZhHans: string;
      nameZhHant: string;
      hidden: boolean;
      createdAt: string;
    }[];
    createdAt: string;
    updatedAt: string | null;
  }[];
}

export interface IGetProblemDetailReq {
  problemId: number;
  _scope?: 'available' | null;
}

export interface IGetProblemDetailResp {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
  samples: {
    in: string;
    out: string;
  }[];
  hint: string;
  source: string;
  authors: string[];
  timeLimit: number;
  memoryLimit: number;
  difficulty: number;
  accepted: number;
  submitted: number;
  spj: boolean;
  display: boolean;
  spConfig: {
    [k: string]: unknown;
  };
  revision: number;
  tags: {
    tagId: number;
    nameEn: string;
    nameZhHans: string;
    nameZhHant: string;
    hidden: boolean;
    createdAt: string;
  }[];
  createdAt: string;
  updatedAt: string | null;
}

export interface ICreateProblemReq {
  title: string;
  description: string;
  input: string;
  output: string;
  samples: {
    in: string;
    out: string;
  }[];
  hint: string;
  source: string;
  authors: string[];
  timeLimit: number;
  memoryLimit: number;
  difficulty?: number;
  spj?: boolean;
  display?: boolean;
  spConfig?: {
    [k: string]: unknown;
  };
}

export interface ICreateProblemResp {
  problemId: number;
}

export interface IUpdateProblemDetailReq {
  problemId: number;
  title?: string;
  description?: string;
  input?: string;
  output?: string;
  samples?: {
    in: string;
    out: string;
  }[];
  hint?: string;
  source?: string;
  authors?: string[];
  timeLimit?: number;
  memoryLimit?: number;
  difficulty?: number;
  spj?: boolean;
  display?: boolean;
  spConfig?: {
    [k: string]: unknown;
  };
}

export interface ISetProblemTagsReq {
  problemId: number;
  tagIds: number[];
}
