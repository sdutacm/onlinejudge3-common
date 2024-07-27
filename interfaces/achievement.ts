import { EAchievementLevel } from '../enums';

export interface IAchievement {
  achievementKey: string;
  title: string;
  level: EAchievementLevel;
  description: string;
  annotation: string;
  hidden: boolean;
}

export interface IAchievementCategory {
  categoryKey: string;
  title: string;
  achievements: IAchievement[];
}

export type IAchievementConfig = IAchievementCategory[];
