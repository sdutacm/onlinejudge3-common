import { ECompetitionUserRole } from '../enums';

/**
 * 校验比赛用户是否符合角色表达式
 * @param roleExpr 要校验的角色表达式（或关系）
 * @param userRole 用户角色
 */
export default function checkCompetitionUserRole(
  roleExpr: ECompetitionUserRole[],
  userRole: ECompetitionUserRole,
): boolean {
  return roleExpr.includes(userRole);
}
