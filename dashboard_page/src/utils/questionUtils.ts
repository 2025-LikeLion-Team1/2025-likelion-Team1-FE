import { Question } from '../types';

export const sortQuestionsByHot = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => b.likeCount - a.likeCount);
};

export const sortQuestionsByDday = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => a.daysLeft - b.daysLeft);
};

export const formatDaysLeft = (days: number): string => {
  return `D - ${days}`;
};

export const formatLikeCount = (count: number): string => {
  return `🔥 ${count}`;
};

export const isUrgent = (daysLeft: number): boolean => {
  return daysLeft <= 5;
};
