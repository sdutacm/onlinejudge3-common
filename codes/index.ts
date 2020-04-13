export const codeMsgs = {
  // General 0XX
  1: 'Unknown Error',
  2: 'Illegal Request',
  3: 'You are not logged in',
  4: 'You have already logged in',
  5: 'You do not have permission to operate',
  6: 'The request entity does not exist',
  7: 'Request frequency limit exceeded',
};

export enum Codes {
  // General 0XX
  R_GENERAL_UNKNOWN_ERROR = 1,
  R_GENERAL_ILLEGAL_REQUEST = 2,
  R_GENERAL_NOT_LOGGED_IN = 3,
  R_GENERAL_ALREADY_LOGGED_IN = 4,
  R_GENERAL_NO_PERMISSION = 5,
  R_GENERAL_ENTITY_NOT_EXIST = 6,
  R_GENERAL_FLE = 7,
}
