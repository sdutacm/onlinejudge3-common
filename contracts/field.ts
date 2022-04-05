/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetFieldListReq {
  page?: number;
  limit?: number;
  order?: ['fieldId' | 'createdAt' | 'updatedAt', 'ASC' | 'DESC'][];
  fieldId?: number;
  name?: string;
  shortName?: string;
  _scope?: 'available' | null;
}

export interface IGetFieldListResp {
  page: number;
  limit: number;
  count: number;
  rows: {
    fieldId: number;
    name: string;
    shortName: string;
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

export interface IGetFieldDetailReq {
  fieldId: number;
  _scope?: 'available' | null;
}

export interface IGetFieldDetailResp {
  fieldId: number;
  name: string;
  shortName: string;
  seatingArrangement?: {
    seatMap: {
      row: number;
      col: number;
      arrangement: (number | null)[][];
    };
    seats: {
      seatNo: number;
      boundIp?: string;
      disabled?: boolean;
    }[];
  } | null;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  createdAt: string;
  /**
   * YYYY-MM-DD HH:mm:ss
   */
  updatedAt: string;
}

export interface ICreateFieldReq {
  name: string;
  shortName: string;
}

export interface ICreateFieldResp {
  fieldId: number;
}

export interface IUpdateFieldDetailReq {
  fieldId: number;
  name?: string;
  shortName?: string;
  seatingArrangement?: {
    seatMap: {
      row: number;
      col: number;
      arrangement: (number | null)[][];
    };
    seats: {
      seatNo: number;
      boundIp?: string;
      disabled?: boolean;
    }[];
  };
  deleted?: boolean;
}
