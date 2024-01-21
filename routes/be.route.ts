export interface IRouteBeConfig {
  i: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  contract: {
    req: string | null;
    resp: string | null;
  };
  csrf?: boolean;
  competitionSide?: boolean;
}

const _routesBe = {
  // user
  getSession: {
    method: 'GET',
    url: '/getSession',
    contract: { req: null, resp: 'user.getSessionResp' },
    csrf: true,
    competitionSide: true,
  },
  login: {
    method: 'POST',
    url: '/login',
    contract: { req: 'user.loginReq', resp: 'user.loginResp' },
    csrf: true,
  },
  logout: {
    method: 'POST',
    url: '/logout',
    contract: { req: null, resp: null },
    csrf: true,
    competitionSide: true,
  },
  register: {
    method: 'POST',
    url: '/register',
    contract: { req: 'user.registerReq', resp: 'user.registerResp' },
    csrf: true,
  },
  createUser: {
    method: 'POST',
    url: '/createUser',
    contract: { req: 'user.createUserReq', resp: 'user.createUserResp' },
    csrf: true,
  },
  batchCreateUsers: {
    method: 'POST',
    url: '/batchCreateUsers',
    contract: { req: 'user.batchCreateUsersReq', resp: null },
    csrf: true,
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
    competitionSide: true,
  },
  updateUserDetail: {
    method: 'POST',
    url: '/updateUserDetail',
    contract: { req: 'user.updateUserDetailReq', resp: null },
    csrf: true,
  },
  updateUserPassword: {
    method: 'POST',
    url: '/updateUserPassword',
    contract: { req: 'user.updateUserPasswordReq', resp: null },
    csrf: true,
  },
  resetUserPassword: {
    method: 'POST',
    url: '/resetUserPassword',
    contract: { req: 'user.resetUserPasswordReq', resp: null },
    csrf: true,
  },
  resetUserPasswordAndEmail: {
    method: 'POST',
    url: '/resetUserPasswordAndEmail',
    contract: { req: 'user.resetUserPasswordAndEmailReq', resp: null },
    csrf: true,
  },
  resetUserPasswordByAdmin: {
    method: 'POST',
    url: '/resetUserPasswordByAdmin',
    contract: { req: 'user.resetUserPasswordByAdminReq', resp: null },
    csrf: true,
  },
  updateUserEmail: {
    method: 'POST',
    url: '/updateUserEmail',
    contract: { req: 'user.updateUserEmailReq', resp: null },
    csrf: true,
  },
  uploadUserAvatar: {
    method: 'POST',
    url: '/uploadUserAvatar',
    contract: { req: 'user.uploadUserAvatarReq', resp: null },
    csrf: true,
  },
  uploadUserBannerImage: {
    method: 'POST',
    url: '/uploadUserBannerImage',
    contract: { req: 'user.uploadUserBannerImageReq', resp: null },
    csrf: true,
  },
  getUserProblemResultStats: {
    method: 'POST',
    url: '/getUserProblemResultStats',
    contract: {
      req: 'user.getUserProblemResultStatsReq',
      resp: 'user.getUserProblemResultStatsResp',
    },
    competitionSide: true,
  },
  getUserSolutionCalendar: {
    method: 'POST',
    url: '/getUserSolutionCalendar',
    contract: { req: 'user.getUserSolutionCalendarReq', resp: 'user.getUserSolutionCalendarResp' },
  },
  getSessionList: {
    method: 'POST',
    url: '/getSessionList',
    contract: { req: null, resp: 'user.getSessionListResp' },
  },
  clearSession: {
    method: 'POST',
    url: '/clearSession',
    contract: { req: 'user.clearSessionReq', resp: null },
    csrf: true,
  },
  getActiveUserCount: {
    method: 'POST',
    url: '/getActiveUserCount',
    contract: { req: null, resp: 'user.getActiveUserCountResp' },
    competitionSide: true,
  },
  getAllUserPermissionsMap: {
    method: 'POST',
    url: '/getAllUserPermissionsMap',
    contract: { req: null, resp: 'user.getAllUserPermissionsMapResp' },
  },
  setUserPermissions: {
    method: 'POST',
    url: '/setUserPermissions',
    contract: { req: 'user.setUserPermissionsReq', resp: null },
    csrf: true,
  },
  // verification
  sendEmailVerification: {
    method: 'POST',
    url: '/sendEmailVerification',
    contract: {
      req: 'verification.sendEmailVerificationReq',
      resp: 'verification.sendEmailVerificationResp',
    },
    csrf: true,
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
    csrf: true,
  },
  updateProblemDetail: {
    method: 'POST',
    url: '/updateProblemDetail',
    contract: { req: 'problem.updateProblemDetailReq', resp: null },
    csrf: true,
  },
  setProblemTags: {
    method: 'POST',
    url: '/setProblemTags',
    contract: { req: 'problem.setProblemTagsReq', resp: null },
    csrf: true,
  },
  // tag
  getTagFullList: {
    method: 'POST',
    url: '/getTagFullList',
    contract: { req: 'tag.getTagFullListReq', resp: 'tag.getTagFullListResp' },
    competitionSide: true,
  },
  createTag: {
    method: 'POST',
    url: '/createTag',
    contract: { req: 'tag.createTagReq', resp: 'tag.createTagResp' },
    csrf: true,
  },
  updateTagDetail: {
    method: 'POST',
    url: '/updateTagDetail',
    contract: { req: 'tag.updateTagDetailReq', resp: null },
    csrf: true,
  },
  // solution
  getSolutionList: {
    method: 'POST',
    url: '/getSolutionList',
    contract: { req: 'solution.getSolutionListReq', resp: 'solution.getSolutionListResp' },
    competitionSide: true,
  },
  getSolutionDetail: {
    method: 'POST',
    url: '/getSolutionDetail',
    contract: { req: 'solution.getSolutionDetailReq', resp: 'solution.getSolutionDetailResp' },
    competitionSide: true,
  },
  batchGetSolutionDetail: {
    method: 'POST',
    url: '/batchGetSolutionDetail',
    contract: {
      req: 'solution.batchGetSolutionDetailReq',
      resp: 'solution.batchGetSolutionDetailResp',
    },
    competitionSide: true,
  },
  updateSolutionShare: {
    method: 'POST',
    url: '/updateSolutionShare',
    contract: { req: 'solution.updateSolutionShareReq', resp: null },
    csrf: true,
    competitionSide: true,
  },
  submitSolution: {
    method: 'POST',
    url: '/submitSolution',
    contract: { req: 'solution.submitSolutionReq', resp: 'solution.submitSolutionResp' },
    csrf: true,
    competitionSide: true,
  },
  rejudgeSolution: {
    method: 'POST',
    url: '/rejudgeSolution',
    contract: { req: 'solution.rejudgeSolutionReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  logoutContest: {
    method: 'POST',
    url: '/logoutContest',
    contract: { req: 'contest.logoutContestReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  updateContestDetail: {
    method: 'POST',
    url: '/updateContestDetail',
    contract: { req: 'contest.updateContestDetailReq', resp: null },
    csrf: true,
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
    csrf: true,
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
    csrf: true,
  },
  batchCreateContestUsers: {
    method: 'POST',
    url: '/batchCreateContestUsers',
    contract: { req: 'contest.batchCreateContestUsersReq', resp: null },
    csrf: true,
  },
  updateContestUser: {
    method: 'POST',
    url: '/updateContestUser',
    contract: { req: 'contest.updateContestUserReq', resp: null },
    csrf: true,
  },
  auditContestUser: {
    method: 'POST',
    url: '/auditContestUser',
    contract: { req: 'contest.auditContestUserReq', resp: null },
    csrf: true,
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
    csrf: true,
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
    csrf: true,
  },
  uploadJudgerData: {
    method: 'POST',
    url: '/uploadJudgerData',
    contract: { req: 'judger.uploadJudgerDataReq', resp: null },
    csrf: true,
  },
  getLanguageConfig: {
    method: 'POST',
    url: '/getLanguageConfig',
    contract: { req: null, resp: 'judger.getLanguageConfigResp' },
    competitionSide: true,
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
    csrf: true,
  },
  batchSendMessage: {
    method: 'POST',
    url: '/batchSendMessage',
    contract: { req: 'message.batchSendMessageReq', resp: null },
    csrf: true,
  },
  updateMessageRead: {
    method: 'POST',
    url: '/updateMessageRead',
    contract: { req: 'message.updateMessageReadReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  deleteFavorite: {
    method: 'POST',
    url: '/deleteFavorite',
    contract: { req: 'favorite.deleteFavoriteReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  deleteNote: {
    method: 'POST',
    url: '/deleteNote',
    contract: { req: 'note.deleteNoteReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  updateTopicDetail: {
    method: 'POST',
    url: '/updateTopicDetail',
    contract: { req: 'topic.updateTopicDetailReq', resp: null },
    csrf: true,
  },
  deleteTopic: {
    method: 'POST',
    url: '/deleteTopic',
    contract: { req: 'topic.deleteTopicReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  deleteReply: {
    method: 'POST',
    url: '/deleteReply',
    contract: { req: 'reply.deleteReplyReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  updatePostDetail: {
    method: 'POST',
    url: '/updatePostDetail',
    contract: { req: 'post.updatePostDetailReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  updateSetDetail: {
    method: 'POST',
    url: '/updateSetDetail',
    contract: { req: 'set.updateSetDetailReq', resp: null },
    csrf: true,
  },
  deleteSet: {
    method: 'POST',
    url: '/deleteSet',
    contract: { req: 'set.deleteSetReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  createEmptyGroup: {
    method: 'POST',
    url: '/createEmptyGroup',
    contract: { req: 'group.createEmptyGroupReq', resp: 'group.createEmptyGroupResp' },
    csrf: true,
  },
  updateGroupDetail: {
    method: 'POST',
    url: '/updateGroupDetail',
    contract: { req: 'group.updateGroupDetailReq', resp: null },
    csrf: true,
  },
  deleteGroup: {
    method: 'POST',
    url: '/deleteGroup',
    contract: { req: 'group.deleteGroupReq', resp: null },
    csrf: true,
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
    csrf: true,
  },
  batchAddGroupMembers: {
    method: 'POST',
    url: '/batchAddGroupMembers',
    contract: { req: 'group.batchAddGroupMembersReq', resp: null },
    csrf: true,
  },
  updateGroupMember: {
    method: 'POST',
    url: '/updateGroupMember',
    contract: { req: 'group.updateGroupMemberReq', resp: null },
    csrf: true,
  },
  deleteGroupMember: {
    method: 'POST',
    url: '/deleteGroupMember',
    contract: { req: 'group.deleteGroupMemberReq', resp: null },
    csrf: true,
  },
  exitGroup: {
    method: 'POST',
    url: '/exitGroup',
    contract: { req: 'group.exitGroupReq', resp: null },
    csrf: true,
  },
  // misc
  uploadMedia: {
    method: 'POST',
    url: '/uploadMedia',
    contract: { req: 'misc.uploadMediaReq', resp: 'misc.uploadMediaResp' },
    csrf: true,
  },
  uploadAsset: {
    method: 'POST',
    url: '/uploadAsset',
    contract: { req: 'misc.uploadAssetReq', resp: 'misc.uploadAssetResp' },
    csrf: true,
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
  // field
  getFieldList: {
    method: 'POST',
    url: '/getFieldList',
    contract: { req: 'field.getFieldListReq', resp: 'field.getFieldListResp' },
  },
  getFieldDetail: {
    method: 'POST',
    url: '/getFieldDetail',
    contract: { req: 'field.getFieldDetailReq', resp: 'field.getFieldDetailResp' },
  },
  createField: {
    method: 'POST',
    url: '/createField',
    contract: { req: 'field.createFieldReq', resp: 'field.createFieldResp' },
    csrf: true,
  },
  updateFieldDetail: {
    method: 'POST',
    url: '/updateFieldDetail',
    contract: { req: 'field.updateFieldDetailReq', resp: null },
    csrf: true,
  },
  deleteField: {
    method: 'POST',
    url: '/deleteField',
    contract: { req: 'field.deleteFieldReq', resp: null },
    csrf: true,
  },
  // competition
  getCompetitionList: {
    method: 'POST',
    url: '/getCompetitionList',
    contract: {
      req: 'competition.getCompetitionListReq',
      resp: 'competition.getCompetitionListResp',
    },
    competitionSide: true,
  },
  getCompetitionSession: {
    method: 'POST',
    url: '/getCompetitionSession',
    contract: {
      req: 'competition.getCompetitionSessionReq',
      resp: 'competition.getCompetitionSessionResp',
    },
    competitionSide: true,
  },
  loginCompetition: {
    method: 'POST',
    url: '/loginCompetition',
    contract: {
      req: 'competition.loginCompetitionReq',
      resp: 'competition.loginCompetitionResp',
    },
    csrf: true,
    competitionSide: true,
  },
  logoutCompetition: {
    method: 'POST',
    url: '/logoutCompetition',
    contract: {
      req: 'competition.logoutCompetitionReq',
      resp: null,
    },
    csrf: true,
    competitionSide: true,
  },
  getCompetitionDetail: {
    method: 'POST',
    url: '/getCompetitionDetail',
    contract: {
      req: 'competition.getCompetitionDetailReq',
      resp: 'competition.getCompetitionDetailResp',
    },
    competitionSide: true,
  },
  getCompetitionProblems: {
    method: 'POST',
    url: '/getCompetitionProblems',
    contract: {
      req: 'competition.getCompetitionProblemsReq',
      resp: 'competition.getCompetitionProblemsResp',
    },
    competitionSide: true,
  },
  createCompetition: {
    method: 'POST',
    url: '/createCompetition',
    contract: {
      req: 'competition.createCompetitionReq',
      resp: 'competition.createCompetitionResp',
    },
  },
  updateCompetitionDetail: {
    method: 'POST',
    url: '/updateCompetitionDetail',
    contract: {
      req: 'competition.updateCompetitionDetailReq',
      resp: null,
    },
  },
  getCompetitionProblemConfig: {
    method: 'POST',
    url: '/getCompetitionProblemConfig',
    contract: {
      req: 'competition.getCompetitionProblemConfigReq',
      resp: 'competition.getCompetitionProblemConfigResp',
    },
    competitionSide: true,
  },
  setCompetitionProblemConfig: {
    method: 'POST',
    url: '/setCompetitionProblemConfig',
    contract: {
      req: 'competition.setCompetitionProblemConfigReq',
      resp: null,
    },
  },
  batchCreateCompetitionUsers: {
    method: 'POST',
    url: '/batchCreateCompetitionUsers',
    contract: {
      req: 'competition.batchCreateCompetitionUsersReq',
      resp: null,
    },
    csrf: true,
  },
  createCompetitionUser: {
    method: 'POST',
    url: '/createCompetitionUser',
    contract: {
      req: 'competition.createCompetitionUserReq',
      resp: null,
    },
    csrf: true,
  },
  updateCompetitionUser: {
    method: 'POST',
    url: '/updateCompetitionUser',
    contract: {
      req: 'competition.updateCompetitionUserReq',
      resp: null,
    },
    csrf: true,
  },
  getCompetitionUsers: {
    method: 'POST',
    url: '/getCompetitionUsers',
    contract: {
      req: 'competition.getCompetitionUsersReq',
      resp: 'competition.getCompetitionUsersResp',
    },
    competitionSide: true,
  },
  getCompetitionUserDetail: {
    method: 'POST',
    url: '/getCompetitionUserDetail',
    contract: {
      req: 'competition.getCompetitionUserDetailReq',
      resp: 'competition.getCompetitionUserDetailResp',
    },
    competitionSide: true,
  },
  getSelfCompetitionUserDetail: {
    method: 'POST',
    url: '/getSelfCompetitionUserDetail',
    contract: {
      req: 'competition.getSelfCompetitionUserDetailReq',
      resp: 'competition.getSelfCompetitionUserDetailResp',
    },
    competitionSide: true,
  },
  getPublicCompetitionParticipants: {
    method: 'POST',
    url: '/getPublicCompetitionParticipants',
    contract: {
      req: 'competition.getPublicCompetitionParticipantsReq',
      resp: 'competition.getPublicCompetitionParticipantsResp',
    },
    competitionSide: true,
  },
  getPublicCompetitionParticipantDetail: {
    method: 'POST',
    url: '/getPublicCompetitionParticipantDetail',
    contract: {
      req: 'competition.getPublicCompetitionParticipantDetailReq',
      resp: 'competition.getPublicCompetitionParticipantDetailResp',
    },
    competitionSide: true,
  },
  requestCompetitionParticipantPassword: {
    method: 'POST',
    url: '/requestCompetitionParticipantPassword',
    contract: {
      req: 'competition.requestCompetitionParticipantPasswordReq',
      resp: 'competition.requestCompetitionParticipantPasswordResp',
    },
    csrf: true,
  },
  randomAllCompetitionUserPasswords: {
    method: 'POST',
    url: '/randomAllCompetitionUserPasswords',
    contract: {
      req: 'competition.randomAllCompetitionUserPasswordsReq',
      resp: null,
    },
    csrf: true,
  },
  getSignedUpCompetitionParticipant: {
    method: 'POST',
    url: '/getSignedUpCompetitionParticipant',
    contract: {
      req: 'competition.getSignedUpCompetitionParticipantReq',
      resp: 'competition.getSignedUpCompetitionParticipantResp',
    },
  },
  signUpCompetitionParticipant: {
    method: 'POST',
    url: '/signUpCompetitionParticipant',
    contract: {
      req: 'competition.signUpCompetitionParticipantReq',
      resp: null,
    },
    csrf: true,
  },
  modifySignedUpCompetitionParticipant: {
    method: 'POST',
    url: '/modifySignedUpCompetitionParticipant',
    contract: {
      req: 'competition.modifySignedUpCompetitionParticipantReq',
      resp: null,
    },
    csrf: true,
  },
  auditCompetitionParticipant: {
    method: 'POST',
    url: '/auditCompetitionParticipant',
    contract: {
      req: 'competition.auditCompetitionParticipantReq',
      resp: null,
    },
    csrf: true,
  },
  confirmEnterCompetition: {
    method: 'POST',
    url: '/confirmEnterCompetition',
    contract: {
      req: 'competition.confirmEnterCompetitionReq',
      resp: null,
    },
    csrf: true,
    competitionSide: true,
  },
  confirmQuitCompetition: {
    method: 'POST',
    url: '/confirmQuitCompetition',
    contract: {
      req: 'competition.confirmQuitCompetitionReq',
      resp: null,
    },
    csrf: true,
    competitionSide: true,
  },
  getCompetitionProblemSolutionStats: {
    method: 'POST',
    url: '/getCompetitionProblemSolutionStats',
    contract: {
      req: 'competition.getCompetitionProblemSolutionStatsReq',
      resp: 'competition.getCompetitionProblemSolutionStatsResp',
    },
    competitionSide: true,
  },
  getCompetitionSettings: {
    method: 'POST',
    url: '/getCompetitionSettings',
    contract: {
      req: 'competition.getCompetitionSettingsReq',
      resp: 'competition.getCompetitionSettingsResp',
    },
    competitionSide: true,
  },
  updateCompetitionSettings: {
    method: 'POST',
    url: '/updateCompetitionSettings',
    contract: {
      req: 'competition.updateCompetitionSettingsReq',
      resp: null,
    },
    csrf: true,
  },
  getCompetitionNotifications: {
    method: 'POST',
    url: '/getCompetitionNotifications',
    contract: {
      req: 'competition.getCompetitionNotificationsReq',
      resp: 'competition.getCompetitionNotificationsResp',
    },
    competitionSide: true,
  },
  createCompetitionNotification: {
    method: 'POST',
    url: '/createCompetitionNotification',
    contract: {
      req: 'competition.createCompetitionNotificationReq',
      resp: null,
    },
    csrf: true,
  },
  deleteCompetitionNotification: {
    method: 'POST',
    url: '/deleteCompetitionNotification',
    contract: {
      req: 'competition.deleteCompetitionNotificationReq',
      resp: null,
    },
    csrf: true,
  },
  getCompetitionQuestions: {
    method: 'POST',
    url: '/getCompetitionQuestions',
    contract: {
      req: 'competition.getCompetitionQuestionsReq',
      resp: 'competition.getCompetitionQuestionsResp',
    },
  },
  getSelfCompetitionQuestions: {
    method: 'POST',
    url: '/getSelfCompetitionQuestions',
    contract: {
      req: 'competition.getSelfCompetitionQuestionsReq',
      resp: 'competition.getSelfCompetitionQuestionsResp',
    },
    competitionSide: true,
  },
  createCompetitionQuestion: {
    method: 'POST',
    url: '/createCompetitionQuestion',
    contract: {
      req: 'competition.createCompetitionQuestionReq',
      resp: null,
    },
    csrf: true,
    competitionSide: true,
  },
  replyCompetitionQuestion: {
    method: 'POST',
    url: '/replyCompetitionQuestion',
    contract: {
      req: 'competition.replyCompetitionQuestionReq',
      resp: null,
    },
    csrf: true,
  },
  endCompetition: {
    method: 'POST',
    url: '/endCompetition',
    contract: {
      req: 'competition.endCompetitionReq',
      resp: null,
    },
    csrf: true,
  },
  getCompetitionRanklist: {
    method: 'POST',
    url: '/getCompetitionRanklist',
    contract: {
      req: 'competition.getCompetitionRanklistReq',
      resp: 'competition.getCompetitionRanklistResp',
    },
    competitionSide: true,
  },
  getCompetitionRatingStatus: {
    method: 'POST',
    url: '/getCompetitionRatingStatus',
    contract: {
      req: 'competition.getCompetitionRatingStatusReq',
      resp: 'competition.getCompetitionRatingStatusResp',
    },
    competitionSide: true,
  },
  getAllCompetitionSolutionsForSrkLite: {
    method: 'POST',
    url: '/getAllCompetitionSolutionsForSrkLite',
    contract: {
      req: 'competition.getAllCompetitionSolutionsForSrkLiteReq',
      resp: null,
    },
    competitionSide: true,
  },
  // balloon
  getCompetitionBalloons: {
    method: 'POST',
    url: '/getCompetitionBalloons',
    contract: {
      req: 'balloon.getCompetitionBalloonsReq',
      resp: 'balloon.getCompetitionBalloonsResp',
    },
  },
  updateCompetitionBalloonStatus: {
    method: 'POST',
    url: '/updateCompetitionBalloonStatus',
    contract: {
      req: 'balloon.updateCompetitionBalloonStatusReq',
      resp: null,
    },
    csrf: true,
  },
};

Object.keys(_routesBe).forEach((key) => {
  // @ts-ignore
  _routesBe[key].i = key;
});

export const routesBe = _routesBe as Record<keyof typeof _routesBe, IRouteBeConfig>;
