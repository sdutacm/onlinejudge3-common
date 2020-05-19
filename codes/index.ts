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
  8: 'Request params error',

  // User 1XX
  101: 'Incorrect login name or password',
  102: 'The username already exists',
  103: 'The nickname already exists',
  104: 'The email already exists',
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
  GENERAL_REQUEST_PARAMS_ERROR = 8,

  // User 1XX
  USER_INCORRECT_LOGIN_INFO = 101,
  USER_USERNAME_EXISTS = 102,
  USER_NICKNAME_EXISTS = 103,
  USER_EMAIL_EXISTS = 104,
}
