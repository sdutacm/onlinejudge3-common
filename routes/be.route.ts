export interface IRouteBeConfigItem {
  i: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  description?: string;
  contract: {
    req: string | null;
    resp: string | null;
  };
  csrf?: boolean;
  competitionSide?: boolean;
  private?: true;
}

export interface IRouteBeConfig extends IRouteBeConfigItem {
  module: string;
}

export interface IRouteBeConfigModule {
  module: string;
  routes: IRouteBeConfigItem[];
}

export const routeBeModules: IRouteBeConfigModule[] = [
  {
    module: 'user',
    routes: [
      {
        i: 'getSession',
        method: 'GET',
        url: '/getSession',
        description: '获取当前用户 Session。如未登录，返回 null',
        contract: { req: null, resp: 'user.getSessionResp' },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'login',
        method: 'POST',
        url: '/login',
        description: '登录',
        contract: { req: 'user.loginReq', resp: 'user.loginResp' },
        csrf: true,
      },
      {
        i: 'logout',
        method: 'POST',
        url: '/logout',
        description: '登出',
        contract: { req: null, resp: null },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'register',
        method: 'POST',
        url: '/register',
        description: '注册用户',
        contract: { req: 'user.registerReq', resp: 'user.registerResp' },
        csrf: true,
      },
      {
        i: 'createUser',
        method: 'POST',
        url: '/createUser',
        description: '管理员创建用户',
        contract: { req: 'user.createUserReq', resp: 'user.createUserResp' },
        csrf: true,
      },
      {
        i: 'batchCreateUsers',
        method: 'POST',
        url: '/batchCreateUsers',
        description: '管理员批量创建用户',
        contract: { req: 'user.batchCreateUsersReq', resp: null },
        csrf: true,
      },
      {
        i: 'getUserList',
        method: 'POST',
        url: '/getUserList',
        contract: { req: 'user.getUserListReq', resp: 'user.getUserListResp' },
      },
      {
        i: 'getUserDetail',
        method: 'POST',
        url: '/getUserDetail',
        contract: { req: 'user.getUserDetailReq', resp: 'user.getUserDetailResp' },
        competitionSide: true,
      },
      {
        i: 'updateUserDetail',
        method: 'POST',
        url: '/updateUserDetail',
        contract: { req: 'user.updateUserDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'updateUserPassword',
        method: 'POST',
        url: '/updateUserPassword',
        contract: { req: 'user.updateUserPasswordReq', resp: null },
        csrf: true,
      },
      {
        i: 'resetUserPassword',
        method: 'POST',
        url: '/resetUserPassword',
        contract: { req: 'user.resetUserPasswordReq', resp: null },
        csrf: true,
      },
      {
        i: 'resetUserPasswordAndEmail',
        method: 'POST',
        url: '/resetUserPasswordAndEmail',
        contract: { req: 'user.resetUserPasswordAndEmailReq', resp: null },
        csrf: true,
      },
      {
        i: 'resetUserPasswordByAdmin',
        method: 'POST',
        url: '/resetUserPasswordByAdmin',
        contract: { req: 'user.resetUserPasswordByAdminReq', resp: null },
        csrf: true,
      },
      {
        i: 'updateUserEmail',
        method: 'POST',
        url: '/updateUserEmail',
        contract: { req: 'user.updateUserEmailReq', resp: null },
        csrf: true,
      },
      {
        i: 'uploadUserAvatar',
        method: 'POST',
        url: '/uploadUserAvatar',
        contract: { req: 'user.uploadUserAvatarReq', resp: null },
        csrf: true,
      },
      {
        i: 'uploadUserBannerImage',
        method: 'POST',
        url: '/uploadUserBannerImage',
        contract: { req: 'user.uploadUserBannerImageReq', resp: null },
        csrf: true,
      },
      {
        i: 'getUserProblemResultStats',
        method: 'POST',
        url: '/getUserProblemResultStats',
        description: '获取指定用户的 AC/Attempted 题目列表，可额外指定比赛 ID 筛选',
        contract: {
          req: 'user.getUserProblemResultStatsReq',
          resp: 'user.getUserProblemResultStatsResp',
        },
        competitionSide: true,
      },
      {
        i: 'getUserSolutionCalendar',
        method: 'POST',
        url: '/getUserSolutionCalendar',
        contract: {
          req: 'user.getUserSolutionCalendarReq',
          resp: 'user.getUserSolutionCalendarResp',
        },
      },
      {
        i: 'getSessionList',
        method: 'POST',
        url: '/getSessionList',
        contract: { req: null, resp: 'user.getSessionListResp' },
      },
      {
        i: 'clearSession',
        method: 'POST',
        url: '/clearSession',
        contract: { req: 'user.clearSessionReq', resp: null },
        csrf: true,
      },
      {
        i: 'getActiveUserCount',
        method: 'POST',
        url: '/getActiveUserCount',
        contract: { req: null, resp: 'user.getActiveUserCountResp' },
        competitionSide: true,
      },
      {
        i: 'getAllUserPermissionsMap',
        method: 'POST',
        url: '/getAllUserPermissionsMap',
        contract: { req: null, resp: 'user.getAllUserPermissionsMapResp' },
      },
      {
        i: 'setUserPermissions',
        method: 'POST',
        url: '/setUserPermissions',
        contract: { req: 'user.setUserPermissionsReq', resp: null },
        csrf: true,
      },
      {
        i: 'getSelfAchievedAchievements',
        method: 'POST',
        url: '/getSelfAchievedAchievements',
        contract: { req: null, resp: 'user.getSelfAchievedAchievementsResp' },
        competitionSide: true,
      },
      {
        i: 'confirmAchievementDeliveried',
        method: 'POST',
        url: '/confirmAchievementDeliveried',
        contract: { req: 'user.confirmAchievementDeliveriedReq', resp: null },
        competitionSide: true,
      },
      {
        i: 'receiveAchievement',
        method: 'POST',
        url: '/receiveAchievement',
        contract: { req: 'user.receiveAchievementReq', resp: null },
        competitionSide: true,
      },
      {
        i: 'getSelfOfficialMembers',
        method: 'POST',
        url: '/getSelfOfficialMembers',
        contract: { req: null, resp: 'user.getSelfOfficialMembersResp' },
        competitionSide: true,
      },
      {
        i: 'getUserMembers',
        method: 'POST',
        url: '/getUserMembers',
        contract: { req: 'user.getUserMembersReq', resp: 'user.getUserMembersResp' },
        competitionSide: true,
      },
      {
        i: 'addUserMember',
        method: 'POST',
        url: '/addUserMember',
        contract: { req: 'user.addUserMemberReq', resp: null },
        competitionSide: true,
      },
      {
        i: 'removeUserMember',
        method: 'POST',
        url: '/removeUserMember',
        contract: { req: 'user.removeUserMemberReq', resp: null },
        competitionSide: true,
      },
      {
        i: 'getSelfJoinedTeams',
        method: 'POST',
        url: '/getSelfJoinedTeams',
        contract: { req: null, resp: 'user.getSelfJoinedTeamsResp' },
        competitionSide: true,
      },
      {
        i: 'confirmJoinTeam',
        method: 'POST',
        url: '/confirmJoinTeam',
        contract: { req: 'user.confirmJoinTeamReq', resp: null },
        competitionSide: true,
      },
      {
        i: 'confirmTeamSettlement',
        method: 'POST',
        url: '/confirmTeamSettlement',
        contract: { req: null, resp: null },
        competitionSide: true,
      },
      {
        i: 'getSelfStaticObject',
        method: 'POST',
        url: '/getSelfStaticObject',
        contract: { req: 'user.getSelfStaticObjectReq', resp: 'user.getSelfStaticObjectResp' },
        competitionSide: true,
      },
    ],
  },
  {
    module: 'verification',
    routes: [
      {
        i: 'sendEmailVerification',
        method: 'POST',
        url: '/sendEmailVerification',
        contract: {
          req: 'verification.sendEmailVerificationReq',
          resp: 'verification.sendEmailVerificationResp',
        },
        csrf: true,
      },
    ],
  },
  {
    module: 'problem',
    routes: [
      {
        i: 'getProblemList',
        method: 'POST',
        url: '/getProblemList',
        contract: { req: 'problem.getProblemListReq', resp: 'problem.getProblemListResp' },
      },
      {
        i: 'getProblemDetail',
        method: 'POST',
        url: '/getProblemDetail',
        contract: { req: 'problem.getProblemDetailReq', resp: 'problem.getProblemDetailResp' },
      },
      {
        i: 'createProblem',
        method: 'POST',
        url: '/createProblem',
        contract: { req: 'problem.createProblemReq', resp: 'problem.createProblemResp' },
        csrf: true,
      },
      {
        i: 'updateProblemDetail',
        method: 'POST',
        url: '/updateProblemDetail',
        contract: { req: 'problem.updateProblemDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'setProblemTags',
        method: 'POST',
        url: '/setProblemTags',
        contract: { req: 'problem.setProblemTagsReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'tag',
    routes: [
      {
        i: 'getTagFullList',
        method: 'POST',
        url: '/getTagFullList',
        contract: { req: 'tag.getTagFullListReq', resp: 'tag.getTagFullListResp' },
        competitionSide: true,
      },
      {
        i: 'createTag',
        method: 'POST',
        url: '/createTag',
        contract: { req: 'tag.createTagReq', resp: 'tag.createTagResp' },
        csrf: true,
      },
      {
        i: 'updateTagDetail',
        method: 'POST',
        url: '/updateTagDetail',
        contract: { req: 'tag.updateTagDetailReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'solution',
    routes: [
      {
        i: 'getSolutionList',
        method: 'POST',
        url: '/getSolutionList',
        contract: { req: 'solution.getSolutionListReq', resp: 'solution.getSolutionListResp' },
        competitionSide: true,
      },
      {
        i: 'getSolutionDetail',
        method: 'POST',
        url: '/getSolutionDetail',
        contract: { req: 'solution.getSolutionDetailReq', resp: 'solution.getSolutionDetailResp' },
        competitionSide: true,
      },
      {
        i: 'batchGetSolutionDetail',
        method: 'POST',
        url: '/batchGetSolutionDetail',
        contract: {
          req: 'solution.batchGetSolutionDetailReq',
          resp: 'solution.batchGetSolutionDetailResp',
        },
        competitionSide: true,
      },
      {
        i: 'updateSolutionShare',
        method: 'POST',
        url: '/updateSolutionShare',
        contract: { req: 'solution.updateSolutionShareReq', resp: null },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'submitSolution',
        method: 'POST',
        url: '/submitSolution',
        contract: { req: 'solution.submitSolutionReq', resp: 'solution.submitSolutionResp' },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'rejudgeSolution',
        method: 'POST',
        url: '/rejudgeSolution',
        contract: { req: 'solution.rejudgeSolutionReq', resp: null },
        csrf: true,
      },
      {
        i: 'callbackJudge',
        method: 'POST',
        url: '/callbackJudge',
        contract: {
          req: 'solution.callbackJudgeReq',
          resp: null,
        },
        competitionSide: true,
        private: true,
      },
    ],
  },
  {
    module: 'contest',
    routes: [
      {
        i: 'getContestList',
        method: 'POST',
        url: '/getContestList',
        contract: { req: 'contest.getContestListReq', resp: 'contest.getContestListResp' },
      },
      {
        i: 'getContestSession',
        method: 'POST',
        url: '/getContestSession',
        contract: { req: 'contest.getContestSessionReq', resp: 'contest.getContestSessionResp' },
      },
      {
        i: 'requestContestSession',
        method: 'POST',
        url: '/requestContestSession',
        contract: {
          req: 'contest.requestContestSessionReq',
          resp: 'contest.requestContestSessionResp',
        },
        csrf: true,
      },
      {
        i: 'logoutContest',
        method: 'POST',
        url: '/logoutContest',
        contract: { req: 'contest.logoutContestReq', resp: null },
        csrf: true,
      },
      {
        i: 'getContestDetail',
        method: 'POST',
        url: '/getContestDetail',
        contract: { req: 'contest.getContestDetailReq', resp: 'contest.getContestDetailResp' },
      },
      {
        i: 'createContest',
        method: 'POST',
        url: '/createContest',
        contract: { req: 'contest.createContestReq', resp: 'contest.createContestResp' },
        csrf: true,
      },
      {
        i: 'updateContestDetail',
        method: 'POST',
        url: '/updateContestDetail',
        contract: { req: 'contest.updateContestDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'getContestProblems',
        method: 'POST',
        url: '/getContestProblems',
        contract: { req: 'contest.getContestProblemsReq', resp: 'contest.getContestProblemsResp' },
      },
      {
        i: 'getContestProblemConfig',
        method: 'POST',
        url: '/getContestProblemConfig',
        contract: {
          req: 'contest.getContestProblemConfigReq',
          resp: 'contest.getContestProblemConfigResp',
        },
      },
      {
        i: 'setContestProblemConfig',
        method: 'POST',
        url: '/setContestProblemConfig',
        contract: { req: 'contest.setContestProblemConfigReq', resp: null },
        csrf: true,
      },
      {
        i: 'getContestUserList',
        method: 'POST',
        url: '/getContestUserList',
        contract: { req: 'contest.getContestUserListReq', resp: 'contest.getContestUserListResp' },
      },
      {
        i: 'getContestUsers',
        method: 'POST',
        url: '/getContestUsers',
        contract: { req: 'contest.getContestUsersReq', resp: 'contest.getContestUsersResp' },
      },
      {
        i: 'getContestUserDetail',
        method: 'POST',
        url: '/getContestUserDetail',
        contract: {
          req: 'contest.getContestUserDetailReq',
          resp: 'contest.getContestUserDetailResp',
        },
      },
      {
        i: 'createContestUser',
        method: 'POST',
        url: '/createContestUser',
        contract: { req: 'contest.createContestUserReq', resp: 'contest.createContestUserResp' },
        csrf: true,
      },
      {
        i: 'batchCreateContestUsers',
        method: 'POST',
        url: '/batchCreateContestUsers',
        contract: { req: 'contest.batchCreateContestUsersReq', resp: null },
        csrf: true,
      },
      {
        i: 'updateContestUser',
        method: 'POST',
        url: '/updateContestUser',
        contract: { req: 'contest.updateContestUserReq', resp: null },
        csrf: true,
      },
      {
        i: 'auditContestUser',
        method: 'POST',
        url: '/auditContestUser',
        contract: { req: 'contest.auditContestUserReq', resp: null },
        csrf: true,
      },
      {
        i: 'getContestProblemSolutionStats',
        method: 'POST',
        url: '/getContestProblemSolutionStats',
        contract: {
          req: 'contest.getContestProblemSolutionStatsReq',
          resp: 'contest.getContestProblemSolutionStatsResp',
        },
      },
      {
        i: 'getContestRanklist',
        method: 'POST',
        url: '/getContestRanklist',
        contract: { req: 'contest.getContestRanklistReq', resp: 'contest.getContestRanklistResp' },
      },
      {
        i: 'getContestRatingStatus',
        method: 'POST',
        url: '/getContestRatingStatus',
        contract: {
          req: 'contest.getContestRatingStatusReq',
          resp: 'contest.getContestRatingStatusResp',
        },
      },
      {
        i: 'endContest',
        method: 'POST',
        url: '/endContest',
        contract: {
          req: 'contest.endContestReq',
          resp: null,
        },
        csrf: true,
      },
    ],
  },
  {
    module: 'judger',
    routes: [
      {
        i: 'getJudgerDataFile',
        method: 'POST',
        url: '/getJudgerDataFile',
        contract: { req: 'judger.getJudgerDataFileReq', resp: 'judger.getJudgerDataFileResp' },
      },
      {
        i: 'getJudgerDataArchive',
        method: 'POST',
        url: '/getJudgerDataArchive',
        contract: { req: 'judger.getJudgerDataArchiveReq', resp: null },
      },
      {
        i: 'prepareJudgerDataUpdate',
        method: 'POST',
        url: '/prepareJudgerDataUpdate',
        contract: { req: null, resp: null },
        csrf: true,
      },
      {
        i: 'uploadJudgerData',
        method: 'POST',
        url: '/uploadJudgerData',
        contract: { req: 'judger.uploadJudgerDataReq', resp: null },
        csrf: true,
      },
      {
        i: 'getLanguageConfig',
        method: 'POST',
        url: '/getLanguageConfig',
        contract: { req: null, resp: 'judger.getLanguageConfigResp' },
        competitionSide: true,
      },
    ],
  },
  {
    module: 'message',
    routes: [
      {
        i: 'getMessageList',
        method: 'POST',
        url: '/getMessageList',
        contract: { req: 'message.getMessageListReq', resp: 'message.getMessageListResp' },
      },
      {
        i: 'sendMessage',
        method: 'POST',
        url: '/sendMessage',
        contract: { req: 'message.sendMessageReq', resp: null },
        csrf: true,
      },
      {
        i: 'batchSendMessage',
        method: 'POST',
        url: '/batchSendMessage',
        contract: { req: 'message.batchSendMessageReq', resp: null },
        csrf: true,
      },
      {
        i: 'updateMessageRead',
        method: 'POST',
        url: '/updateMessageRead',
        contract: { req: 'message.updateMessageReadReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'favorite',
    routes: [
      {
        i: 'getFavoriteList',
        method: 'POST',
        url: '/getFavoriteList',
        contract: { req: 'favorite.getFavoriteListReq', resp: 'favorite.getFavoriteListResp' },
      },
      {
        i: 'addFavorite',
        method: 'POST',
        url: '/addFavorite',
        contract: { req: 'favorite.addFavoriteReq', resp: 'favorite.addFavoriteResp' },
        csrf: true,
      },
      {
        i: 'deleteFavorite',
        method: 'POST',
        url: '/deleteFavorite',
        contract: { req: 'favorite.deleteFavoriteReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'note',
    routes: [
      {
        i: 'getNoteList',
        method: 'POST',
        url: '/getNoteList',
        contract: { req: 'note.getNoteListReq', resp: 'note.getNoteListResp' },
      },
      {
        i: 'addNote',
        method: 'POST',
        url: '/addNote',
        contract: { req: 'note.addNoteReq', resp: 'note.addNoteResp' },
        csrf: true,
      },
      {
        i: 'deleteNote',
        method: 'POST',
        url: '/deleteNote',
        contract: { req: 'note.deleteNoteReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'topic',
    routes: [
      {
        i: 'getTopicList',
        method: 'POST',
        url: '/getTopicList',
        contract: { req: 'topic.getTopicListReq', resp: 'topic.getTopicListResp' },
      },
      {
        i: 'getTopicDetail',
        method: 'POST',
        url: '/getTopicDetail',
        contract: { req: 'topic.getTopicDetailReq', resp: 'topic.getTopicDetailResp' },
      },
      {
        i: 'createTopic',
        method: 'POST',
        url: '/createTopic',
        contract: { req: 'topic.createTopicReq', resp: 'topic.createTopicResp' },
        csrf: true,
      },
      {
        i: 'updateTopicDetail',
        method: 'POST',
        url: '/updateTopicDetail',
        contract: { req: 'topic.updateTopicDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'deleteTopic',
        method: 'POST',
        url: '/deleteTopic',
        contract: { req: 'topic.deleteTopicReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'reply',
    routes: [
      {
        i: 'getReplyList',
        method: 'POST',
        url: '/getReplyList',
        contract: { req: 'reply.getReplyListReq', resp: 'reply.getReplyListResp' },
      },
      {
        i: 'createReply',
        method: 'POST',
        url: '/createReply',
        contract: { req: 'reply.createReplyReq', resp: 'reply.createReplyResp' },
        csrf: true,
      },
      {
        i: 'deleteReply',
        method: 'POST',
        url: '/deleteReply',
        contract: { req: 'reply.deleteReplyReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'post',
    routes: [
      {
        i: 'getPostList',
        method: 'POST',
        url: '/getPostList',
        contract: { req: 'post.getPostListReq', resp: 'post.getPostListResp' },
      },
      {
        i: 'getPostDetail',
        method: 'POST',
        url: '/getPostDetail',
        contract: { req: 'post.getPostDetailReq', resp: 'post.getPostDetailResp' },
      },
      {
        i: 'createPost',
        method: 'POST',
        url: '/createPost',
        contract: { req: 'post.createPostReq', resp: 'post.createPostResp' },
        csrf: true,
      },
      {
        i: 'updatePostDetail',
        method: 'POST',
        url: '/updatePostDetail',
        contract: { req: 'post.updatePostDetailReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'set',
    routes: [
      {
        i: 'getSetList',
        method: 'POST',
        url: '/getSetList',
        contract: { req: 'set.getSetListReq', resp: 'set.getSetListResp' },
      },
      {
        i: 'getSetDetail',
        method: 'POST',
        url: '/getSetDetail',
        contract: { req: 'set.getSetDetailReq', resp: 'set.getSetDetailResp' },
      },
      {
        i: 'createSet',
        method: 'POST',
        url: '/createSet',
        contract: { req: 'set.createSetReq', resp: 'set.createSetResp' },
        csrf: true,
      },
      {
        i: 'updateSetDetail',
        method: 'POST',
        url: '/updateSetDetail',
        contract: { req: 'set.updateSetDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'deleteSet',
        method: 'POST',
        url: '/deleteSet',
        contract: { req: 'set.deleteSetReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'group',
    routes: [
      {
        i: 'getGroupList',
        method: 'POST',
        url: '/getGroupList',
        contract: { req: 'group.getGroupListReq', resp: 'group.getGroupListResp' },
      },
      {
        i: 'getGroupDetail',
        method: 'POST',
        url: '/getGroupDetail',
        contract: { req: 'group.getGroupDetailReq', resp: 'group.getGroupDetailResp' },
      },
      {
        i: 'getUserGroups',
        method: 'POST',
        url: '/getUserGroups',
        contract: { req: 'group.getUserGroupsReq', resp: 'group.getUserGroupsResp' },
      },
      {
        i: 'createGroup',
        method: 'POST',
        url: '/createGroup',
        contract: { req: 'group.createGroupReq', resp: 'group.createGroupResp' },
        csrf: true,
      },
      {
        i: 'createEmptyGroup',
        method: 'POST',
        url: '/createEmptyGroup',
        contract: { req: 'group.createEmptyGroupReq', resp: 'group.createEmptyGroupResp' },
        csrf: true,
      },
      {
        i: 'updateGroupDetail',
        method: 'POST',
        url: '/updateGroupDetail',
        contract: { req: 'group.updateGroupDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'deleteGroup',
        method: 'POST',
        url: '/deleteGroup',
        contract: { req: 'group.deleteGroupReq', resp: null },
        csrf: true,
      },
      {
        i: 'getGroupMemberList',
        method: 'POST',
        url: '/getGroupMemberList',
        contract: { req: 'group.getGroupMemberListReq', resp: 'group.getGroupMemberListResp' },
      },
      {
        i: 'joinGroup',
        method: 'POST',
        url: '/joinGroup',
        contract: { req: 'group.joinGroupReq', resp: null },
        csrf: true,
      },
      {
        i: 'batchAddGroupMembers',
        method: 'POST',
        url: '/batchAddGroupMembers',
        contract: { req: 'group.batchAddGroupMembersReq', resp: null },
        csrf: true,
      },
      {
        i: 'updateGroupMember',
        method: 'POST',
        url: '/updateGroupMember',
        contract: { req: 'group.updateGroupMemberReq', resp: null },
        csrf: true,
      },
      {
        i: 'deleteGroupMember',
        method: 'POST',
        url: '/deleteGroupMember',
        contract: { req: 'group.deleteGroupMemberReq', resp: null },
        csrf: true,
      },
      {
        i: 'exitGroup',
        method: 'POST',
        url: '/exitGroup',
        contract: { req: 'group.exitGroupReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'misc',
    routes: [
      {
        i: 'uploadMedia',
        method: 'POST',
        url: '/uploadMedia',
        contract: { req: 'misc.uploadMediaReq', resp: 'misc.uploadMediaResp' },
        csrf: true,
      },
      {
        i: 'uploadAsset',
        method: 'POST',
        url: '/uploadAsset',
        contract: { req: 'misc.uploadAssetReq', resp: 'misc.uploadAssetResp' },
        csrf: true,
      },
      {
        i: 'getStaticObject',
        method: 'POST',
        url: '/getStaticObject',
        contract: { req: 'misc.getStaticObjectReq', resp: 'misc.getStaticObjectResp' },
        competitionSide: true,
      },
    ],
  },
  {
    module: 'stat',
    routes: [
      {
        i: 'getUserACRank',
        method: 'POST',
        url: '/getUserACRank',
        contract: { req: 'stat.getUserACRankReq', resp: 'stat.getUserACRankResp' },
      },
      {
        i: 'getUserAcceptedProblems',
        method: 'POST',
        url: '/getUserAcceptedProblems',
        contract: {
          req: 'stat.getUserAcceptedProblemsReq',
          resp: 'stat.getUserAcceptedProblemsResp',
        },
      },
      {
        i: 'getUserSubmittedProblems',
        method: 'POST',
        url: '/getUserSubmittedProblems',
        contract: {
          req: 'stat.getUserSubmittedProblemsReq',
          resp: 'stat.getUserSubmittedProblemsResp',
        },
      },
      {
        i: 'getJudgeQueueStats',
        method: 'POST',
        url: '/getJudgeQueueStats',
        contract: {
          req: null,
          resp: 'stat.getJudgeQueueStatsResp',
        },
      },
    ],
  },
  {
    module: 'field',
    routes: [
      {
        i: 'getFieldList',
        method: 'POST',
        url: '/getFieldList',
        contract: { req: 'field.getFieldListReq', resp: 'field.getFieldListResp' },
      },
      {
        i: 'getFieldDetail',
        method: 'POST',
        url: '/getFieldDetail',
        contract: { req: 'field.getFieldDetailReq', resp: 'field.getFieldDetailResp' },
      },
      {
        i: 'createField',
        method: 'POST',
        url: '/createField',
        contract: { req: 'field.createFieldReq', resp: 'field.createFieldResp' },
        csrf: true,
      },
      {
        i: 'updateFieldDetail',
        method: 'POST',
        url: '/updateFieldDetail',
        contract: { req: 'field.updateFieldDetailReq', resp: null },
        csrf: true,
      },
      {
        i: 'deleteField',
        method: 'POST',
        url: '/deleteField',
        contract: { req: 'field.deleteFieldReq', resp: null },
        csrf: true,
      },
    ],
  },
  {
    module: 'competition',
    routes: [
      {
        i: 'getCompetitionList',
        method: 'POST',
        url: '/getCompetitionList',
        contract: {
          req: 'competition.getCompetitionListReq',
          resp: 'competition.getCompetitionListResp',
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionSession',
        method: 'POST',
        url: '/getCompetitionSession',
        description:
          '获取指定比赛 Session。如可通过全局 Session 自动换取比赛 Session，则自动登录，否则返回 null',
        contract: {
          req: 'competition.getCompetitionSessionReq',
          resp: 'competition.getCompetitionSessionResp',
        },
        competitionSide: true,
      },
      {
        i: 'loginCompetition',
        method: 'POST',
        url: '/loginCompetition',
        description: '登录指定比赛',
        contract: {
          req: 'competition.loginCompetitionReq',
          resp: 'competition.loginCompetitionResp',
        },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'logoutCompetition',
        method: 'POST',
        url: '/logoutCompetition',
        description: '登出指定比赛',
        contract: {
          req: 'competition.logoutCompetitionReq',
          resp: null,
        },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'getCompetitionDetail',
        method: 'POST',
        url: '/getCompetitionDetail',
        description: '获取指定比赛详情',
        contract: {
          req: 'competition.getCompetitionDetailReq',
          resp: 'competition.getCompetitionDetailResp',
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionProblems',
        method: 'POST',
        url: '/getCompetitionProblems',
        description: '获取指定比赛题目列表',
        contract: {
          req: 'competition.getCompetitionProblemsReq',
          resp: 'competition.getCompetitionProblemsResp',
        },
        competitionSide: true,
      },
      {
        i: 'createCompetition',
        method: 'POST',
        url: '/createCompetition',
        contract: {
          req: 'competition.createCompetitionReq',
          resp: 'competition.createCompetitionResp',
        },
      },
      {
        i: 'updateCompetitionDetail',
        method: 'POST',
        url: '/updateCompetitionDetail',
        contract: {
          req: 'competition.updateCompetitionDetailReq',
          resp: null,
        },
      },
      {
        i: 'getCompetitionProblemConfig',
        method: 'POST',
        url: '/getCompetitionProblemConfig',
        description: '获取指定比赛题目配置。需要裁判或更高权限',
        contract: {
          req: 'competition.getCompetitionProblemConfigReq',
          resp: 'competition.getCompetitionProblemConfigResp',
        },
        competitionSide: true,
      },
      {
        i: 'setCompetitionProblemConfig',
        method: 'POST',
        url: '/setCompetitionProblemConfig',
        description: '更新指定比赛题目配置。需要负责人或更高权限',
        contract: {
          req: 'competition.setCompetitionProblemConfigReq',
          resp: null,
        },
      },
      {
        i: 'batchCreateCompetitionUsers',
        method: 'POST',
        url: '/batchCreateCompetitionUsers',
        contract: {
          req: 'competition.batchCreateCompetitionUsersReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'createCompetitionUser',
        method: 'POST',
        url: '/createCompetitionUser',
        contract: {
          req: 'competition.createCompetitionUserReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'updateCompetitionUser',
        method: 'POST',
        url: '/updateCompetitionUser',
        contract: {
          req: 'competition.updateCompetitionUserReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'getCompetitionUsers',
        method: 'POST',
        url: '/getCompetitionUsers',
        description: '获取指定比赛全部用户（包括各种状态）。需要审核员、负责人或更高权限',
        contract: {
          req: 'competition.getCompetitionUsersReq',
          resp: 'competition.getCompetitionUsersResp',
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionUserDetail',
        method: 'POST',
        url: '/getCompetitionUserDetail',
        contract: {
          req: 'competition.getCompetitionUserDetailReq',
          resp: 'competition.getCompetitionUserDetailResp',
        },
        competitionSide: true,
      },
      {
        i: 'getSelfCompetitionUserDetail',
        method: 'POST',
        url: '/getSelfCompetitionUserDetail',
        contract: {
          req: 'competition.getSelfCompetitionUserDetailReq',
          resp: 'competition.getSelfCompetitionUserDetailResp',
        },
        competitionSide: true,
      },
      {
        i: 'getPublicCompetitionParticipants',
        method: 'POST',
        url: '/getPublicCompetitionParticipants',
        description: '获取指定比赛的所有有效参赛者列表',
        contract: {
          req: 'competition.getPublicCompetitionParticipantsReq',
          resp: 'competition.getPublicCompetitionParticipantsResp',
        },
        competitionSide: true,
      },
      {
        i: 'getPublicCompetitionParticipantDetail',
        method: 'POST',
        url: '/getPublicCompetitionParticipantDetail',
        description: '获取指定比赛中指定有效参赛者的详情',
        contract: {
          req: 'competition.getPublicCompetitionParticipantDetailReq',
          resp: 'competition.getPublicCompetitionParticipantDetailResp',
        },
        competitionSide: true,
      },
      {
        i: 'requestCompetitionParticipantPassword',
        method: 'POST',
        url: '/requestCompetitionParticipantPassword',
        description: '获取指定比赛中指定参赛者的新随机登录密码。需要场地协助或管理员权限',
        contract: {
          req: 'competition.requestCompetitionParticipantPasswordReq',
          resp: 'competition.requestCompetitionParticipantPasswordResp',
        },
        csrf: true,
      },
      {
        i: 'randomAllCompetitionUserPasswords',
        method: 'POST',
        url: '/randomAllCompetitionUserPasswords',
        contract: {
          req: 'competition.randomAllCompetitionUserPasswordsReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'getSignedUpCompetitionParticipant',
        method: 'POST',
        url: '/getSignedUpCompetitionParticipant',
        description: '获取指定比赛中自己作为参赛者的注册信息。如未注册，返回 null',
        contract: {
          req: 'competition.getSignedUpCompetitionParticipantReq',
          resp: 'competition.getSignedUpCompetitionParticipantResp',
        },
        competitionSide: true,
      },
      {
        i: 'signUpCompetitionParticipant',
        method: 'POST',
        url: '/signUpCompetitionParticipant',
        description: '注册参赛到指定比赛',
        contract: {
          req: 'competition.signUpCompetitionParticipantReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'modifySignedUpCompetitionParticipant',
        method: 'POST',
        url: '/modifySignedUpCompetitionParticipant',
        description: '修改指定比赛中自己作为参赛者的注册信息',
        contract: {
          req: 'competition.modifySignedUpCompetitionParticipantReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'deleteSignedUpCompetitionParticipant',
        method: 'POST',
        url: '/deleteSignedUpCompetitionParticipant',
        description: '删除指定比赛中自己作为参赛者的注册信息',
        contract: {
          req: 'competition.deleteSignedUpCompetitionParticipantReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'auditCompetitionParticipant',
        method: 'POST',
        url: '/auditCompetitionParticipant',
        contract: {
          req: 'competition.auditCompetitionParticipantReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'confirmEnterCompetition',
        method: 'POST',
        url: '/confirmEnterCompetition',
        description: '确认进入指定比赛。仅有效参赛者自身可用',
        contract: {
          req: 'competition.confirmEnterCompetitionReq',
          resp: null,
        },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'confirmQuitCompetition',
        method: 'POST',
        url: '/confirmQuitCompetition',
        description: '确认签退指定比赛。仅有效参赛者自身可用',
        contract: {
          req: 'competition.confirmQuitCompetitionReq',
          resp: null,
        },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'getCompetitionProblemSolutionStats',
        method: 'POST',
        url: '/getCompetitionProblemSolutionStats',
        description: '获取指定比赛的题目提交统计，包含每道题目的 AC/Submitted 计数',
        contract: {
          req: 'competition.getCompetitionProblemSolutionStatsReq',
          resp: 'competition.getCompetitionProblemSolutionStatsResp',
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionSettings',
        method: 'POST',
        url: '/getCompetitionSettings',
        contract: {
          req: 'competition.getCompetitionSettingsReq',
          resp: 'competition.getCompetitionSettingsResp',
        },
        competitionSide: true,
      },
      {
        i: 'updateCompetitionSettings',
        method: 'POST',
        url: '/updateCompetitionSettings',
        contract: {
          req: 'competition.updateCompetitionSettingsReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'getCompetitionNotifications',
        method: 'POST',
        url: '/getCompetitionNotifications',
        contract: {
          req: 'competition.getCompetitionNotificationsReq',
          resp: 'competition.getCompetitionNotificationsResp',
        },
        competitionSide: true,
      },
      {
        i: 'createCompetitionNotification',
        method: 'POST',
        url: '/createCompetitionNotification',
        contract: {
          req: 'competition.createCompetitionNotificationReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'deleteCompetitionNotification',
        method: 'POST',
        url: '/deleteCompetitionNotification',
        contract: {
          req: 'competition.deleteCompetitionNotificationReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'getCompetitionQuestions',
        method: 'POST',
        url: '/getCompetitionQuestions',
        contract: {
          req: 'competition.getCompetitionQuestionsReq',
          resp: 'competition.getCompetitionQuestionsResp',
        },
      },
      {
        i: 'getSelfCompetitionQuestions',
        method: 'POST',
        url: '/getSelfCompetitionQuestions',
        contract: {
          req: 'competition.getSelfCompetitionQuestionsReq',
          resp: 'competition.getSelfCompetitionQuestionsResp',
        },
        competitionSide: true,
      },
      {
        i: 'createCompetitionQuestion',
        method: 'POST',
        url: '/createCompetitionQuestion',
        contract: {
          req: 'competition.createCompetitionQuestionReq',
          resp: null,
        },
        csrf: true,
        competitionSide: true,
      },
      {
        i: 'replyCompetitionQuestion',
        method: 'POST',
        url: '/replyCompetitionQuestion',
        contract: {
          req: 'competition.replyCompetitionQuestionReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'endCompetition',
        method: 'POST',
        url: '/endCompetition',
        description: '触发指定比赛结算。需要负责人或更高权限',
        contract: {
          req: 'competition.endCompetitionReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'cancelEndCompetition',
        method: 'POST',
        url: '/cancelEndCompetition',
        description: '回滚指定比赛结算。需要负责人或更高权限',
        contract: {
          req: 'competition.cancelEndCompetitionReq',
          resp: null,
        },
        csrf: true,
      },
      {
        i: 'callbackCompetitionRatingPostprocess',
        method: 'POST',
        url: '/callbackCompetitionRatingPostprocess',
        contract: {
          req: 'competition.callbackCompetitionRatingPostprocessReq',
          resp: null,
        },
        private: true,
      },
      {
        i: 'getCompetitionRanklist',
        method: 'POST',
        url: '/getCompetitionRanklist',
        contract: {
          req: 'competition.getCompetitionRanklistReq',
          resp: 'competition.getCompetitionRanklistResp',
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionRatingStatus',
        method: 'POST',
        url: '/getCompetitionRatingStatus',
        contract: {
          req: 'competition.getCompetitionRatingStatusReq',
          resp: 'competition.getCompetitionRatingStatusResp',
        },
        competitionSide: true,
      },
      {
        i: 'getAllCompetitionSolutionsForSrkLite',
        method: 'POST',
        url: '/getAllCompetitionSolutionsForSrkLite',
        contract: {
          req: 'competition.getAllCompetitionSolutionsForSrkLiteReq',
          resp: null,
        },
        competitionSide: true,
      },
      {
        i: 'getCompetitionSpGenshinExplorationUnlockRecords',
        method: 'POST',
        url: '/getCompetitionSpGenshinExplorationUnlockRecords',
        contract: {
          req: 'competition.getCompetitionSpGenshinExplorationUnlockRecordsReq',
          resp: 'competition.getCompetitionSpGenshinExplorationUnlockRecordsResp',
        },
        competitionSide: true,
      },
      {
        i: 'doCompetitionSpGenshinExplorationUnlock',
        method: 'POST',
        url: '/doCompetitionSpGenshinExplorationUnlock',
        contract: {
          req: 'competition.doCompetitionSpGenshinExplorationUnlockReq',
          resp: null,
        },
        competitionSide: true,
      },
    ],
  },
  {
    module: 'balloon',
    routes: [
      {
        i: 'getCompetitionBalloons',
        method: 'POST',
        url: '/getCompetitionBalloons',
        contract: {
          req: 'balloon.getCompetitionBalloonsReq',
          resp: 'balloon.getCompetitionBalloonsResp',
        },
      },
      {
        i: 'updateCompetitionBalloonStatus',
        method: 'POST',
        url: '/updateCompetitionBalloonStatus',
        contract: {
          req: 'balloon.updateCompetitionBalloonStatusReq',
          resp: null,
        },
        csrf: true,
      },
    ],
  },
  {
    module: 'achievement',
    routes: [
      {
        i: 'getAchievementRate',
        method: 'POST',
        url: '/getAchievementRate',
        contract: {
          req: null,
          resp: 'achievement.getAchievementRateResp',
        },
        competitionSide: true,
      },
      {
        i: 'requestAchievementPush',
        method: 'POST',
        url: '/requestAchievementPush',
        contract: {
          req: null,
          resp: null,
        },
        competitionSide: true,
        csrf: true,
      },
    ],
  },
];

export const routesBe = routeBeModules.reduce((acc, m) => {
  m.routes.forEach((route) => {
    acc[route.i] = {
      ...route,
      module: m.module,
    };
  });
  return acc;
}, {} as Record<string, IRouteBeConfig>);
