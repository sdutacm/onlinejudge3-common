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
  301: 'The problem does not exist',
  302: 'You do not have permission to view this problem',
  303: 'The contest does not exis',
  304: 'You do not have permission to view this contest',
  305: 'The contest is not in progress',

  // Contest 4XX
  401: 'Incorrect username or password',
  402: 'Incorrect password',
  403: 'The contest is pending',
  404: 'You have already registered a user',
  405: 'The contest register is not in progress',
  406: 'The contest register is not open',
  407: 'The contest user does not accepted',
  408: 'The contest is not ended yet',
  409: 'The contest is already ended',
  410: 'Please login OJ',
  411: 'Please login this private-type contest',
  412: 'Please login this register-type contest',

  // Topic 5XX
  501: 'The problem does not exist',
  502: 'The topic does not exist',

  // Post 6XX

  // Message 7XX
  701: 'The recipient does not exist',

  // Favorite 8XX
  801: 'The favorite has been deleted',

  // Note 9XX
  901: 'The note has been deleted',

  // Set 10XX
  1001: 'Some of problems do not exist',

  // Group 11XX
  1101: 'The group can not join',
  1102: 'You have already joined this group or under auditing',

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
  SOLUTION_PROBLEM_NOT_EXIST = 301,
  SOLUTION_PROBLEM_NO_PERMISSION = 302,
  SOLUTION_CONTEST_NOT_EXIST = 303,
  SOLUTION_CONTEST_NO_PERMISSION = 304,
  SOLUTION_CONTEST_NOT_IN_PROGRESS = 305,

  // Contest 4XX
  CONTEST_INCORRECT_USERNAME_OR_PASSWORD = 401,
  CONTEST_INCORRECT_PASSWORD = 402,
  CONTEST_PENDING = 403,
  CONTEST_REGISTERED = 404,
  CONTEST_REGISTER_NOT_IN_PROGRESS = 405,
  CONTEST_REGISTER_NOT_OPEN = 406,
  CONTEST_USER_NOT_ACCEPTED = 407,
  CONTEST_NOT_ENDED = 408,
  CONTEST_ENDED = 409,
  CONTEST_NEED_LOGIN_OJ = 410,
  CONTEST_NEED_LOGIN_PRIVATE_CONTEST = 411,
  CONTEST_NEED_LOGIN_REGISTER_CONTEST = 412,

  // Topic 5XX
  TOPIC_PROBLEM_NOT_EXIST = 501,
  TOPIC_NOT_EXIST = 502,

  // Post 6XX

  // Message 7XX
  MESSAGE_RECIPIENT_NOT_EXIST = 701,

  // Favorite 8XX
  FAVORITE_DELETED = 801,

  // Note 9XX
  NOTE_DELETED = 901,

  // Set 10XX
  SET_PROBLEM_NOT_EXIST = 1001,

  // Group 11XX
  GROUP_CANNOT_JOIN = 1101,
  GROUP_ALREADY_JOINED_OR_UNDER_AUDITING = 1102,

  // Judger 12XX
  JUDGER_UNSUPPORTED_DATA_FORMAT = 1201,
  JUDGER_INVALID_DATA = 1202,
  JUDGER_DATA_GIT_WD_NOT_CLEAN = 1203,

  // Misc 13XX
}
