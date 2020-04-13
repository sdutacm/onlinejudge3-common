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
}

export enum EContestType {
  private = 1,
  register = 2,
  public = 3,
}

export enum EContestMode {
  none = 0,
  rating = 1,
}

export enum EContestUserStatus {
  wating = 0, // 待审核
  accepted = 1, // 已接受
  return = 2, // 等待修改
  rejected = 3, // 已拒绝
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
