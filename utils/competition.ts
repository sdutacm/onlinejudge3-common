import { ECompetitionUserRole } from '../enums';
import { ICompetitionProblemVarScoreExpressionContext } from '../interfaces/competition';

/**
 * 校验比赛用户是否符合角色表达式
 * @param roleExpr 要校验的角色表达式（或关系）
 * @param userRole 用户角色
 */
export function checkCompetitionUserRole(
  roleExpr: ECompetitionUserRole[],
  userRole: ECompetitionUserRole,
): boolean {
  return roleExpr.includes(userRole);
}

/**
 * 编译题目可变分数表达式
 * @param exp 表达式
 * @param context 相关字段对象
 */
export function compileVarScoreExpression(
  exp: string,
  context: ICompetitionProblemVarScoreExpressionContext,
): string {
  return exp
    .replace(/\$score/g, context.score.toString())
    .replace(/\$problemIndex/g, context.problemIndex.toString())
    .replace(/\$elapsedTime\.h/g, context.elapsedTime.h.toString())
    .replace(/\$elapsedTime\.min/g, context.elapsedTime.min.toString())
    .replace(/\$elapsedTime\.s/g, context.elapsedTime.s.toString())
    .replace(/\$tries/g, context.tries.toString());
}
