import {
  ICompetition,
  ICompetitionSpConfigGenhinExplorationW2KByDistributePeriodically,
  ICompetitionSpConfigGenhinExplorationW2KByGetBySolvingProblems,
  ICompetitionSpConfig,
} from '../interfaces/competition';

/**
 * 获取原神探索模式钥匙信息。
 * @param competition 比赛详情对象
 * @param elapsedTimeSecond 当前相对比赛开始时间过去的秒数
 * @param acceptedProblemIndexes 已经通过的比赛题目下标
 * @param unlockedSectionIds 已经解锁的区域 ID
 * @returns 钥匙信息
 */
export function getSpGenshinExplorationKeyInfo(
  competition: RequireSome<ICompetition, 'spConfig'>,
  elapsedTimeSecond: number,
  acceptedProblemIndexes: number[],
  unlockedSectionIds: string[],
): {
  /** 当前钥匙数量 */
  current: number;
  /** 系统分发的钥匙数量 */
  distributed: number;
  /** 已经赚取的钥匙数量 */
  earned: number;
  /** 已经使用的钥匙数量 */
  used: number;
} {
  const spConfig = competition.spConfig || {};
  const conf = spConfig.genshinConfig || {};
  if (!conf.useExplorationMode) {
    return {
      current: 0,
      distributed: 0,
      earned: 0,
      used: 0,
    };
  }

  const explorationModeOptions = conf.explorationModeOptions || {};
  const initialKeyNum = explorationModeOptions.initialKeyNum || 0;
  const maxKeyNum = explorationModeOptions.maxKeyNum ?? Infinity;
  const waysToGetKey = explorationModeOptions.waysToGetKey || [];
  const distrubutePeriodicallyWay = waysToGetKey.find((w) => w.by === 'distributePeriodically') as
    | ICompetitionSpConfigGenhinExplorationW2KByDistributePeriodically
    | undefined;
  const getBySolvingProblemsWay = waysToGetKey.find((w) => w.by === 'getBySolvingProblems') as
    | ICompetitionSpConfigGenhinExplorationW2KByGetBySolvingProblems
    | undefined;
  const sections = explorationModeOptions.sections || [];

  let distributed = initialKeyNum;
  if (distrubutePeriodicallyWay) {
    const startAtSecond = distrubutePeriodicallyWay.startAtSecond || Infinity;
    const periodSecond = distrubutePeriodicallyWay.periodSecond || Infinity;
    const num = distrubutePeriodicallyWay.num || 0;
    if (elapsedTimeSecond >= startAtSecond) {
      distributed += Math.floor(1 + (elapsedTimeSecond - startAtSecond) / periodSecond) * num;
    }
  }

  let earned = 0;
  if (getBySolvingProblemsWay) {
    if (getBySolvingProblemsWay.condition === 'onceSectionCompleted') {
      const num = getBySolvingProblemsWay.num || 0;
      for (const section of sections) {
        if (section.problemIndexes.every((i) => acceptedProblemIndexes.includes(i))) {
          earned += num;
        }
      }
    }
  }

  let used = 0;
  for (const section of sections) {
    if (!section.unlockByDefault && unlockedSectionIds.includes(section.id)) {
      used += section.unlockKeyCost ?? 1;
    }
  }

  const current = Math.min(distributed + earned - used, maxKeyNum);

  return {
    current,
    distributed,
    earned,
    used,
  };
}

export enum ESpGenshinSectionCheckUnlockResult {
  InvalidConfig = 'InvalidConfig',
  SectionNotFound = 'SectionNotFound',
  SectionAlreadyUnlocked = 'SectionAlreadyUnlocked',
  NotEnoughKeys = 'NotEnoughKeys',
  OK = 'OK',
}

/**
 * 检查原神探索模式指定区域是否可以解锁。
 * @param competition 比赛详情对象
 * @param elapsedTimeSecond 当前相对比赛开始时间过去的秒数
 * @param acceptedProblemIndexes 已经通过的比赛题目下标
 * @param unlockedSectionIds 已经解锁的区域 ID
 * @param sectionId 欲解锁的区域 ID
 * @returns 检查结果
 */
export function checkSpGenshinUnlockSection(
  competition: { spConfig: ICompetitionSpConfig },
  elapsedTimeSecond: number,
  acceptedProblemIndexes: number[],
  unlockedSectionIds: string[],
  sectionId: string,
): {
  /** 可解锁 */
  canUnlock: boolean;
  /** 解锁花费钥匙数量 */
  keyCost: number;
  /** 解锁前钥匙数量 */
  keyNumBefore: number;
  /** 解锁后钥匙数量 */
  keyNumAfter: number;
  /** 检查结果枚举 */
  result: ESpGenshinSectionCheckUnlockResult;
  /** 检查提示消息 */
  message: string;
} {
  const spConfig = competition.spConfig || {};
  const conf = spConfig.genshinConfig || {};
  if (!conf.useExplorationMode) {
    return {
      canUnlock: false,
      keyCost: 0,
      keyNumBefore: 0,
      keyNumAfter: 0,
      result: ESpGenshinSectionCheckUnlockResult.InvalidConfig,
      message: 'Exploration mode is not enabled',
    };
  }

  const keyInfo = getSpGenshinExplorationKeyInfo(
    competition,
    elapsedTimeSecond,
    acceptedProblemIndexes,
    unlockedSectionIds,
  );
  const explorationModeOptions = conf.explorationModeOptions || {};
  const sections = explorationModeOptions.sections || [];
  const section = sections.find((s) => s.id === sectionId);

  if (!section) {
    return {
      canUnlock: false,
      keyCost: 0,
      keyNumBefore: keyInfo.current,
      keyNumAfter: keyInfo.current,
      result: ESpGenshinSectionCheckUnlockResult.SectionNotFound,
      message: 'Section not found',
    };
  }

  if (unlockedSectionIds.includes(sectionId) || section.unlockByDefault) {
    return {
      canUnlock: true,
      keyCost: 0,
      keyNumBefore: keyInfo.current,
      keyNumAfter: keyInfo.current,
      result: ESpGenshinSectionCheckUnlockResult.SectionAlreadyUnlocked,
      message: 'Section already unlocked',
    };
  }

  const unlockKeyCost = section.unlockKeyCost || 1;
  const canUnlock = keyInfo.current >= unlockKeyCost;

  if (!canUnlock) {
    return {
      canUnlock,
      keyCost: unlockKeyCost,
      keyNumBefore: keyInfo.current,
      keyNumAfter: keyInfo.current,
      result: ESpGenshinSectionCheckUnlockResult.NotEnoughKeys,
      message: 'Not enough keys',
    };
  }

  return {
    canUnlock,
    keyCost: unlockKeyCost,
    keyNumBefore: keyInfo.current,
    keyNumAfter: keyInfo.current - unlockKeyCost,
    result: ESpGenshinSectionCheckUnlockResult.OK,
    message: 'Section unlocked',
  };
}
