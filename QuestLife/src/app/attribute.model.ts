export interface Attribute extends BaseAttribute {
  description: string;
  suggestedActivities: Activity[];
}

export interface BaseAttribute {
  name: string;
  level: number;
  currentXP: number;
  currentLevelMaxXP: number;
}

export type Activity = string;
