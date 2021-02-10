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
    contract: { req: 'user.loginReq', resp: 'user.loginResp' },
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
  createUser: {
    method: 'POST',
    url: '/createUser',
    contract: { req: 'user.createUserReq', resp: 'user.createUserResp' },
  },
  batchCreateUsers: {
    method: 'POST',
    url: '/batchCreateUsers',
    contract: { req: 'user.batchCreateUsersReq', resp: null },
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
  getUserProblemResultStats: {
    method: 'POST',
    url: '/getUserProblemResultStats',
    contract: {
      req: 'user.getUserProblemResultStatsReq',
      resp: 'user.getUserProblemResultStatsResp',
    },
  },
  getUserSolutionCalendar: {
    method: 'POST',
    url: '/getUserSolutionCalendar',
    contract: { req: 'user.getUserSolutionCalendarReq', resp: 'user.getUserSolutionCalendarResp' },
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
  setProblemTags: {
    method: 'POST',
    url: '/setProblemTags',
    contract: { req: 'problem.setProblemTagsReq', resp: null },
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
  // solution
  getSolutionList: {
    method: 'POST',
    url: '/getSolutionList',
    contract: { req: 'solution.getSolutionListReq', resp: 'solution.getSolutionListResp' },
  },
  getSolutionDetail: {
    method: 'POST',
    url: '/getSolutionDetail',
    contract: { req: 'solution.getSolutionDetailReq', resp: 'solution.getSolutionDetailResp' },
  },
  batchGetSolutionDetail: {
    method: 'POST',
    url: '/batchGetSolutionDetail',
    contract: {
      req: 'solution.batchGetSolutionDetailReq',
      resp: 'solution.batchGetSolutionDetailResp',
    },
  },
  updateSolutionShare: {
    method: 'POST',
    url: '/updateSolutionShare',
    contract: { req: 'solution.updateSolutionShareReq', resp: null },
  },
  submitSolution: {
    method: 'POST',
    url: '/submitSolution',
    contract: { req: 'solution.submitSolutionReq', resp: 'solution.submitSolutionResp' },
  },
  rejudgeSolution: {
    method: 'POST',
    url: '/rejudgeSolution',
    contract: { req: 'solution.rejudgeSolutionReq', resp: null },
  },
  // contest
  getContestList: {
    method: 'POST',
    url: '/getContestList',
    contract: { req: 'contest.getContestListReq', resp: 'contest.getContestListResp' },
  },
  getContestSession: {
    method: 'POST',
    url: '/getContestSession',
    contract: { req: 'contest.getContestSessionReq', resp: 'contest.getContestSessionResp' },
  },
  requestContestSession: {
    method: 'POST',
    url: '/requestContestSession',
    contract: {
      req: 'contest.requestContestSessionReq',
      resp: 'contest.requestContestSessionResp',
    },
  },
  logoutContest: {
    method: 'POST',
    url: '/logoutContest',
    contract: { req: 'contest.logoutContestReq', resp: null },
  },
  getContestDetail: {
    method: 'POST',
    url: '/getContestDetail',
    contract: { req: 'contest.getContestDetailReq', resp: 'contest.getContestDetailResp' },
  },
  createContest: {
    method: 'POST',
    url: '/createContest',
    contract: { req: 'contest.createContestReq', resp: 'contest.createContestResp' },
  },
  updateContestDetail: {
    method: 'POST',
    url: '/updateContestDetail',
    contract: { req: 'contest.updateContestDetailReq', resp: null },
  },
  getContestProblems: {
    method: 'POST',
    url: '/getContestProblems',
    contract: { req: 'contest.getContestProblemsReq', resp: 'contest.getContestProblemsResp' },
  },
  getContestProblemConfig: {
    method: 'POST',
    url: '/getContestProblemConfig',
    contract: {
      req: 'contest.getContestProblemConfigReq',
      resp: 'contest.getContestProblemConfigResp',
    },
  },
  setContestProblemConfig: {
    method: 'POST',
    url: '/setContestProblemConfig',
    contract: { req: 'contest.setContestProblemConfigReq', resp: null },
  },
  getContestUserList: {
    method: 'POST',
    url: '/getContestUserList',
    contract: { req: 'contest.getContestUserListReq', resp: 'contest.getContestUserListResp' },
  },
  getContestUsers: {
    method: 'POST',
    url: '/getContestUsers',
    contract: { req: 'contest.getContestUsersReq', resp: 'contest.getContestUsersResp' },
  },
  getContestUserDetail: {
    method: 'POST',
    url: '/getContestUserDetail',
    contract: { req: 'contest.getContestUserDetailReq', resp: 'contest.getContestUserDetailResp' },
  },
  createContestUser: {
    method: 'POST',
    url: '/createContestUser',
    contract: { req: 'contest.createContestUserReq', resp: 'contest.createContestUserResp' },
  },
  batchCreateContestUsers: {
    method: 'POST',
    url: '/batchCreateContestUsers',
    contract: { req: 'contest.batchCreateContestUsersReq', resp: null },
  },
  updateContestUser: {
    method: 'POST',
    url: '/updateContestUser',
    contract: { req: 'contest.updateContestUserReq', resp: null },
  },
  auditContestUser: {
    method: 'POST',
    url: '/auditContestUser',
    contract: { req: 'contest.auditContestUserReq', resp: null },
  },
  getContestProblemSolutionStats: {
    method: 'POST',
    url: '/getContestProblemSolutionStats',
    contract: {
      req: 'contest.getContestProblemSolutionStatsReq',
      resp: 'contest.getContestProblemSolutionStatsResp',
    },
  },
  getContestRanklist: {
    method: 'POST',
    url: '/getContestRanklist',
    contract: { req: 'contest.getContestRanklistReq', resp: 'contest.getContestRanklistResp' },
  },
  getContestRatingStatus: {
    method: 'POST',
    url: '/getContestRatingStatus',
    contract: {
      req: 'contest.getContestRatingStatusReq',
      resp: 'contest.getContestRatingStatusResp',
    },
  },
  endContest: {
    method: 'POST',
    url: '/endContest',
    contract: {
      req: 'contest.endContestReq',
      resp: null,
    },
  },
  // judger
  getJudgerDataFile: {
    method: 'POST',
    url: '/getJudgerDataFile',
    contract: { req: 'judger.getJudgerDataFileReq', resp: 'judger.getJudgerDataFileResp' },
  },
  getJudgerDataArchive: {
    method: 'POST',
    url: '/getJudgerDataArchive',
    contract: { req: 'judger.getJudgerDataArchiveReq', resp: null },
  },
  prepareJudgerDataUpdate: {
    method: 'POST',
    url: '/prepareJudgerDataUpdate',
    contract: { req: null, resp: null },
  },
  uploadJudgerData: {
    method: 'POST',
    url: '/uploadJudgerData',
    contract: { req: 'judger.uploadJudgerDataReq', resp: null },
  },
  getLanguageConfig: {
    method: 'POST',
    url: '/getLanguageConfig',
    contract: { req: null, resp: 'judger.getLanguageConfigResp' },
  },
  // message
  getMessageList: {
    method: 'POST',
    url: '/getMessageList',
    contract: { req: 'message.getMessageListReq', resp: 'message.getMessageListResp' },
  },
  sendMessage: {
    method: 'POST',
    url: '/sendMessage',
    contract: { req: 'message.sendMessageReq', resp: null },
  },
  batchSendMessage: {
    method: 'POST',
    url: '/batchSendMessage',
    contract: { req: 'message.batchSendMessageReq', resp: null },
  },
  updateMessageRead: {
    method: 'POST',
    url: '/updateMessageRead',
    contract: { req: 'message.updateMessageReadReq', resp: null },
  },
  // favorite
  getFavoriteList: {
    method: 'POST',
    url: '/getFavoriteList',
    contract: { req: 'favorite.getFavoriteListReq', resp: 'favorite.getFavoriteListResp' },
  },
  addFavorite: {
    method: 'POST',
    url: '/addFavorite',
    contract: { req: 'favorite.addFavoriteReq', resp: 'favorite.addFavoriteResp' },
  },
  deleteFavorite: {
    method: 'POST',
    url: '/deleteFavorite',
    contract: { req: 'favorite.deleteFavoriteReq', resp: null },
  },
  // note
  getNoteList: {
    method: 'POST',
    url: '/getNoteList',
    contract: { req: 'note.getNoteListReq', resp: 'note.getNoteListResp' },
  },
  addNote: {
    method: 'POST',
    url: '/addNote',
    contract: { req: 'note.addNoteReq', resp: 'note.addNoteResp' },
  },
  deleteNote: {
    method: 'POST',
    url: '/deleteNote',
    contract: { req: 'note.deleteNoteReq', resp: null },
  },
  // topic
  getTopicList: {
    method: 'POST',
    url: '/getTopicList',
    contract: { req: 'topic.getTopicListReq', resp: 'topic.getTopicListResp' },
  },
  getTopicDetail: {
    method: 'POST',
    url: '/getTopicDetail',
    contract: { req: 'topic.getTopicDetailReq', resp: 'topic.getTopicDetailResp' },
  },
  createTopic: {
    method: 'POST',
    url: '/createTopic',
    contract: { req: 'topic.createTopicReq', resp: 'topic.createTopicResp' },
  },
  updateTopicDetail: {
    method: 'POST',
    url: '/updateTopicDetail',
    contract: { req: 'topic.updateTopicDetailReq', resp: null },
  },
  deleteTopic: {
    method: 'POST',
    url: '/deleteTopic',
    contract: { req: 'topic.deleteTopicReq', resp: null },
  },
  // reply
  getReplyList: {
    method: 'POST',
    url: '/getReplyList',
    contract: { req: 'reply.getReplyListReq', resp: 'reply.getReplyListResp' },
  },
  createReply: {
    method: 'POST',
    url: '/createReply',
    contract: { req: 'reply.createReplyReq', resp: 'reply.createReplyResp' },
  },
  deleteReply: {
    method: 'POST',
    url: '/deleteReply',
    contract: { req: 'reply.deleteReplyReq', resp: null },
  },
  // post
  getPostList: {
    method: 'POST',
    url: '/getPostList',
    contract: { req: 'post.getPostListReq', resp: 'post.getPostListResp' },
  },
  getPostDetail: {
    method: 'POST',
    url: '/getPostDetail',
    contract: { req: 'post.getPostDetailReq', resp: 'post.getPostDetailResp' },
  },
  createPost: {
    method: 'POST',
    url: '/createPost',
    contract: { req: 'post.createPostReq', resp: 'post.createPostResp' },
  },
  updatePostDetail: {
    method: 'POST',
    url: '/updatePostDetail',
    contract: { req: 'post.updatePostDetailReq', resp: null },
  },
  // set
  getSetList: {
    method: 'POST',
    url: '/getSetList',
    contract: { req: 'set.getSetListReq', resp: 'set.getSetListResp' },
  },
  getSetDetail: {
    method: 'POST',
    url: '/getSetDetail',
    contract: { req: 'set.getSetDetailReq', resp: 'set.getSetDetailResp' },
  },
  createSet: {
    method: 'POST',
    url: '/createSet',
    contract: { req: 'set.createSetReq', resp: 'set.createSetResp' },
  },
  updateSetDetail: {
    method: 'POST',
    url: '/updateSetDetail',
    contract: { req: 'set.updateSetDetailReq', resp: null },
  },
  deleteSet: {
    method: 'POST',
    url: '/deleteSet',
    contract: { req: 'set.deleteSetReq', resp: null },
  },
  // group
  getGroupList: {
    method: 'POST',
    url: '/getGroupList',
    contract: { req: 'group.getGroupListReq', resp: 'group.getGroupListResp' },
  },
  getGroupDetail: {
    method: 'POST',
    url: '/getGroupDetail',
    contract: { req: 'group.getGroupDetailReq', resp: 'group.getGroupDetailResp' },
  },
  getUserGroups: {
    method: 'POST',
    url: '/getUserGroups',
    contract: { req: 'group.getUserGroupsReq', resp: 'group.getUserGroupsResp' },
  },
  createGroup: {
    method: 'POST',
    url: '/createGroup',
    contract: { req: 'group.createGroupReq', resp: 'group.createGroupResp' },
  },
  createEmptyGroup: {
    method: 'POST',
    url: '/createEmptyGroup',
    contract: { req: 'group.createEmptyGroupReq', resp: 'group.createEmptyGroupResp' },
  },
  updateGroupDetail: {
    method: 'POST',
    url: '/updateGroupDetail',
    contract: { req: 'group.updateGroupDetailReq', resp: null },
  },
  deleteGroup: {
    method: 'POST',
    url: '/deleteGroup',
    contract: { req: 'group.deleteGroupReq', resp: null },
  },
  getGroupMemberList: {
    method: 'POST',
    url: '/getGroupMemberList',
    contract: { req: 'group.getGroupMemberListReq', resp: 'group.getGroupMemberListResp' },
  },
  joinGroup: {
    method: 'POST',
    url: '/joinGroup',
    contract: { req: 'group.joinGroupReq', resp: null },
  },
  batchAddGroupMembers: {
    method: 'POST',
    url: '/batchAddGroupMembers',
    contract: { req: 'group.batchAddGroupMembersReq', resp: null },
  },
  updateGroupMember: {
    method: 'POST',
    url: '/updateGroupMember',
    contract: { req: 'group.updateGroupMemberReq', resp: null },
  },
  deleteGroupMember: {
    method: 'POST',
    url: '/deleteGroupMember',
    contract: { req: 'group.deleteGroupMemberReq', resp: null },
  },
  exitGroup: {
    method: 'POST',
    url: '/exitGroup',
    contract: { req: 'group.exitGroupReq', resp: null },
  },
  // misc
  uploadMedia: {
    method: 'POST',
    url: '/uploadMedia',
    contract: { req: 'misc.uploadMediaReq', resp: 'misc.uploadMediaResp' },
  },
  uploadAsset: {
    method: 'POST',
    url: '/uploadAsset',
    contract: { req: 'misc.uploadAssetReq', resp: 'misc.uploadAssetResp' },
  },
  // stat
  getUserACRank: {
    method: 'POST',
    url: '/getUserACRank',
    contract: { req: 'stat.getUserACRankReq', resp: 'stat.getUserACRankResp' },
  },
  getUserAcceptedProblems: {
    method: 'POST',
    url: '/getUserAcceptedProblems',
    contract: { req: 'stat.getUserAcceptedProblemsReq', resp: 'stat.getUserAcceptedProblemsResp' },
  },
  getUserSubmittedProblems: {
    method: 'POST',
    url: '/getUserSubmittedProblems',
    contract: {
      req: 'stat.getUserSubmittedProblemsReq',
      resp: 'stat.getUserSubmittedProblemsResp',
    },
  },
};

Object.keys(_routesBe).forEach((key) => {
  // @ts-ignore
  _routesBe[key].i = key;
});

export const routesBe = _routesBe as Record<keyof typeof _routesBe, IRouteBeConfig>;
