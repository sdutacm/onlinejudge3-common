export const codeMsgs = {
  // General X
  [-1]: 'Internal Server Error',
  1: 'Unknown Error',
  2: 'Illegal Request',
  3: 'You are not logged in',
  4: 'You have already logged in',
  5: 'You do not have permission to operate',
  6: 'The request entity does not exist',
  7: 'Request frequency limit exceeded',
};

export enum Codes {
  // General X
  GENERAL_INTERNAL_SERVER_ERROR = -1,
  GENERAL_UNKNOWN_ERROR = 1,
  GENERAL_ILLEGAL_REQUEST = 2,
  GENERAL_NOT_LOGGED_IN = 3,
  GENERAL_ALREADY_LOGGED_IN = 4,
  GENERAL_NO_PERMISSION = 5,
  GENERAL_ENTITY_NOT_EXIST = 6,
  GENERAL_FLE = 7,
}
