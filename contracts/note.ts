/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source contract file,
 * and run `npm run gen:contract` in "onlinejudge3-be" to regenerate this file.
 */

export interface IGetNoteListReq {
  order?: ['noteId', 'ASC' | 'DESC'][];
  type?: string;
  content?: string;
}

export interface IGetNoteListResp {
  count: number;
  rows: (
    | {
        noteId: number;
        userId: number;
        type: 'problem';
        target: {
          problemId: number;
          title: string;
          contest?: {
            contestId: number;
            title: string;
            problemIndex: number;
          };
        };
        content: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        noteId: number;
        userId: number;
        type: 'contest';
        target: {
          contestId: number;
          title: string;
        };
        content: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        noteId: number;
        userId: number;
        type: 'solution';
        target: {
          solutionId: number;
          result: number;
          problem: {
            problemId: number;
            title: string;
          };
          contest?: {
            contestId: number;
            title: string;
            problemIndex: number;
          };
        };
        content: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
    | {
        noteId: number;
        userId: number;
        type: '';
        target: {
          url: string;
          location: {
            pathname: string;
            search: string;
            query: {
              [k: string]: string;
            };
            hash: string;
          };
        };
        content: string;
        createdAt: string;
        updatedAt: string;
        deleted: boolean;
      }
  )[];
}

export type IAddNoteReq =
  | {
      type: 'problem';
      target: {
        problemId: number;
        contestId?: number;
      };
      content: string;
    }
  | {
      type: 'contest';
      target: {
        contestId: number;
      };
      content: string;
    }
  | {
      type: 'solution';
      target: {
        solutionId: number;
      };
      content: string;
    }
  | {
      type: '';
      target: {
        url: string;
        location: {
          pathname: string;
          search: string;
          query: {
            [k: string]: string;
          };
          hash: string;
        };
      };
      content: string;
    };

export interface IAddNoteResp {
  noteId: number;
}

export interface IDeleteNoteReq {
  noteId: number;
}
