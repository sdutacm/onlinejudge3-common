export enum EUserPermission {
  normal = 0, // 普通用户
  teacher = 1, // 教师
  admin = 2, // 管理员
  su = 3, // 超级管理员
  master = 4, // ？
}

export enum EUserForbidden {
  normal = 0, // 正常
  banned = 1, // 封禁
  closed = 2, // 销号
}

export enum ESolutionResult {
  WT = 0,
  JG = 12,
  AC = 1,
  TLE = 2,
  MLE = 3,
  WA = 4,
  RTE = 5,
  OLE = 6,
  CE = 7,
  PE = 8,
  SE = 11,

  // temp (river Pending)
  RPD = -1,
}

export enum EContestType {
  private = 1,
  register = 2,
  public = 3,
}

export enum EContestCategory {
  contest = 0,
  experiment = 1,
  test = 2,
}

export enum EContestMode {
  none = 0,
  rating = 1,
}

export enum EContestUserStatus {
  waiting = 0, // 待审核
  accepted = 1, // 已接受
  return = 2, // 等待修改
  rejected = 3, // 已拒绝
}

export enum EContestRatingStatus {
  PD = 0, // 等待中
  CAL = 1, // 正在计算
  DONE = 2, // 已完成
  ERR = 3, // 出现错误
}

export enum EGroupJoinChannel {
  any = 0, // 任意加入
  audit = 1, // 需要审核
  invitation = 2, // 仅限邀请
}

export enum EGroupMemberPermission {
  user = 0, // 成员
  admin = 1, // 管理员
  master = 3, // 群主
}

export enum EGroupMemberStatus {
  normal = 0, // 正常
  auditing = 1, // 等待审核
}

export enum ECompetitionUserRole {
  /** 管理员 */
  admin = 1,
  /** 选手 */
  participant = 2,
  /** 赛事负责人 */
  principal = 3,
  /** 裁判 */
  judge = 4,
  /** 审核员 */
  auditor = 5,
  /** 场地协助 */
  fieldAssistantant = 6,
  /** 志愿者 */
  volunteer = 7,
  /** 观察者 */
  observer = 8,
}

export enum ECompetitionUserStatus {
  /** 可用 */
  available = 1,
  /** 审核中 */
  auditing = 2,
  /** 需要修改 */
  modificationRequired = 3,
  /** 已拒绝 */
  rejected = 4,
  /** 已进入比赛 */
  entered = 5,
  /** 已签退比赛 */
  quitted = 6,
}

export enum EBalloonType {
  /** 派送 */
  delivery = 1,
  /** 撤回 */
  recall = 2,
}

export enum EBalloonStatus {
  /** 待分配 */
  pending = 1,
  /** 进行中 */
  doing = 2,
  /** 已完成 */
  completed = 3,
  /** 已取消 */
  cancelled = 4,
}
