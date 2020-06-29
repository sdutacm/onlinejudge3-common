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
  9: 'The media file is invalid',
  10: 'The media file size limit exceeded',

  // User 1XX
  101: 'Incorrect login name or password',
  102: 'The username already exists',
  103: 'The nickname already exists',
  104: 'The email already exists',
  105: 'The verification code is incorrect',
  106: 'The old password is incorrect',
  107: 'The user does not exist',

  // Problem 2XX

  // Solution 3XX

  // Contest 4XX
  401: 'Incorrect username or password',
  402: 'Incorrect password',
  403: 'The contest is pending',
  404: 'You have already registered a user',
  405: 'The contest register is not in progress',
  406: 'The contest register is not open',

  // Topic 5XX

  // Post 6XX

  // Message 7XX

  // Favorite 8XX

  // Note 9XX

  // Set 10XX

  // Group 11XX

  // Judger 12XX
  1201: 'Unsupported data format',
  1202: 'Invalid data',
  1203: 'Data git working dir is not clean. Please retry',

  // Misc 13XX
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
  GENERAL_INVALID_MEDIA = 9,
  GENERAL_INVALID_MEDIA_SIZE = 10,

  // User 1XX
  USER_INCORRECT_LOGIN_INFO = 101,
  USER_USERNAME_EXISTS = 102,
  USER_NICKNAME_EXISTS = 103,
  USER_EMAIL_EXISTS = 104,
  USER_INCORRECT_VERIFICATION_CODE = 105,
  USER_INCORRECT_OLD_PASSWORD = 106,
  USER_NOT_EXIST = 107,

  // Problem 2XX

  // Solution 3XX

  // Contest 4XX
  CONTEST_INCORRECT_USERNAME_OR_PASSWORD = 401,
  CONTEST_INCORRECT_PASSWORD = 402,
  CONTEST_PENDING = 403,
  CONTEST_REGISTERED = 404,
  CONTEST_REGISTER_NOT_IN_PROGRESS = 405,
  CONTEST_REGISTER_NOT_OPEN = 406,

  // Topic 5XX

  // Post 6XX

  // Message 7XX

  // Favorite 8XX

  // Note 9XX

  // Set 10XX

  // Group 11XX

  // Judger 12XX
  JUDGER_UNSUPPORTED_DATA_FORMAT = 1201,
  JUDGER_INVALID_DATA = 1202,
  JUDGER_DATA_GIT_WD_NOT_CLEAN = 1203,

  // Misc 13XX
}
