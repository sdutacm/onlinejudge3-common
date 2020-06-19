export interface IRouteBeConfig {
  i: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  contract: {
    req: string | null;
    resp: string | null;
  };
}

const _routesBe = {
  // user
  getSession: {
    method: 'GET',
    url: '/getSession',
    contract: { req: null, resp: 'user.getSessionResp' },
  },
  login: {
    method: 'POST',
    url: '/login',
    contract: { req: 'user.loginReq', resp: null },
  },
  logout: {
    method: 'POST',
    url: '/logout',
    contract: { req: null, resp: null },
  },
  register: {
    method: 'POST',
    url: '/register',
    contract: { req: 'user.registerReq', resp: 'user.registerResp' },
  },
  getUserList: {
    method: 'POST',
    url: '/getUserList',
    contract: { req: 'user.getUserListReq', resp: 'user.getUserListResp' },
  },
  getUserDetail: {
    method: 'POST',
    url: '/getUserDetail',
    contract: { req: 'user.getUserDetailReq', resp: 'user.getUserDetailResp' },
  },
  updateUserDetail: {
    method: 'POST',
    url: '/updateUserDetail',
    contract: { req: 'user.updateUserDetailReq', resp: null },
  },
  updateUserPassword: {
    method: 'POST',
    url: '/updateUserPassword',
    contract: { req: 'user.updateUserPasswordReq', resp: null },
  },
  resetUserPassword: {
    method: 'POST',
    url: '/resetUserPassword',
    contract: { req: 'user.resetUserPasswordReq', resp: null },
  },
  resetUserPasswordByAdmin: {
    method: 'POST',
    url: '/resetUserPasswordByAdmin',
    contract: { req: 'user.resetUserPasswordByAdminReq', resp: null },
  },
  updateUserEmail: {
    method: 'POST',
    url: '/updateUserEmail',
    contract: { req: 'user.updateUserEmailReq', resp: null },
  },
  uploadUserAvatar: {
    method: 'POST',
    url: '/uploadUserAvatar',
    contract: { req: 'user.uploadUserAvatarReq', resp: null },
  },
  uploadUserBannerImage: {
    method: 'POST',
    url: '/uploadUserBannerImage',
    contract: { req: 'user.uploadUserBannerImageReq', resp: null },
  },
  // verification
  sendEmailVerification: {
    method: 'POST',
    url: '/sendEmailVerification',
    contract: {
      req: 'verification.sendEmailVerificationReq',
      resp: 'verification.sendEmailVerificationResp',
    },
  },
  // problem
  getProblemList: {
    method: 'POST',
    url: '/getProblemList',
    contract: { req: 'problem.getProblemListReq', resp: 'problem.getProblemListResp' },
  },
  getProblemDetail: {
    method: 'POST',
    url: '/getProblemDetail',
    contract: { req: 'problem.getProblemDetailReq', resp: 'problem.getProblemDetailResp' },
  },
  createProblem: {
    method: 'POST',
    url: '/createProblem',
    contract: { req: 'problem.createProblemReq', resp: 'problem.createProblemResp' },
  },
  updateProblemDetail: {
    method: 'POST',
    url: '/updateProblemDetail',
    contract: { req: 'problem.updateProblemDetailReq', resp: null },
  },
  updateProblemTags: {
    method: 'POST',
    url: '/updateProblemTags',
    contract: { req: 'problem.updateProblemTagsReq', resp: null },
  },
  // tag
  getTagFullList: {
    method: 'POST',
    url: '/getTagFullList',
    contract: { req: 'tag.getTagFullListReq', resp: 'tag.getTagFullListResp' },
  },
  createTag: {
    method: 'POST',
    url: '/createTag',
    contract: { req: 'tag.createTagReq', resp: 'tag.createTagResp' },
  },
  updateTagDetail: {
    method: 'POST',
    url: '/updateTagDetail',
    contract: { req: 'tag.updateTagDetailReq', resp: null },
  },
  // contest
  getContestList: {
    method: 'POST',
    url: '/getContestList',
    contract: { req: 'contest.getContestListReq', resp: 'contest.getContestListResp' },
  },
};

Object.keys(_routesBe).forEach((key) => {
  // @ts-ignore
  _routesBe[key].i = key;
});

export const routesBe = _routesBe as Record<keyof typeof _routesBe, IRouteBeConfig>;
