export enum EPerm {
  enterAdmin = 'enterAdmin',
  viewAllLogs = 'viewAllLogs',
  viewAllMonitors = 'viewAllMonitors',
  viewAllProblems = 'viewAllProblems',
  createProblem = 'createProblem',
  editProblem = 'editProblem',
  viewAllProblemData = 'viewAllProblemData',
  uploadProblemData = 'uploadProblemData',
  downloadProblemData = 'downloadProblemData',
  viewAllTags = 'viewAllTags',
  createTag = 'createTag',
  editTag = 'editTag',
  viewAllContests = 'viewAllContests',
  createContest = 'createContest',
  editContest = 'editContest',
  endContest = 'endContest',
  viewAllContestProblems = 'viewAllContestProblems',
  editContestProblem = 'editContestProblem',
  importContestUsers = 'importContestUsers',
  exportContestUsers = 'exportContestUsers',
  auditContestUser = 'auditContestUser',
  editContestUser = 'editContestUser',
  viewAllUsers = 'viewAllUsers',
  createUser = 'createUser',
  importUsers = 'importUsers',
  editUser = 'editUser',
  resetUserPassword = 'resetUserPassword',
  viewAllUserPermissions = 'viewAllUserPermissions',
  editUserPermission = 'editUserPermission',
  viewSolutionDetail = 'viewSolutionDetail',
  rejudgeSolution = 'rejudgeSolution',
  viewAllTopics = 'viewAllTopics',
  deleteTopic = 'deleteTopic',
  deleteReply = 'deleteReply',
  viewAllPosts = 'viewAllPosts',
  createOfficialPost = 'createOfficialPost',
  editPost = 'editPost',
  deletePost = 'deletePost',
  viewAllSets = 'viewAllSets',
  createSet = 'createSet',
  editSet = 'editSet',
  deleteSet = 'deleteSet',
  viewAllGroups = 'viewAllGroups',
  importGroup = 'importGroup',
  editGroup = 'editGroup',
  deleteGroup = 'deleteGroup',
  addGroupMember = 'addGroupMember',
  editGroupMember = 'editGroupMember',
  removeGroupMember = 'removeGroupMember',
}

const permConfig = {
  [EPerm.enterAdmin]: {
    desc: '进入管理后台',
  },
  [EPerm.viewAllLogs]: {
    desc: '浏览全部日志',
  },
  [EPerm.viewAllMonitors]: {
    desc: '浏览全部监控',
  },
  [EPerm.viewAllProblems]: {
    desc: '浏览全部题目',
  },
  [EPerm.createProblem]: {
    desc: '创建题目',
  },
  [EPerm.editProblem]: {
    desc: '编辑题目',
  },
  [EPerm.viewAllProblemData]: {
    desc: '浏览全部题目数据',
  },
  [EPerm.uploadProblemData]: {
    desc: '上传题目数据',
  },
  [EPerm.downloadProblemData]: {
    desc: '下载题目数据',
  },
  [EPerm.viewAllTags]: {
    desc: '浏览全部标签',
  },
  [EPerm.createTag]: {
    desc: '创建标签',
  },
  [EPerm.editTag]: {
    desc: '编辑标签',
  },
  [EPerm.viewAllContests]: {
    desc: '浏览全部比赛',
  },
  [EPerm.createContest]: {
    desc: '创建比赛',
  },
  [EPerm.editContest]: {
    desc: '编辑比赛',
  },
  [EPerm.endContest]: {
    desc: '结束比赛',
  },
  [EPerm.viewAllContestProblems]: {
    desc: '浏览全部比赛题目',
  },
  [EPerm.editContestProblem]: {
    desc: '编辑比赛题目',
  },
  [EPerm.importContestUsers]: {
    desc: '导入比赛用户',
  },
  [EPerm.exportContestUsers]: {
    desc: '导出比赛用户',
  },
  [EPerm.auditContestUser]: {
    desc: '审核比赛用户',
  },
  [EPerm.editContestUser]: {
    desc: '编辑比赛用户',
  },
  [EPerm.viewAllUsers]: {
    desc: '浏览全部用户',
  },
  [EPerm.createUser]: {
    desc: '创建用户',
  },
  [EPerm.importUsers]: {
    desc: '导入用户',
  },
  [EPerm.editUser]: {
    desc: '编辑用户',
  },
  [EPerm.resetUserPassword]: {
    desc: '重设用户密码',
  },
  [EPerm.viewAllUserPermissions]: {
    desc: '浏览全部用户权限',
  },
  [EPerm.editUserPermission]: {
    desc: '编辑用户权限',
  },
  [EPerm.viewSolutionDetail]: {
    desc: '查看提交详情',
  },
  [EPerm.rejudgeSolution]: {
    desc: '重判提交',
  },
  [EPerm.viewAllTopics]: {
    desc: '浏览全部话题',
  },
  [EPerm.deleteTopic]: {
    desc: '删除话题',
  },
  [EPerm.deleteReply]: {
    desc: '删除评论',
  },
  [EPerm.viewAllPosts]: {
    desc: '浏览全部帖子',
  },
  [EPerm.createOfficialPost]: {
    desc: '创建官方帖子',
  },
  [EPerm.editPost]: {
    desc: '编辑帖子',
  },
  [EPerm.deletePost]: {
    desc: '删除帖子',
  },
  [EPerm.viewAllSets]: {
    desc: '浏览全部题目集',
  },
  [EPerm.createSet]: {
    desc: '创建题目集',
  },
  [EPerm.editSet]: {
    desc: '编辑题目集',
  },
  [EPerm.deleteSet]: {
    desc: '删除题目集',
  },
  [EPerm.viewAllGroups]: {
    desc: '浏览全部用户组',
  },
  [EPerm.importGroup]: {
    desc: '导入用户组',
  },
  [EPerm.editGroup]: {
    desc: '编辑用户组',
  },
  [EPerm.deleteGroup]: {
    desc: '删除用户组',
  },
  [EPerm.addGroupMember]: {
    desc: '添加用户组成员',
  },
  [EPerm.editGroupMember]: {
    desc: '编辑用户组成员',
  },
  [EPerm.removeGroupMember]: {
    desc: '移除用户组成员',
  },
};

export default permConfig;
export type IPermConfig = typeof permConfig;
