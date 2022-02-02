export enum EPerm {
  AdminAccess = 'AdminAccess',
  // ReadLog = 'ReadLog',
  // ReadMonitor = 'ReadMonitor',
  ReadProblem = 'ReadProblem',
  WriteProblem = 'WriteProblem',
  ReadProblemData = 'ReadProblemData',
  WriteProblemData = 'WriteProblemData',
  ReadTag = 'ReadTag',
  WriteTag = 'WriteTag',
  WriteProblemTag = 'WriteProblemTag',
  SendSystemMessage = 'SendSystemMessage',
  ContestAccess = 'ContestAccess',
  ReadContest = 'ReadContest',
  WriteContest = 'WriteContest',
  EndContest = 'EndContest',
  ReadContestProblem = 'ReadContestProblem',
  WriteContestProblem = 'WriteContestProblem',
  ReadContestUser = 'ReadContestUser',
  WriteContestUser = 'WriteContestUser',
  ExportContestUsers = 'ExportContestUsers',
  AuditContestUser = 'AuditContestUser',
  ReadUser = 'ReadUser',
  WriteUser = 'WriteUser',
  ResetUserPassword = 'ResetUserPassword',
  ReadUserPermission = 'ReadUserPermission',
  WriteUserPermission = 'WriteUserPermission',
  ReadSolution = 'ReadSolution',
  RejudgeSolution = 'RejudgeSolution',
  ReadTopic = 'ReadTopic',
  DeleteTopic = 'DeleteTopic',
  DeleteReply = 'DeleteReply',
  ReadPost = 'ReadPost',
  WritePost = 'WritePost',
  ReadSet = 'ReadSet',
  WriteSet = 'WriteSet',
  DeleteSet = 'DeleteSet',
  ReadGroup = 'ReadGroup',
  WriteGroup = 'WriteGroup',
  DeleteGroup = 'DeleteGroup',
  UploadAsset = 'UploadAsset',
}

const permConfig = [
  {
    permission: EPerm.AdminAccess,
    name: '访问管理后台',
    description: '可进入管理后台，但具体可管理项目受其他权限控制',
  },
  {
    permission: EPerm.UploadAsset,
    name: '上传资源文件',
    description: '可上传资源文件，如题目配图',
  },
  {
    permission: EPerm.ReadProblem,
    name: '题目-读',
    description: '可读取完整题目列表和题目详情，包括隐藏的题目',
  },
  {
    permission: EPerm.WriteProblem,
    name: '题目-写',
    description: '可创建、编辑题目，控制是否隐藏',
  },
  {
    permission: EPerm.ReadProblemData,
    name: '题目数据-读',
    description: '可读取题目的测试数据列表、查看数据内容以及下载数据包',
  },
  { permission: EPerm.WriteProblemData, name: '题目数据-写', description: '可编辑题目测试数据' },
  { permission: EPerm.ReadTag, name: '标签-读', description: '可读取标签列表' },
  { permission: EPerm.WriteTag, name: '标签-写', description: '可创建、编辑标签' },
  { permission: EPerm.WriteProblemTag, name: '题目标签-写', description: '可编辑任何题目的标签' },
  {
    permission: EPerm.ReadSolution,
    name: '提交-读',
    description: '可读取任何提交的代码、评测结果等信息，包括比赛中的提交',
  },
  {
    permission: EPerm.RejudgeSolution,
    name: '重判提交',
    description: '可重判任何提交，包括比赛中的提交',
  },
  { permission: EPerm.ContestAccess, name: '访问比赛', description: '可直接访问任何比赛（只读）' },
  {
    permission: EPerm.ReadContest,
    name: '比赛-读',
    description: '可读取完整比赛列表和比赛详情，包括隐藏的比赛',
  },
  {
    permission: EPerm.WriteContest,
    name: '比赛-写',
    description: '可创建、编辑比赛，控制是否隐藏',
  },
  {
    permission: EPerm.EndContest,
    name: '结束比赛',
    description: '可触发比赛结算（如 Rating 类型）',
  },
  {
    permission: EPerm.ReadContestProblem,
    name: '比赛题目-读',
    description: '可读取任何比赛的题目配置',
  },
  {
    permission: EPerm.WriteContestProblem,
    name: '比赛题目-写',
    description: '可编辑任何比赛的题目配置',
  },
  {
    permission: EPerm.ReadContestUser,
    name: '比赛用户-读',
    description: '可读取任何比赛的完整用户列表和用户详情，包括用户密码和审核状态',
  },
  {
    permission: EPerm.WriteContestUser,
    name: '比赛用户-写',
    description: '可创建、导入、编辑任何比赛的用户，包括设置用户密码和审核状态',
  },
  {
    permission: EPerm.ExportContestUsers,
    name: '导出比赛用户',
    description: '可导出任何比赛的已审核通过的用户列表，包括用户密码',
  },
  {
    permission: EPerm.AuditContestUser,
    name: '审核比赛用户',
    description: '可审核任何比赛的用户，仅能根据公开注册信息提交审核结果',
  },
  {
    permission: EPerm.ReadUser,
    name: '用户-读',
    description: '可读取完整用户列表和用户详情，包括被封禁的用户',
  },
  {
    permission: EPerm.WriteUser,
    name: '用户-写',
    description: '可创建、导入、编辑用户信息，包括设置封禁状态',
  },
  { permission: EPerm.ResetUserPassword, name: '重设用户密码', description: '可重设用户的密码' },
  {
    permission: EPerm.ReadUserPermission,
    name: '用户权限-读',
    description: '可读取任何用户的权限列表',
  },
  {
    permission: EPerm.WriteUserPermission,
    name: '用户权限-写',
    description: '可编辑任何用户的权限列表',
  },
  { permission: EPerm.ReadTopic, name: '话题-读', description: '可读取完整话题列表和话题详情' },
  { permission: EPerm.DeleteTopic, name: '删除话题', description: '可删除任何话题' },
  { permission: EPerm.DeleteReply, name: '删除评论', description: '可删除任何评论' },
  { permission: EPerm.ReadPost, name: '帖子-读', description: '可读取完整帖子列表和帖子详情' },
  { permission: EPerm.WritePost, name: '帖子-写', description: '可创建、编辑帖子，控制是否隐藏' },
  { permission: EPerm.ReadSet, name: '题目集-读', description: '可读取完整题目集列表和题目集详情' },
  {
    permission: EPerm.WriteSet,
    name: '题目集-写',
    description: '可创建、编辑题目集，控制是否隐藏',
  },
  { permission: EPerm.DeleteSet, name: '删除题目集', description: '可删除任何题目集' },
  {
    permission: EPerm.ReadGroup,
    name: '用户组-读',
    description: '可读取完整用户组列表和用户组详情，包含成员列表和成员详情',
  },
  {
    permission: EPerm.WriteGroup,
    name: '用户组-写',
    description: '可创建、编辑用户组，包含成员管理',
  },
  { permission: EPerm.DeleteGroup, name: '删除用户组', description: '可删除任何用户组' },
  {
    permission: EPerm.SendSystemMessage,
    name: '发送系统消息',
    description: '可发送系统消息到一个或多个用户',
  },
];

export default permConfig;
export type IPermConfig = typeof permConfig;

/**
 * 校验指定权限表达式。
 *
 * 传递一个数组作为表达式，每一项之间是且关系，如果项本身为数组，则此项内是或关系。
 * @param permExpr 要校验的权限表达式
 * @param userPerms 用户当前拥有的权限
 * @example
 * checkPermExpr(['A', 'B'], ['A']) // false
 * checkPermExpr(['A', 'B'], ['B', 'A', 'C']) // true
 * checkPermExpr(['A', ['B', 'C']], ['A']) // false
 * checkPermExpr(['A', ['B', 'C']], ['A', 'C']) // true
 */
export function checkPermExpr(permExpr: (EPerm | EPerm[])[], userPerms: EPerm[]) {
  for (const expr of permExpr) {
    if (Array.isArray(expr)) {
      // or
      let passed = false;
      for (const subExpr of expr) {
        if (userPerms.includes(subExpr)) {
          passed = true;
          break;
        }
      }
      if (!passed) {
        return false;
      }
    } else {
      // and
      if (!userPerms.includes(expr)) {
        return false;
      }
    }
  }
  return true;
}
